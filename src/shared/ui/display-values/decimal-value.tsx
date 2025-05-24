import { useNumberFormatter } from '@react-aria/i18n';

export const DecimalValue = ({ value }: { value: number | bigint }) => {
  const formatter = useNumberFormatter({
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

  return <>{formatter.format(value)}</>;
};
