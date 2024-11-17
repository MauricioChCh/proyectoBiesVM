@echo off

echo Running prestart...
call npm run prestart

echo Linking...
call npm run link

echo Generating documentation...
call npm run docs

echo Running tests...
call npm run test

pause
