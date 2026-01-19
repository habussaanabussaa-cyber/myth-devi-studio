@echo off
echo.
echo ╔══════════════════════════════════════════════════════════╗
echo ║   🎮 MYTH DEVI STUDIO - WEBSITE LAUNCHER 🎮             ║
echo ║                                                          ║
echo ║   Professional Game Studio Website                      ║
echo ║   Dark Theme - Fully Responsive - Production Ready      ║
echo ╚══════════════════════════════════════════════════════════╝
echo.
echo.
echo 📋 AVAILABLE OPTIONS:
echo ═══════════════════════════════════════════════════════════
echo.
echo 1. 🌐 Open Website (Default Browser)
echo 2. 📖 Open Quick Start Guide
echo 3. 📚 Open Full Documentation
echo 4. ⚙️  Open Configuration Reference
echo 5. 📊 View Project Summary
echo 6. 🚀 Start Local Server (Python)
echo 7. 📁 Open Project Folder
echo 8. ❌ Exit
echo.
echo ═══════════════════════════════════════════════════════════
echo.

set /p choice="Select option (1-8): "

if "%choice%"=="1" (
    echo.
    echo 🌐 Opening website in default browser...
    echo.
    start html\index.html
    timeout /t 2
    goto menu
)

if "%choice%"=="2" (
    echo.
    echo 📖 Opening Quick Start Guide...
    echo.
    start QUICK_START.html
    timeout /t 2
    goto menu
)

if "%choice%"=="3" (
    echo.
    echo 📚 Opening Full Documentation...
    echo.
    start README.md
    timeout /t 2
    goto menu
)

if "%choice%"=="4" (
    echo.
    echo ⚙️  Opening Configuration Reference...
    echo.
    start CONFIG.md
    timeout /t 2
    goto menu
)

if "%choice%"=="5" (
    echo.
    echo 📊 Opening Project Summary...
    echo.
    start PROJECT_SUMMARY.md
    timeout /t 2
    goto menu
)

if "%choice%"=="6" (
    echo.
    echo 🚀 Starting Local Server...
    echo.
    echo Server running at: http://localhost:8000
    echo Press Ctrl+C to stop
    echo.
    timeout /t 2
    python -m http.server 8000
    goto menu
)

if "%choice%"=="7" (
    echo.
    echo 📁 Opening Project Folder...
    echo.
    explorer .
    timeout /t 2
    goto menu
)

if "%choice%"=="8" (
    echo.
    echo 👋 Thanks for using Myth Devi Studio Website!
    echo.
    exit /b 0
)

echo.
echo ❌ Invalid option. Please try again.
echo.
timeout /t 2

:menu
cls
goto :start
