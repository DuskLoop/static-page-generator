export interface IRenderedFields {
  description: string;
  customfield_10035: string;
  customfield_10038: string;
}

interface IComponent {
  self: string;
  id: string;
  name: string;
}

export interface IJiraSingleSelectValue {
  value: string;
  id: string;
}

export interface IFields {
  summary: string;
  components: IComponent[];
  customfield_10034: string;
  customfield_10036: { value: string };
  customfield_10037: IJiraSingleSelectValue | null;
  customfield_10039: IJiraSingleSelectValue | null;
}

const customFieldIds = {
  showInChangeLog: '10036',
  changeLogSummary: '10034',
  changeLogDescription: '10035',
  subsystem: '10037',
  moreInfo: '10038',
  platform: '10039',
};

export const fieldIds = {
  summary: 'summary',
  description: 'description',
  components: 'components',
  showInChangeLog: `customfield_${customFieldIds.showInChangeLog}`,
  changeLogSummary: `customfield_${customFieldIds.changeLogSummary}`,
  changeLogDescription: `customfield_${customFieldIds.changeLogDescription}`,
  subsystem: `customfield_${customFieldIds.subsystem}`,
  moreInfo: `customfield_${customFieldIds.moreInfo}`,
  platform: `customfield_${customFieldIds.platform}`,
};
