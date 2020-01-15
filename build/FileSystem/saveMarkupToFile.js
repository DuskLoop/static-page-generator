"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveStaticMarkupToFile = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _paths = _interopRequireDefault(require("../../config/paths"));

var _utils = require("../Common/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const timeStampOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

const getDevelopmentOutputFolderPath = () => {
  return _paths.default.appDevOutput;
};

const getProductionOutputFolderPath = version => {
  const folderName = `v${version} (${(0, _utils.formatDateTime)(new Date())})`;
  const outputPath = _paths.default.appProductionOutput;
  return `${outputPath}/${folderName}`;
};

const saveStaticMarkupToFile = (version, staticMarkup) => {
  const folderPath = (0, _utils.isProduction)() ? getProductionOutputFolderPath(version) : getDevelopmentOutputFolderPath();

  if (!_fs.default.existsSync(folderPath)) {
    _fs.default.mkdirSync(folderPath, {
      recursive: true
    });
  }

  _fs.default.writeFile(`${folderPath}/index.html`, staticMarkup, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Ändringslogg sparad till ${folderPath}`);
    }
  });
};

exports.saveStaticMarkupToFile = saveStaticMarkupToFile;