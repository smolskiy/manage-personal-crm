import colors from 'tailwindcss/colors';

const chartColors: Record<string, string>[] = [
  colors.teal,
  colors.cyan,
  colors.sky,
  colors.blue,
  colors.indigo,
  colors.violet,
];

export const getChartColorByIndex = (index: number, shade = '500'): string => {
  const chartColor: Record<string, string> = chartColors[index] ?? chartColors.at(-1);
  return chartColor[shade];
};
