const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
console.log('appDirectory:', appDirectory);
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appIndex: resolveApp('src/index.tsx'),
  appDevOutput: resolveApp('devOutput'),
};
