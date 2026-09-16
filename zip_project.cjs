const { execSync } = require('child_process');
const fs = require('fs');

const targetZipPath = 'C:\\Users\\USER\\Desktop\\jichangsou-blog-project.zip';
const artifactZipPath = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\5c32d041-bee7-44aa-ab07-cea26ab81072\\jichangsou-blog-project.zip';

const psScript = `
$items = Get-ChildItem -Path . | Where-Object { $_.Name -notin @('node_modules', '.git', 'dist', '.next', '.astro', 'create_zip.ps1', 'zip_project.cjs') }
Compress-Archive -Path $items.FullName -DestinationPath "${targetZipPath}" -Force
Copy-Item "${targetZipPath}" "${artifactZipPath}" -Force
`;

fs.writeFileSync('create_zip.ps1', psScript, 'utf8');

try {
  execSync('powershell -ExecutionPolicy Bypass -File create_zip.ps1', { stdio: 'inherit' });
  console.log('ZIP successfully created at Desktop and Artifacts directory!');
} catch (e) {
  console.error(e);
}

