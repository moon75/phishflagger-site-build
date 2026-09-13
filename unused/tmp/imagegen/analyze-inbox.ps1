Add-Type -AssemblyName System.Drawing

$imagePath = Resolve-Path '.\src\assets\images\email-inbox-v3-balanced.png'
$bitmap = [System.Drawing.Bitmap]::FromFile($imagePath)
$colors = @{}

for ($y = 0; $y -lt $bitmap.Height; $y += 2) {
    for ($x = 360; $x -lt $bitmap.Width; $x += 2) {
        $pixel = $bitmap.GetPixel($x, $y)
        if ($pixel.A -eq 0) { continue }
        $key = '{0},{1},{2},{3}' -f $pixel.A, $pixel.R, $pixel.G, $pixel.B
        if ($colors.ContainsKey($key)) {
            $colors[$key]++
        } else {
            $colors[$key] = 1
        }
    }
}

$bitmap.Dispose()
$colors.GetEnumerator() |
    Sort-Object Value -Descending |
    Select-Object -First 20 Name, Value |
    Format-Table -AutoSize
