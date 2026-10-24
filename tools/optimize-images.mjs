#!/usr/bin/env node
// Resizes and re-encodes the anatomy images that the site serves from public/.
//
// Usage:
//   npm run optimize-images
//   node tools/optimize-images.mjs --max 900 --quality 75
//   node tools/optimize-images.mjs --src references/organs/images --out public/organs
//   node tools/optimize-images.mjs --prune        also delete files in the output folders that no source produces
//
// Every PNG or JPG becomes a WebP with the same name, scaled down so neither side exceeds --max pixels.
// Transparency is kept. SVG files are copied unchanged. Source files are never modified.
// Run it again after adding or replacing images in the source folders.

import { copyFile, mkdir, readdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const DEFAULT_JOBS = [
  { src: 'references/organs/images', out: 'public/organs' },
  { src: 'references/ailments/images', out: 'public/ailments' }
]

const RASTER = /\.(png|jpe?g)$/i
const MANAGED = /\.(png|jpe?g|webp|svg)$/i

function usage(message) {
  if (message) console.error(`${message}\n`)
  console.error('Usage: node tools/optimize-images.mjs [--max <px>] [--quality <1-100>] [--src <dir> --out <dir>] [--prune]')
  process.exit(message ? 1 : 0)
}

function parseArgs(argv) {
  const opts = { max: 1200, quality: 80, prune: false, jobs: DEFAULT_JOBS }
  let src = null
  let out = null

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    const value = () => {
      if (argv[i + 1] === undefined) usage(`${arg} needs a value`)
      return argv[++i]
    }
    if (arg === '--max') opts.max = Number(value())
    else if (arg === '--quality') opts.quality = Number(value())
    else if (arg === '--src') src = value()
    else if (arg === '--out') out = value()
    else if (arg === '--prune') opts.prune = true
    else if (arg === '--help' || arg === '-h') usage()
    else usage(`Unknown option ${arg}`)
  }

  if (src || out) {
    if (!src || !out) usage('--src and --out must be used together')
    opts.jobs = [{ src, out }]
  }
  if (!Number.isInteger(opts.max) || opts.max < 1) usage('--max must be a positive whole number')
  if (!(opts.quality >= 1 && opts.quality <= 100)) usage('--quality must be between 1 and 100')
  return opts
}

function outputName(file) {
  return RASTER.test(file) ? file.replace(RASTER, '.webp') : file
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function processJob({ src, out }, opts) {
  const srcDir = path.join(ROOT, src)
  const outDir = path.join(ROOT, out)
  await mkdir(outDir, { recursive: true })

  const files = (await readdir(srcDir)).filter((file) => MANAGED.test(file)).sort()
  const expected = new Set()
  let before = 0
  let after = 0

  console.log(`\n${src} -> ${out} (${files.length} files)`)

  for (const file of files) {
    const srcPath = path.join(srcDir, file)
    const name = outputName(file)
    const outPath = path.join(outDir, name)
    expected.add(name)
    const { size: srcSize } = await stat(srcPath)
    before += srcSize

    if (RASTER.test(file)) {
      await sharp(srcPath)
        .rotate()
        .resize({ width: opts.max, height: opts.max, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: opts.quality })
        .toFile(outPath)
    } else {
      await copyFile(srcPath, outPath)
    }

    const { size: outSize } = await stat(outPath)
    after += outSize
    console.log(`  ${name.padEnd(42)} ${formatKb(srcSize).padStart(8)} -> ${formatKb(outSize).padStart(7)}`)
  }

  if (opts.prune) {
    for (const file of (await readdir(outDir)).filter((f) => MANAGED.test(f))) {
      if (!expected.has(file)) {
        await rm(path.join(outDir, file))
        console.log(`  removed stale ${file}`)
      }
    }
  } else {
    const stale = (await readdir(outDir)).filter((f) => MANAGED.test(f) && !expected.has(f))
    if (stale.length) console.log(`  ${stale.length} file(s) in ${out} have no source (run with --prune to remove them)`)
  }

  console.log(`  total: ${formatKb(before)} -> ${formatKb(after)}`)
  return { before, after }
}

const opts = parseArgs(process.argv.slice(2))
let totals = { before: 0, after: 0 }
for (const job of opts.jobs) {
  const result = await processJob(job, opts)
  totals.before += result.before
  totals.after += result.after
}
console.log(`\nAll folders: ${formatKb(totals.before)} -> ${formatKb(totals.after)}`)
