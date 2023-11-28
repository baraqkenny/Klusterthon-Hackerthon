import aiosmtplib
# import secrets
import pyotp
from email.mime.text import MIMEText
from twilio.rest import Client

# Email and SMS configurations
EMAIL_SENDER = "gideonobiasor@gmail.com"
HOSTNAME = "smtp.gmail.com"
EMAIL_PASSWORD = "G1deon@004"
SMS_SID = "your_twilio_sid"
SMS_AUTH_TOKEN = "your_twilio_auth_token"
SMS_PHONE_NUMBER = "your_twilio_phone_number"

# Generate OTP
OTP_SECRET = pyotp.random_base32()


def generate_otp():
    totp = pyotp.TOTP(OTP_SECRET)
    return totp.now()

# Logic to send OTP via email (asynchronous)


async def send_otp_email(email: str, otp: str):
    subject = "OTP Verification"
    body = f"Your OTP for verification is: {otp}"

    message = MIMEText(body)
    message["Subject"] = subject
    message["From"] = EMAIL_SENDER
    message["To"] = email

    # Use aiosmtplib to send the email asynchronously
    async with aiosmtplib.SMTP(hostname=HOSTNAME, port=587) as server:
        await server.connect()
        await server.login(EMAIL_SENDER, EMAIL_PASSWORD)
        await server.send_message(message)

# Logic to send OTP via SMS (synchronous)


def send_otp_sms(phone_number: str, otp: str):
    # Use Twilio library (synchronous, as twilio-async is not available)
    client = Client(SMS_SID, SMS_AUTH_TOKEN)

    message = client.messages.create(
        body=f"Your OTP for verification is: {otp}",
        from_=SMS_PHONE_NUMBER,
        to=phone_number
    )

# ... (Remaining code)
