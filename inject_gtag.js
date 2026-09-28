const fs = require('fs');
const path = require('path');

const layouts = [
  'D:/Protfolio/web/src/app/layout.tsx',
  'D:/Protfolio/portfolio/src/app/layout.tsx',
  'D:/Protfolio/blog/src/app/layout.tsx',
  'D:/Protfolio/project-sites/src/app/layout.tsx'
];

const gtagSnippet = `
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9VE98GTMDY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {\`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9VE98GTMDY');
          \`}
        </Script>
`;

layouts.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Add import if not exists
    if (!content.includes("import Script from 'next/script'")) {
      content = content.replace(/(import .*?;?\n)/, "$1import Script from 'next/script';\n");
    }
    
    // Inject before closing </body> or </html> if not already injected
    if (!content.includes('G-9VE98GTMDY')) {
      if (content.includes('</body>')) {
        content = content.replace('</body>', `${gtagSnippet}      </body>`);
      } else if (content.includes('</html>')) {
        content = content.replace('</html>', `${gtagSnippet}    </html>`);
      }
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Already injected in ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
