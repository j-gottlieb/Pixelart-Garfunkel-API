#!/bin/bash

API="http://localhost:4741"
URL_PATH="/artworks"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "artwork": {
      "name": "'"${NAME}"'",
      "canvas": "'"${CANVAS}"'",
      "colors": "'"${COLORS}"'"
    }
  }'

echo
