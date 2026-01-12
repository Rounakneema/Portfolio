const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'api', 'static');
const outputFile = path.join(__dirname, 'api', 'assets_gen.go');

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

if (!fs.existsSync(inputDir)) {
    console.error(`Error: ${inputDir} does not exist.`);
    process.exit(1);
}

const files = walkSync(inputDir);
let goContent = `package handler

var Assets = map[string][]byte{
`;

files.forEach(file => {
    // key should be relative to api/static, e.g. "blog/index.html"
    const relativePath = path.relative(inputDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file);
    // Convert buffer to byte slice syntax
    const hex = content.toString('hex');
    let byteSlice = "[]byte{";
    // Optimization: Use string literal for text? No, safer to use bytes to avoid encoding issues.
    // Hex encoded string is safer for large files in source?
    // Actually, writing \xNN is better for source size?
    // Let's use a simple comma separated list of bytes.
    // Loop content buffer
    const bytes = [];
    for (const b of content) {
        bytes.push('0x' + b.toString(16));
    }
    byteSlice += bytes.join(',') + "}";

    goContent += `\t"${relativePath}": ${byteSlice},\n`;
    console.log(`Bundled: ${relativePath} (${content.length} bytes)`);
});

goContent += `}`;

fs.writeFileSync(outputFile, goContent);
console.log(`Successfully generated ${outputFile}`);
