const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appIndex: resolveApp('src/index.tsx'),
  appDevOutput: resolveApp('devOutput'),
  appAssetsPath: path.join(__dirname, '../devOutput/assets'),
  appTemplates: path.join(__dirname, '../src/Templates'),
  appProductionOutput: 'N:/Exe/Aveny/AvenyChangelogDrafts',
};
