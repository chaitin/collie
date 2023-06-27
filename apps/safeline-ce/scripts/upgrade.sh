#! /bin/bash

# When your app need upgrade this script will be called after command 'docker compose up' 
# done base on the new docker-compose.yaml file.
# Write your logic here.


grep "SAFELINE_DIR" ".env" > /dev/null || echo "SAFELINE_DIR=$(pwd)" >> .env
grep "IMAGE_TAG" ".env" > /dev/null || echo "IMAGE_TAG=latest" >> .env
grep "MGT_PORT" ".env" > /dev/null || echo "MGT_PORT=9443" >> .env
grep "POSTGRES_PASSWORD" ".env" > /dev/null || echo "POSTGRES_PASSWORD=$(LC_ALL=C tr -dc A-Za-z0-9 </dev/urandom | head -c 32)" >> .env
grep "REDIS_PASSWORD" ".env" > /dev/null || echo "REDIS_PASSWORD=$(LC_ALL=C tr -dc A-Za-z0-9 </dev/urandom | head -c 32)" >> .env
grep "SUBNET_PREFIX" ".env" > /dev/null || echo "SUBNET_PREFIX=169.254.0" >> .env
