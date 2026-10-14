@echo off
echo ========================================
echo   Tasty Buddy - Starting Local Server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Starting server with Python...
    echo.
    echo Open your browser and go to: http://localhost:8000
    echo.
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else (
    echo Python is not installed or not in PATH.
    echo.
    echo Alternative: Open index.html directly in your browser
    echo Right-click on index.html and select "Open with" your browser
    echo.
    pause
)
