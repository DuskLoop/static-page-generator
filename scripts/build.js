const chalk = require('chalk');
const spawnSync = require('child_process').spawnSync;

process.env.NODE_ENV = 'production';

/**
 * Type checking
 */
console.log(chalk.green('Type checking...'));
const res = spawnSync('node_modules\\.bin\\tsc', ['--noEmit'], {
  stdio: 'inherit',
  shell: true,
});

if (res.status === 1) {
  console.log(chalk.red('Type errors found, exiting build'));
  process.exit();
} else {
  console.log(chalk.green('Type checking completed without any errors'));
}

spawnSync(
  'node_modules\\.bin\\babel src --out-dir build --extensions ".ts,.tsx"',
  { stdio: 'inherit', shell: true }
);
