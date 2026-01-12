const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'api', 'static');
// Output to subpackage to avoid Vercel Function detection
const outputFile = path.join(__dirname, 'api', 'assets', 'data.go');

const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            filelist = walkSync(filepath, filelist);
        } else {
            filelist.push(filepath);
        }
    });
    return filelist;
};

console.log(`Bundling assets from ${inputDir} to ${outputFile}...`);

// Ensure output dir exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

if (!fs.existsSync(inputDir)) {
    console.error(`Error: ${inputDir} does not exist.`);
    process.exit(1);
}

const files = walkSync(inputDir);
// Use package assets
let goContent = `package assets

var Assets = map[string][]byte{
`;

files.forEach(file => {
    // key should be relative to api/static, e.g. "blog/index.html"
    const relativePath = path.relative(inputDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file);

    // Convert to byte slice literal
    const bytes = [];
    for (const b of content) {
        bytes.push('0x' + b.toString(16));
    }
    const byteSlice = "[]byte{" + bytes.join(',') + "}";

    goContent += `\t"${relativePath}": ${byteSlice},\n`;
    console.log(`Bundled: ${relativePath} (${content.length} bytes)`);
});

goContent += `}`;

fs.writeFileSync(outputFile, goContent);
console.log(`Successfully generated ${outputFile}`);
