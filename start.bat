@echo off
echo Starting SkyTrack Job Application...
start "" "http://localhost:3000/"
powershell -ExecutionPolicy Bypass -File .\serve.ps1
pause

