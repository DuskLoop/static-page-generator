import { getFolderPath } from './saveMarkupToFile';
import fs from 'fs';
import { IJiraIssue } from '../Common/jiraIssue';

export const saveIssueMoreInfoStaticMarkupToFile = (
  version: string,
  staticMarkup: string,
  issue: IJiraIssue,
): void => {
  const folderPath = `${getFolderPath(version)}/pages`;

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  fs.writeFile(`${folderPath}/${issue.key}.html`, staticMarkup, err => {
    if (err) {
      console.error(err);
    }
  });
};
