import { isProduction, formatDateTime } from '../Common/utils';
import paths from '../../config/paths';

const getDevelopmentOutputFolderPath = () => {
  return paths.appDevOutput;
};

const getProductionOutputFolderPath = (version: string) => {
  const folderName = `v${version} (${formatDateTime(new Date())})`;

  const outputPath = paths.appProductionOutput;

  return `${outputPath}/${folderName}`;
};

let folderPath = '';
export const getFolderPath = (version?: string) => {
  if (!folderPath) {
    if (version == null) {
      throw Error('Cannot get folderpath without version');
    }
    folderPath = isProduction()
      ? getProductionOutputFolderPath(version)
      : getDevelopmentOutputFolderPath();
  }

  return folderPath;
};
