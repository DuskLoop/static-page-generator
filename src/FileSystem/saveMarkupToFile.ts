import fs from 'fs';

import { getFolderPath } from './outputFolder';

export const saveStaticMarkupToFile = (
  staticMarkup: string
): Promise<string> => {
  const folderPath = getFolderPath();

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
