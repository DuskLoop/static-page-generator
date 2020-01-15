export const isProduction = () => process.env.NODE_ENV === 'production';

const pad = (n: number) => (n < 10 ? '0' + n : n);

export const formatDateTime = (date: Date): string =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}.${pad(date.getMinutes())}.${pad(
    date.getSeconds()
  )}`;
