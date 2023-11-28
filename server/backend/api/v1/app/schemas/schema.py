from typing import List, Optional

from pydantic import BaseModel


class MedicationCreate(BaseModel):
    name: str
    dosage: str
    frequency: int
    drug_time: List[int]
    duration: int


class Medication(MedicationCreate):
    medication_id: int
    number_doses_taken: int = 0
    number_doses_missed: int = 0


class PatientCreate(BaseModel):
    firstname: str
    lastname: str
    email: str
    phone_number: str
    password: str
    # medications: List[MedicationCreate] = []


class Patient(PatientCreate):
    medications: List[MedicationCreate] = []


class HealthWorkerCreate(BaseModel):
    firstname: str
    lastname: str
    email: str
    profession: str


class HealthWorker(HealthWorkerCreate):
    healthworker_id: int


class OTPValidation(BaseModel):
    email: str
    phone_number: str
    OTP: int
