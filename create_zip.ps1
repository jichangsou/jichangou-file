
$items = Get-ChildItem -Path . | Where-Object { $_.Name -notin @('node_modules', '.git', 'dist', '.next', '.astro', 'create_zip.ps1', 'zip_project.cjs') }
Compress-Archive -Path $items.FullName -DestinationPath "C:\Users\USER\Desktop\jichangsou-blog-project.zip" -Force
Copy-Item "C:\Users\USER\Desktop\jichangsou-blog-project.zip" "C:\Users\USER\.gemini\antigravity\brain\5c32d041-bee7-44aa-ab07-cea26ab81072\jichangsou-blog-project.zip" -Force
