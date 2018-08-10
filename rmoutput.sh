#!/usr/bin/env bash

git rm -r --cached output/
git rm -r --cached build/output/
git add .
git commit -m 'del output'
git push origin master