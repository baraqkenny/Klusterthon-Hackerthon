from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from ..dependencies.notifications import send_otp_email, generate_otp
from ..dependencies.send_email import send_email_background
# from ..schemas.schema import PatientCreate, Patient
from ..models.models import Patient, Patient_Pydantic, PatientIn_Pydantic, PatientWithMedications_Pydantic
from tortoise.transactions import in_transaction
import bcrypt

router = APIRouter()


@router.post('/patient', response_model=Patient_Pydantic)
async def create_patient(patient: PatientIn_Pydantic, background_tasks: BackgroundTasks, otp: str = Depends(generate_otp)):

    # Hash the password using bcrypt
    hashed_password = bcrypt.hashpw(
        patient.password.encode('utf-8'), bcrypt.gensalt())

    try:
        async with in_transaction():
            patient_details = patient.dict()
            patient_details['password'] = hashed_password.decode('utf-8')
            new_patient = await Patient.create(**patient_details)

            background_tasks.add_task(
                send_email_background, email=patient_details['email'], otp=otp)
            print('Message sent to email')
        return await Patient_Pydantic.from_tortoise_orm(new_patient)
    except Exception as err:
        raise HTTPException(status_code=422, detail=str(err))


@router.get('/patient/{patient_id}', response_model=PatientWithMedications_Pydantic)
async def get_patient(patient_id: int):
    try:
        patient = await PatientWithMedications_Pydantic.from_queryset_single(Patient.get(patient_id=patient_id))
        return patient
    except Exception as err:
        raise HTTPException(status_code=404, detail=str(err))
