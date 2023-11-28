from ..models.models import Medication, Medication_Pydantic, MedicationIn_Pydantic, Patient_Pydantic, Patient
from fastapi import HTTPException, APIRouter, Depends
from tortoise.transactions import in_transaction
from tortoise.queryset import QuerySet

router = APIRouter()


# @router.post('/medication/{patient_id}', response_model=Medication_Pydantic)
# async def add_medication(medication: MedicationIn_Pydantic, patient_id: int):
#     try:
#         async with in_transaction():
#             print(type(medication.dict()))
#             new_medication = await Medication.create(patient_id=patient_id, **medication.dict())
#             # print(new_medication)
#             return await Medication_Pydantic.from_tortoise_orm(new_medication)
#     except Exception as err:
#         pass
#         # raise HTTPException(status_code=422, detail=err)

@router.post("/medications/{patient_id}", response_model=Medication_Pydantic)
async def create_medication(
    patient_id: int,
    medication: MedicationIn_Pydantic,
):
    try:
        patient = await Patient.get(patient_id=patient_id)
        print(patient)
        # Create a new medication and establish the relationship with the patient
        async with in_transaction():
            new_medication = await Medication.create(patient=patient, **medication.dict())

            return new_medication
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
