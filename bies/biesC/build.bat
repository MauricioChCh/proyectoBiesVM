@echo off

echo Verifying dependencies...
npm install 


echo Running prestart...
call npm run prestart

echo Linking...
call npm run link


pause
