# PowerShell script to copy IEEE images
# Run this script from the root of your project

# Create the destination directory if it doesn't exist
$destinationDir = "public\images\ieee"
if (-not (Test-Path $destinationDir)) {
    New-Item -ItemType Directory -Path $destinationDir -Force
}

# Source directory with your IEEE images
$sourceDir = "C:\Users\COMPUMARTS\Downloads\pic"

# Copy all images from source to destination
Copy-Item -Path "$sourceDir\*" -Destination $destinationDir -Recurse -Force

Write-Host "Images copied successfully to $destinationDir"
