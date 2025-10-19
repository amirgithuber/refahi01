#!/bin/sh

# اگر هر دستوری با خطا مواجه شد، اسکریپت متوقف می‌شود
set -e

# این دستور مایگریشن‌ها را اجرا می‌کند
echo "Running database migrations..."
python manage.py migrate

# این دستور تمام آرگومان‌های ارسال شده به اسکریپت را اجرا می‌کند
# (مثلاً دستور اصلی برای اجرای سرور)
echo "Starting server..."
exec "$@"