#!/bin/bash

set -ex
git reset --hard
git clean -d -f
git pull
yarn
docker compose -f docker-compose.yml up --build --detach --force-recreate --remove-orphans
