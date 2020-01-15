export interface IRenderedFields {
  description: string;
  customfield_10035: string;
}

interface IComponent {
  self: string;
  id: string;
  name: string;
}

export interface IFields {
  summary: string;
  components: IComponent[];
  customfield_10034: string;
  customfield_10036: { value: string };
}

const customFieldIds = {
  showInChangeLog: '10036',
  changeLogSummary: '10034',
  changeLogDescription: '10035',
};

export const fieldIds = {
  summary: 'summary',
  description: 'description',
  components: 'components',
  showInChangeLog: `customfield_${customFieldIds.showInChangeLog}`,
  changeLogSummary: `customfield_${customFieldIds.changeLogSummary}`,
  changeLogDescription: `customfield_${customFieldIds.changeLogDescription}`,
};
