#!/bin/sh
set -e

echo "=== Starting Entrypoint Script ==="

echo "Step 1: Applying database migrations..."
if python manage.py migrate --noinput; then
    echo "SUCCESS: Migrations applied."
else
    echo "ERROR: Migrations failed."
    exit 1
fi

echo "Step 2: Collecting static files..."
if python manage.py collectstatic --noinput; then
    echo "SUCCESS: Static files collected."
else
    echo "ERROR: Collecting static files failed."
    exit 1
fi

echo "Step 3: Starting Django server..."
echo "=== Entrypoint Script Finished Successfully ==="
exec "$@"