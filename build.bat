@echo off
REM Obtener la ruta actual
set CURRENT_DIR=%cd%

REM Ejecutar build.bat de biesVM
echo Ejecutando biesVM...
cd /d "%CURRENT_DIR%\bies\biesVM"
call build.bat

REM Ejecutar build.bat de biesC
echo Ejecutando biesC...
cd /d "%CURRENT_DIR%\bies\biesC"
call build.bat

REM Ejecutar build.bat de bies-support
echo Ejecutando bies-support...
cd /d "%CURRENT_DIR%\bies-support"
call build.bat

echo Proceso completado.
pause
