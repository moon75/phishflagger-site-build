Add-Type -AssemblyName System.Drawing

$sourcePath = Resolve-Path '.\src\assets\images\email-inbox-v3-balanced.png'
$outputPath = Join-Path (Split-Path $sourcePath) 'email-inbox-v3-balanced-white.png'
$bitmap = [System.Drawing.Bitmap]::FromFile($sourcePath)
$changed = 0

for ($y = 0; $y -lt $bitmap.Height; $y++) {
    for ($x = 370; $x -lt $bitmap.Width; $x++) {
        $pixel = $bitmap.GetPixel($x, $y)
        if ($pixel.A -eq 0) { continue }

        $minimum = [Math]::Min($pixel.R, [Math]::Min($pixel.G, $pixel.B))
        $maximum = [Math]::Max($pixel.R, [Math]::Max($pixel.G, $pixel.B))

        # Normalize only the pane's near-white neutral background and its
        # antialiased edge pixels. Darker separators, text, icons, and labels stay intact.
        if ($minimum -ge 240 -and ($maximum - $minimum) -le 8) {
            $bitmap.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($pixel.A, 255, 255, 255))
            $changed++
        }
    }
}

$bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
Write-Output ("Saved {0}; changed {1} pixels." -f $outputPath, $changed)
