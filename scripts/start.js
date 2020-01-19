const nodemon = require('nodemon');
const browserSync = require('browser-sync');
const chalk = require('chalk');
const spawn = require('child_process').spawn;

const paths = require('../config/paths');

process.env.NODE_ENV = 'development';

/**
 * Type checking
 */
spawn('node_modules\\.bin\\tsc', ['-w'], {
  stdio: 'inherit',
  shell: true,
});

/**
 * Update browser
 */
browserSync({
  server: paths.appDevOutput,
  files: paths.appDevOutput,
});

/**
 * Use nodemon to watch files, transpile with Babel
 */
nodemon({
  script: paths.appIndex,
  ext: 'ts tsx',
  exec: 'babel-node src/index.ts --extensions ".ts,.tsx"',
});

nodemon
  .on('quit', function() {
    process.exit();
  })
  .on('restart', function() {
    console.log(chalk.green('App restarted'));
  });
