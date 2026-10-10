import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Determine base path dynamically for GitHub Pages:
 * 1. If BASE_PATH is set (e.g. from actions/configure-pages), normalize and use it.
 * 2. If GITHUB_REPOSITORY is present (e.g. "user/chem-review" in GitHub Actions),
 *    derive the repository subdirectory (`/chem-review/`) or root (`/`) for *.github.io sites.
 * 3. Fallback to './' (relative) for local preview, test builds, or independent hosting.
 */
function getBasePath(): string {
  if (process.env.BASE_PATH) {
    const p = process.env.BASE_PATH.trim();
    if (!p || p === '/') return '/';
    return p.startsWith('/') ? (p.endsWith('/') ? p : `${p}/`) : `/${p}/`;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repo) {
      if (repo.toLowerCase().endsWith('.github.io')) {
        return '/';
      }
      return `/${repo}/`;
    }
  }
  return './';
}

/**
 * Vite plugin for GitHub Pages:
 * - Emits a .nojekyll file to prevent GitHub Pages from bypassing assets in Jekyll
 * - Creates 404.html as a copy of index.html for Single Page Application routing support
 */
function githubPagesHelper() {
  return {
    name: 'github-pages-helper',
    closeBundle() {
      try {
        const distDir = path.resolve(__dirname, 'dist');
        const indexPath = path.join(distDir, 'index.html');
        const errorPagePath = path.join(distDir, '404.html');
        const nojekyllPath = path.join(distDir, '.nojekyll');

        if (fs.existsSync(indexPath) && !fs.existsSync(errorPagePath)) {
          fs.copyFileSync(indexPath, errorPagePath);
        }
        if (!fs.existsSync(nojekyllPath)) {
          fs.writeFileSync(nojekyllPath, '');
        }
      } catch (err) {
        console.warn('Could not generate GitHub Pages helper files:', err);
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base: getBasePath(),
    plugins: [react(), tailwindcss(), githubPagesHelper()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
