@echo off
set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%PATH%"
cd /d "%~dp0"

echo ==========================================================
echo  Pushing to https://github.com/hauwarhyusuf/DSFP-6.0.git
echo ==========================================================
echo.
git push -u origin main

echo.
pause
