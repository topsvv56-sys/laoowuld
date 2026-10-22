@echo off
title Lao World Careers Portal
echo ===================================================
echo   Lao World Public Company - Careers Portal
echo   Developer: Mr. Hannalong Savayvanh
echo ===================================================
echo Starting development server...
cd /d "%~dp0lw-app"
timeout /t 2 /nobreak >nul
start "" "http://localhost:3000"
npm run dev
pause
