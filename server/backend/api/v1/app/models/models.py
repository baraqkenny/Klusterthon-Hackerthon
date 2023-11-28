from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator
from typing import List


class Patient(models.Model):
    patient_id = fields.IntField(pk=True)
    firstname = fields.CharField(max_length=255)
    lastname = fields.CharField(max_length=255)
    email = fields.CharField(max_length=255)
    phone_number = fields.CharField(max_length=15)
    password = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now_add=True)
    modified_at = fields.DatetimeField(auto_now=True)
    medications: fields.ReverseRelation['Medication']


class Medication(models.Model):
    medication_id = fields.IntField(pk=True)
    name = fields.CharField(max_length=255)
    dosage = fields.CharField(max_length=255)
    frequency = fields.IntField(default=0)
    drug_time = fields.JSONField()
    duration = fields.IntField(default=0)
    number_doses_taken = fields.IntField(default=0)
    number_doses_missed = fields.IntField(default=0)
    created_at = fields.DatetimeField(auto_now_add=True)
    modified_at = fields.DatetimeField(auto_now=True)
    patient: fields.ForeignKeyRelation[Patient] = fields.ForeignKeyField(
        "models.Patient", related_name="medications")

    # class PydanticMeta:
    #     exclude = []


class HealthWorker(models.Model):
    healthworker_id = fields.IntField(pk=True)
    firstname = fields.CharField(max_length=255)
    lastname = fields.CharField(max_length=255)
    password_hash = fields.CharField(max_length=255)
    email = fields.CharField(max_length=255)
    profession = fields.CharField(max_length=255)
    created_at = fields.DatetimeField(auto_now_add=True)
    modified_at = fields.DatetimeField(auto_now=True)

    class PydanticMeta:
        exclude = ['password_hash']


Medication_Pydantic = pydantic_model_creator(Medication, name='Medication')
MedicationIn_Pydantic = pydantic_model_creator(
    Medication, name='MedicationIn', exclude_readonly=True, exclude=['created_at', 'modified_at'])

Patient_Pydantic = pydantic_model_creator(
    Patient, name='Patient', exclude=['password'])
PatientIn_Pydantic = pydantic_model_creator(
    Patient, name='PatientIn', exclude_readonly=True, exclude=['created_at', 'modified_at'])

# print(Patient_Pydantic.model_json_schema())


class PatientWithMedications_Pydantic(Patient_Pydantic):
    medications: List[Medication_Pydantic]
