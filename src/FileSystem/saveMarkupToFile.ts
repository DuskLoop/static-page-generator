import fs from 'fs';
import paths from '../../config/paths';
import { isProduction, formatDateTime } from '../Common/utils';
import { resolve } from 'dns';

const timeStampOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const getDevelopmentOutputFolderPath = () => {
  return paths.appDevOutput;
};

const getProductionOutputFolderPath = (version: string) => {
  const folderName = `v${version} (${formatDateTime(new Date())})`;

  const outputPath = paths.appProductionOutput;

  return `${outputPath}/${folderName}`;
};

export const saveStaticMarkupToFile = (
  version: string,
  staticMarkup: string
): Promise<string> => {
  const folderPath = isProduction()
    ? getProductionOutputFolderPath(version)
    : getDevelopmentOutputFolderPath();

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
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
