#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateDir = path.resolve(__dirname, '../template');
const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const VERSION = pkg.version;

const useColor = Boolean(process.stdout.isTTY && !process.env.NO_COLOR);
const color = {
  bold: (t) => (useColor ? `\x1b[1m${t}\x1b[0m` : t),
  green: (t) => (useColor ? `\x1b[32m${t}\x1b[0m` : t),
  yellow: (t) => (useColor ? `\x1b[33m${t}\x1b[0m` : t),
  cyan: (t) => (useColor ? `\x1b[36m${t}\x1b[0m` : t),
  red: (t) => (useColor ? `\x1b[31m${t}\x1b[0m` : t),
  dim: (t) => (useColor ? `\x1b[2m${t}\x1b[0m` : t)
};

function printHelp() {
  console.log(`
${color.bold('corespec')} v${VERSION}
Minimalist, tech-agnostic SDD framework and Fast-Track workflows for AI-assisted engineering.

${color.bold('USAGE:')}
  npx corespec <command> [options]

${color.bold('COMMANDS:')}
  init     Initialize corespec template in the current project
  update   Update framework-managed workflows, skills, and templates

${color.bold('OPTIONS:')}
  -f, --force    Overwrite existing files during init
  -v, --version  Show version number
  -h, --help     Show this help message

${color.bold('EXAMPLES:')}
  npx corespec init
  npx corespec init --force
  npx corespec update
`);
}

function getFilesRecursively(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getFilesRecursively(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function writeMeta(targetDir) {
  const metaDir = path.join(targetDir, '.ai');
  const metaPath = path.join(metaDir, '.corespec.json');
  fs.mkdirSync(metaDir, { recursive: true });
  const meta = {
    version: VERSION,
    updatedAt: new Date().toISOString()
  };
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n', 'utf8');
}

function handleInit(targetDir, force) {
  console.log(`\n${color.bold('Initializing corespec')} ${color.dim(`(v${VERSION})`)} in ${color.cyan(targetDir)}...\n`);

  if (!fs.existsSync(templateDir)) {
    console.error(`${color.red('Error:')} Template directory not found at ${templateDir}`);
    process.exit(1);
  }

  const files = getFilesRecursively(templateDir);
  let created = 0;
  let skipped = 0;
  let overwritten = 0;

  for (const srcFile of files) {
    const relPath = path.relative(templateDir, srcFile);
    const destFile = path.join(targetDir, relPath);
    const exists = fs.existsSync(destFile);

    if (exists && !force) {
      console.log(`  ${color.yellow('[skip]')}      ${relPath} ${color.dim('(already exists)')}`);
      skipped++;
      continue;
    }

    fs.mkdirSync(path.dirname(destFile), { recursive: true });
    fs.copyFileSync(srcFile, destFile);

    if (exists && force) {
      console.log(`  ${color.yellow('[overwrite]')} ${relPath}`);
      overwritten++;
    } else {
      console.log(`  ${color.green('[create]')}    ${relPath}`);
      created++;
    }
  }

  writeMeta(targetDir);

  console.log(`\n${color.green('✔')} ${color.bold('Initialization complete!')}`);
  console.log(`  Files created:     ${created}`);
  if (overwritten > 0) console.log(`  Files overwritten: ${overwritten}`);
  if (skipped > 0) console.log(`  Files skipped:     ${skipped} ${color.dim('(use --force to overwrite)')}`);

  console.log(`\n${color.bold('Next steps:')}`);
  console.log(`  1. In your AI chat / IDE, run: ${color.cyan('/corespec.init-context')}`);
  console.log(`  2. Review and configure ${color.cyan('.ai/context/constitution.md')}`);
  console.log(`  3. Start developing with ${color.cyan('/corespec.specify')} or ${color.cyan('/corespec.feature')}\n`);
}

function handleUpdate(targetDir) {
  console.log(`\n${color.bold('Updating corespec')} ${color.dim(`to v${VERSION}`)} in ${color.cyan(targetDir)}...\n`);

  const metaPath = path.join(targetDir, '.ai/.corespec.json');
  const aiDir = path.join(targetDir, '.ai');

  if (!fs.existsSync(metaPath) && !fs.existsSync(aiDir)) {
    console.error(`${color.red('Error:')} No corespec installation found in this directory.`);
    console.error(`Run ${color.cyan('npx corespec init')} first to initialize the project.\n`);
    process.exit(1);
  }

  const managedDirs = [
    '.ai/workflows',
    '.ai/skills',
    '.ai/templates',
    '.agent/workflows'
  ];

  let updatedCount = 0;

  for (const managedRel of managedDirs) {
    const srcSubDir = path.join(templateDir, managedRel);
    if (!fs.existsSync(srcSubDir)) continue;

    const files = getFilesRecursively(srcSubDir);
    for (const srcFile of files) {
      const relPath = path.relative(templateDir, srcFile);
      const destFile = path.join(targetDir, relPath);

      fs.mkdirSync(path.dirname(destFile), { recursive: true });
      fs.copyFileSync(srcFile, destFile);
      console.log(`  ${color.green('[update]')} ${relPath}`);
      updatedCount++;
    }
  }

  writeMeta(targetDir);

  console.log(`\n${color.green('✔')} ${color.bold(`corespec successfully updated to v${VERSION}!`)}`);
  console.log(`  Managed files updated: ${updatedCount}`);

  console.log(`\n${color.bold('Framework-managed areas updated:')}`);
  managedDirs.forEach((d) => console.log(`  - ${color.cyan(d + '/')}`));

  console.log(`\n${color.bold('Preserved user files (untouched):')}`);
  console.log(`  - ${color.green('AGENTS.md')}`);
  console.log(`  - ${color.green('.ai/context/')}`);
  console.log(`  - ${color.green('.ai/instructions/')}`);
  console.log(`  - ${color.green('specs/')}`);

  console.log(`\n${color.yellow('Notice:')} Your ${color.bold('AGENTS.md')} and ${color.bold('.ai/context/')} were preserved intact.`);
  console.log(`Review release notes or corespec documentation if new skills or workflows require manual registration in AGENTS.md.\n`);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('-h') || args.includes('--help') || args.includes('help')) {
    printHelp();
    process.exit(0);
  }

  if (args.includes('-v') || args.includes('--version') || args.includes('version')) {
    console.log(`v${VERSION}`);
    process.exit(0);
  }

  const command = args[0];
  const force = args.includes('--force') || args.includes('-f');
  const targetDir = process.cwd();

  switch (command) {
    case 'init':
      handleInit(targetDir, force);
      break;
    case 'update':
      handleUpdate(targetDir);
      break;
    default:
      console.error(`${color.red('Error:')} Unknown command "${command}"\n`);
      printHelp();
      process.exit(1);
  }
}

main();
