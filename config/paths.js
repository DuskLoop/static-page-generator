const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appSrc: resolveApp('src'),
  appIndex: resolveApp('src/index.tsx'),
  appDevOutput: resolveApp('devOutput'),
  appProductionOutput: 'N:/Exe/Aveny/AvenyChangelogDrafts',
  moreInfoTemplate: resolveApp('src/Render/moreInfoTemplate.html'),
};
