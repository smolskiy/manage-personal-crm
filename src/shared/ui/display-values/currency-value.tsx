import { useNumberFormatter } from '@react-aria/i18n';

export const CurrencyValue = ({ value, currency }: { value: number | bigint; currency: string }) => {
  const formatter = useNumberFormatter({ style: 'currency', maximumFractionDigits: 2, currency });

  return <>{formatter.format(value)}</>;
};
