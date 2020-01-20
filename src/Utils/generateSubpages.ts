import { IJiraIssue } from '../Common/jiraIssue';
import { renderIssueMoreInfoToStaticMarkup } from '../Render/renderIssueMoreInfoToStaticMarkup';
import { saveIssueMoreInfoStaticMarkupToFile } from '../FileSystem/saveIssueMoreInfoStaticMarkupToFile';

const generateSubpage = (issue: IJiraIssue) => {
  const staticMarkup = renderIssueMoreInfoToStaticMarkup(issue);

  return saveIssueMoreInfoStaticMarkupToFile(staticMarkup, issue);
};

export const generateSubpages = (issues: IJiraIssue[]) => {
  issues.forEach((issue: IJiraIssue) => {
    if (issue.renderedFields.customfield_10038) {
      generateSubpage(issue);
    }
  });
};
