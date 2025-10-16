FROM python:3.9

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

# فایل را ساده کپی کنید، نیازی به chmod نیست
COPY entrypoint.sh /app/entrypoint.sh

COPY . .

EXPOSE 8000