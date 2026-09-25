const fs = require('fs');
const path = require('path');

const file1 = path.join('project-sites/src/app/revealr/llms.txt/route.ts');
let c1 = fs.readFileSync(file1, 'utf8');
c1 = c1.replace(/\}\)\s*## Author & Related Projects([\s\S]*?);\}\s*$/, '\n## Author & Related Projects$1`;\n\n  return new NextResponse(content, {\n    status: 200,\n    headers: {\n      \'Content-Type\': \'text/plain; charset=utf-8\',\n      \'Cache-Control\': \'public, max-age=3600, s-maxage=3600\',\n    },\n  });\n}');
fs.writeFileSync(file1, c1);

const file2 = path.join('project-sites/src/app/metromind/llms.txt/route.ts');
let c2 = fs.readFileSync(file2, 'utf8');
c2 = c2.replace(/\}\)\s*## Author & Related Projects([\s\S]*?);\}\s*$/, '\n## Author & Related Projects$1`;\n\n  return new NextResponse(content, {\n    status: 200,\n    headers: {\n      \'Content-Type\': \'text/plain; charset=utf-8\',\n      \'Cache-Control\': \'public, max-age=3600, s-maxage=3600\',\n    },\n  });\n}');
fs.writeFileSync(file2, c2);

const others = ['osa', 'pipelineforge', 'sortmail', 'devcontext', 'axiom-os', 'dizzy'];
for(let o of others) {
    const p = path.join('project-sites/src/app', o, 'llms.txt/route.ts');
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/const content = #/, 'const content = `#');
    fs.writeFileSync(p, c);
}
