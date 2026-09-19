// Injects the server-rendered page into dist/index.html so crawlers, link
// previews and first paint get full content without waiting for JS.
import { readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const htmlPath = `${root}dist/index.html`;
const ssrEntry = pathToFileURL(`${root}dist-ssr/entry-server.js`).href;

const { render } = await import(ssrEntry);
const html = await readFile(htmlPath, 'utf8');
if (!html.includes('<!--app-->')) throw new Error('Missing <!--app--> placeholder in dist/index.html');

// Preload the headline font (latin subset) so the hero text paints in its final face.
const font = (await readdir(`${root}dist/assets`)).find((f) => /^space-grotesk-latin-wght.*\.woff2$/.test(f));
const preload = font
  ? `<link rel="preload" href="/assets/${font}" as="font" type="font/woff2" crossorigin>
  </head>`
  : '</head>';

await writeFile(htmlPath, html.replace('<!--app-->', render()).replace('</head>', preload));
await rm(`${root}dist-ssr`, { recursive: true, force: true });
console.log('✓ prerendered dist/index.html');
