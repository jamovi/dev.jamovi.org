import { visit } from 'unist-util-visit';
import path from 'path';

export default function remarkImageEnhancer() {
  return function (tree, file) {
    if (!file.path) return;

    // file.path is absolute path to the markdown file
    const mdDir = path.dirname(file.path);
    const cwd = process.cwd();
    const assetsDir = path.join(cwd, 'src', 'assets');

    visit(tree, 'image', (node) => {
      // 1. Resolve @assets/ to the local path relative to the markdown file
      if (node.url && node.url.startsWith('@assets/')) {
        const filename = node.url.replace('@assets/', '');
        const absImageAssetPath = path.join(assetsDir, filename);
        let relPath = path.relative(mdDir, absImageAssetPath);
        
        // Ensure relative path starts with './' or '../' as required by Astro built-in imaging
        if (!relPath.startsWith('.')) {
          relPath = './' + relPath;
        }

        node.url = relPath;
      }

      // 2. Allow passing size and optional flags in the alt text, e.g., "Image Alt Text | 500 | no-border"
      if (node.alt && node.alt.includes('|')) {
        const parts = node.alt.split('|').map(s => s.trim());
        node.alt = parts[0]; 
        const width = parts[1];
        const flags = parts.slice(2);
        
        let styleStr = 'height: auto; ';

        if (width && !isNaN(Number(width))) {
          styleStr += `max-width: min(100%, ${width}px); `;
        }
        
        if (flags.includes('no-border')) {
          styleStr += `border: none; box-shadow: none; margin: 1.5rem 0; `;
        }
        
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.style = (node.data.hProperties.style ? node.data.hProperties.style + ' ' : '') + styleStr.trim();
      }
    });
  };
}
