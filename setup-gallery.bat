@echo off
echo Setting up IEEE Gallery...

echo Creating directory structure...
mkdir public\images\ieee 2>nul

echo Copying images from Downloads folder...
xcopy /Y "C:\Users\COMPUMARTS\Downloads\pic\*.*" "public\images\ieee\" 

echo Running setup script...
node scripts/setup-ieee-gallery.js

echo Done! The gallery should now be set up with your images.
echo Restart the development server if it's already running.
pause
