@echo off

echo Verifying dependencies...
npm install --no-audit --no-fund

if %ERRORLEVEL% neq 0 (
    echo Failed to install dependencies. Please check your npm configuration.
    exit /b 1
)


echo Running prestart...
call npm run prestart

echo Linking...
call npm run link

echo Generating documentation and running test ...
start npm run docs
start npm run test

pause
