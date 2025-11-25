# Script para copiar imágenes a la carpeta public
# Ejecutar desde el directorio raíz del proyecto

$sourceDir = "AsesoriaPlus - Consultoría Profesional_files"
$destDir = "react\public\images"

# Crear directorio destino si no existe
if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

# Copiar archivos webp
Copy-Item "$sourceDir\about.webp" -Destination "$destDir\" -Force -ErrorAction SilentlyContinue
Copy-Item "$sourceDir\contact.webp" -Destination "$destDir\" -Force -ErrorAction SilentlyContinue

# Copiar archivos png
Copy-Item "$sourceDir\maria.png" -Destination "$destDir\" -Force -ErrorAction SilentlyContinue
Copy-Item "$sourceDir\roberto.png" -Destination "$destDir\" -Force -ErrorAction SilentlyContinue
Copy-Item "$sourceDir\laura.png" -Destination "$destDir\" -Force -ErrorAction SilentlyContinue
Copy-Item "$sourceDir\javier.png" -Destination "$destDir\" -Force -ErrorAction SilentlyContinue

Write-Host "Imágenes copiadas exitosamente a $destDir"
