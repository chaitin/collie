#! /bin/bash

# When your app is installed this script will be called after command 'docker compose up' done.
# Write your logic here.
echo RIVERS_TOKEN=`curl -s -k --location --request GET -H "X-Ca-Token:  {{variables.token.value}}" -H "x-rivers-user-id:1" https://veinmind.rivers.chaitin.cn/agent/install_cmd\?source_type\=1\&group_id\=0\&deploy_method\=1 | awk -F"token=|'" '{print $3}'` >> .env
