
$items = Get-ChildItem -Path . | Where-Object { $_.Name -notin @('node_modules', '.git', 'dist', '.astro', 'create_zip.ps1', 'zip_project.cjs') }
Compress-Archive -Path $items.FullName -DestinationPath "C:\Users\USER\Desktop\jichangsou-blog-project.zip" -Force
Copy-Item "C:\Users\USER\Desktop\jichangsou-blog-project.zip" "C:\Users\USER\.gemini\antigravity\brain\2985c8dd-2a87-410c-81d0-a2b17d092975\jichangsou-blog-project.zip" -Force
