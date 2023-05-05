#! /bin/bash

# When your app is installed this script will be called after command 'docker compose up' done.
# Write your logic here.

echo "POSTGRES_PASSWORD=$(LC_ALL=C tr -dc A-Za-z0-9 </dev/urandom | head -c 32)" >> .env
