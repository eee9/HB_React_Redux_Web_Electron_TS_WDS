#/usr/bash

echo "Cleaning the project of some files and folders..."

rm -f -r node_modules

rm -f .gitattributes
rm -f .gitignore
rm -f -r .github

rm -f yarn-error.log

rm -f app/app.js
rm -f app/app.js.map
rm -f app/yarn.lock
rm -f app/*.png
rm -f -r ./app/node_modules
rm -f -r ./_builds

rm -f yarn.lock
rm -f package-lock.json
