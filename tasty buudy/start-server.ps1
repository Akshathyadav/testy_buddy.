# Tasty Buddy - PowerShell Server Launcher
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Tasty Buddy - Starting Local Server" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Python is installed
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✓ Python detected: $pythonVersion" -ForegroundColor Green
    Write-Host ""
    Write-Host "Starting server..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "🌐 Open your browser and go to: " -NoNewline
    Write-Host "http://localhost:8000" -ForegroundColor Green
    Write-Host ""
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
    Write-Host ""
    
    # Start the server
    python -m http.server 8000
}
catch {
    Write-Host "✗ Python is not installed or not in PATH." -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternative: Open index.html directly in your browser" -ForegroundColor Yellow
    Write-Host "Right-click on index.html and select 'Open with' your browser" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
}
