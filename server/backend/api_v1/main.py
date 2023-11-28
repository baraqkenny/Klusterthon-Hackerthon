from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from tortoise.contrib.fastapi import register_tortoise
from app.routes.patient import router as patient_routes
from app.routes.medication import router as medication_routes
import uvicorn

# Setup fastapi app instance
app = FastAPI(
    title='Drug compliance API',
)

# Handle CORS via middlewares
origins = [
    'http://localhost:3000',
    'localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

# Database configuration using tortoise-ORM
# # Set a flag to track whether schemas have been generated
schemas_generated = False

TORTOISE_ORM = {
    "connections": {
        "default": 'sqlite://./drug_adherence.db',
    },
    "apps": {
        "models": {
            "models": ['app.models.models'],
            "default_connection": "default"
        }
    }
}


def generate_schemas():
    global schemas_generated
    if not schemas_generated:
        register_tortoise(
            app,
            config=TORTOISE_ORM,
            generate_schemas=True
        )
        schemas_generated = True


# Call this function to generate schemas only when needed
generate_schemas()


# Mount all api routes
app.include_router(patient_routes, prefix='/api/v1')
app.include_router(medication_routes, prefix='/api/v1')


@app.get('/', tags=['roots'])
async def home():
    return {'message': 'This is testing message'}


if __name__ == '__main__':
    uvicorn.run('main:app', reload=True, host='0.0.0.0', port=8000)
