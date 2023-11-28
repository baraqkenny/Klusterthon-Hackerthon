from fastapi import BackgroundTasks
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig


class Envs:
    MAIL_USERNAME = 'gideonobiasor@gmail.com'
    MAIL_PASSWORD = 'G1deon@004'
    MAIL_FROM = 'gideonobiasor@gmail.com'
    MAIL_PORT = 587
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_FROM_NAME = 'OTP notification'


conf = ConnectionConfig(
    MAIL_USERNAME=Envs.MAIL_USERNAME,
    MAIL_PASSWORD=Envs.MAIL_PASSWORD,
    MAIL_FROM=Envs.MAIL_FROM,
    MAIL_PORT=Envs.MAIL_PORT,
    MAIL_SERVER=Envs.MAIL_SERVER,
    MAIL_FROM_NAME=Envs.MAIL_FROM_NAME,
    MAIL_SSL_TLS=True,
    # MAIL_TLS=True,
    # MAIL_SSL=False,
    USE_CREDENTIALS=True,
)


async def send_email_async(subject: str, email_to: str, body: dict):
    message = MessageSchema(
        subject=subject,
        recipients=[email_to],
        body=body,
        subtype='html',
    )

    fm = FastMail(conf)
    await fm.send_message(message, template_name='email.html')


def send_email_background(background_tasks: BackgroundTasks, email: str, otp: str):
    # Create the message
    message = MessageSchema(
        subject="OTP notification",
        recipients=[email],
        body=f"Your OTP for verification is: {otp}",
        subtype="html"
    )
    fm = FastMail(conf)
    # Enqueue the email sending task
    background_tasks.add_task(fm.send_message, message)
