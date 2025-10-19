#!/bin/sh

# اگر هر دستوری با خطا مواجه شد، اسکریپت متوقف می‌شود
set -e

# --- خطوط دیباگ جدید ---
echo "--- Debugging Database Connection ---"
echo "DATABASE_URL is: ${DATABASE_URL}"
echo "DB_HOST is: ${DB_HOST}"
echo "DB_NAME is: ${DB_NAME}"
echo "DB_USER is: ${DB_USER}"
echo "------------------------------------"
# --- پایان خطوط دیباگ ---

# این دستور مایگریشن‌ها را اجرا می‌کند
echo "Running database migrations..."
python manage.py migrate

# این دستور تمام آرگومان‌های ارسال شده به اسکریپت را اجرا می‌کند
echo "Starting server..."
exec "$@"