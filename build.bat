@echo off
:: build.bat

:: Colors for output
set GREEN=[32m
set RED=[31m
set NC=[0m

:: Get the absolute path of the script's directory
set ROOT_DIR=%~dp0

:: Function to build a specific component
:build_component
    set component=%~1
    set full_path=%ROOT_DIR%%component%

    echo %GREEN%Building %component%...%NC%
    
    if not exist "%full_path%" (
        echo %RED%Directory not found: %full_path%%NC%
        exit /b 1
    )
    
    :: Save current directory and change to component directory
    pushd "%full_path%"
    
    :: Run the component's build script
    if exist build.bat (
        call build.bat
        if errorlevel 1 (
            echo %RED%✗ %component% build failed%NC%
            popd
            exit /b 1
        ) else (
            echo %GREEN%✓ %component% built successfully%NC%
        )
    ) else (
        echo %RED%No build script found for %component%%NC%
        popd
        exit /b 1
    )
    
    :: Restore previous directory
    popd
    exit /b 0

:: Function to display usage
:usage
    echo Usage: %0 [options]
    echo Options:
    echo   --all         Build all components
    echo   --compiler    Build only the compiler
    echo   --vm          Build only the VM
    echo   --support     Build only the VS Code extension
    echo   --help        Display this help message
    exit /b 0

:: No arguments provided
if "%~1"=="" (
    call :usage
    exit /b 1
)

:: Parse arguments
:parse_args
if "%~1"=="" goto :eof

if "%~1"=="--all" (
    call :build_component "bies\biesVM"
    call :build_component "bies\biesC"
    call :build_component "bies-support"
) else if "%~1"=="--compiler" (
    call :build_component "bies\biesC"
) else if "%~1"=="--vm" (
    call :build_component "bies\biesVM"
) else if "%~1"=="--support" (
    call :build_component "bies-support"
) else if "%~1"=="--help" (
    call :usage
) else (
    echo %RED%Unknown option: %~1%NC%
    call :usage
    exit /b 1
)

shift
goto parse_args