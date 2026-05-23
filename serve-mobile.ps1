$ErrorActionPreference = "Stop"

$port = if ($args.Count -gt 0) { [int]$args[0] } else { 4173 }
$ips = [System.Net.Dns]::GetHostAddresses([System.Net.Dns]::GetHostName()) |
  Where-Object {
    $_.AddressFamily -eq [System.Net.Sockets.AddressFamily]::InterNetwork -and
    $_.IPAddressToString -notlike "127.*" -and
    $_.IPAddressToString -notlike "169.254.*"
  } |
  ForEach-Object { $_.IPAddressToString } |
  Select-Object -Unique

Write-Host ""
Write-Host "Serving Magic_Tarrow for phone testing..."
Write-Host "Keep this window open, connect your phone to the same Wi-Fi, then open:"
if ($ips.Count -gt 0) {
  foreach ($ip in $ips) {
    Write-Host "  http://$ip`:$port/index.html"
  }
} else {
  Write-Host "  Could not detect a LAN IP automatically. Run ipconfig and use your IPv4 address:"
  Write-Host "  http://<your-ipv4-address>:$port/index.html"
}
Write-Host ""
Write-Host "Local desktop URL:"
Write-Host "  http://localhost:$port/index.html"
Write-Host ""

python -m http.server $port --bind 0.0.0.0
