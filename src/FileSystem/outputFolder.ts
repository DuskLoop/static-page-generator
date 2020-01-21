import { isProduction, formatDateTime } from '../Common/utils';
import paths from '../../config/paths';

const getDevelopmentOutputFolderPath = () => {
  return paths.appDevOutput;
};

const getProductionOutputFolderPath = (version: string, gas: boolean) => {
  const folderName = `${gas ? 'GAS_' : ''}v${version} (${formatDateTime(
    new Date()
  )})`;

  const outputPath = paths.appProductionOutput;

  return `${outputPath}/${folderName}`;
};

let outputFolderPath = '';
export const setOutputFolderPath = (version: string, gas: boolean) => {
  outputFolderPath = isProduction()
    ? getProductionOutputFolderPath(version, gas)
    : getDevelopmentOutputFolderPath();
};

export const getOutputFolderPath = () => {
  if (!outputFolderPath) {
    throw Error('OutputFolderPath not set');
  }
  return outputFolderPath;
};
