import fs from 'fs';

import { IJiraIssue } from '../Common/jiraIssue';
import { getFolderPath } from './outputFolder';

export const saveIssueMoreInfoStaticMarkupToFile = (
  staticMarkup: string,
  issue: IJiraIssue
): void => {
  const folderPath = `${getFolderPath()}/pages`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  fs.writeFile(`${folderPath}/${issue.key}.html`, staticMarkup, err => {
    if (err) {
      console.error(err);
    }
  });
};
