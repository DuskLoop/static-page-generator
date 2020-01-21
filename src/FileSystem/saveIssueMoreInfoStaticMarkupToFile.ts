import fs from 'fs';

import { IJiraIssue } from '../Common/jiraIssue';
import { getOutputFolderPath } from './outputFolder';

export const saveIssueMoreInfoStaticMarkupToFile = (
  staticMarkup: string,
  issue: IJiraIssue
): void => {
  const folderPath = `${getOutputFolderPath()}/pages`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  fs.writeFile(`${folderPath}/${issue.key}.html`, staticMarkup, err => {
    if (err) {
      console.error(err);
    }
  });
};
