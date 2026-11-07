import { execFileSync, spawnSync } from 'node:child_process'
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const output = join(root, 'dist')
const git = (args, cwd = root) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim()

for (const file of ['index.html', 'CNAME', 'cv.pdf', 'work-cv.pdf']) {
  if (!existsSync(join(output, file))) throw new Error(`Build output missing: ${file}. Run npm run build first.`)
}

const remote = git(['remote', 'get-url', 'origin'])
const revision = git(['rev-parse', '--short', 'HEAD'])
const author = git(['var', 'GIT_AUTHOR_IDENT']).match(/^(.*) <([^>]+)> /)
if (!author) throw new Error('Configure your Git author name and email before publishing.')

const checkout = mkdtempSync(join(tmpdir(), 'igholami-pages-'))
try {
  git(['init', '--quiet'], checkout)
  git(['remote', 'add', 'origin', remote], checkout)
  git(['fetch', '--quiet', '--depth=1', 'origin', 'gh-pages'], checkout)
  git(['checkout', '--quiet', '-B', 'gh-pages', 'FETCH_HEAD'], checkout)
  for (const file of readdirSync(checkout)) {
    if (file !== '.git') rmSync(join(checkout, file), { recursive: true, force: true })
  }
  cpSync(output, checkout, { recursive: true })
  writeFileSync(join(checkout, '.nojekyll'), '')
  git(['add', '--all'], checkout)
  const diff = spawnSync('git', ['diff', '--cached', '--quiet'], { cwd: checkout })
  if (diff.status === 0) {
    console.log('Published files already match the local build.')
  } else {
    if (diff.status !== 1) throw new Error('Could not compare the publication branch.')
    git(['-c', `user.name=${author[1]}`, '-c', `user.email=${author[2]}`,
      'commit', '--quiet', '-m', `Publish locally built website from ${revision}`], checkout)
    execFileSync('git', ['push', 'origin', 'HEAD:gh-pages'], { cwd: checkout, stdio: 'inherit' })
    console.log('Published build to gh-pages. GitHub Pages serves it without the custom Actions workflow.')
  }
} finally {
  rmSync(checkout, { recursive: true, force: true })
}
