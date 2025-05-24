import { useNumberFormatter } from '@react-aria/i18n';

export const PercentValue = ({ value }: { value: number | bigint }) => {
  const formatter = useNumberFormatter({ style: 'percent', maximumFractionDigits: 2 });

  return <>{formatter.format(value)}</>;
};
