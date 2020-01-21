import fs from 'fs';
import ncp from 'ncp';

import { getOutputFolderPath } from './outputFolder';
import paths from '../../config/paths';
import { isProduction } from '../Common/utils';

const copyAssets = (): Promise<void> => {
  const folderPath = `${getOutputFolderPath()}/assets`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    ncp(paths.appAssetsPath, folderPath, err => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
};

export const saveStaticMarkupToFile = async (
  staticMarkup: string
): Promise<string> => {
  const folderPath = getOutputFolderPath();

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  if (isProduction()) {
    await copyAssets();
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(`${folderPath}/index.html`, staticMarkup, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Ändringslogg sparad till ${folderPath}`);
        resolve(`${folderPath}/index.html`);
      }
    });
  });
};
