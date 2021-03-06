#!/bin/sh
eb list
read -r -p 'Which environment: ' env
npm run build; 
git add .
git add -u
read -r -p 'Commit message: ' desc  # prompt user for commit message
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
git commit -m "$desc"
git push origin $branch
eb deploy $env
