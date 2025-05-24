import type { FC } from 'react';
import type { SortDirection } from '@react-types/shared';
import { ArrowDownNarrowWide, ArrowDownUpIcon, ArrowDownWideNarrow } from 'lucide-react';

interface SortDescriptorProps {
  sortDirection?: SortDirection;
}
export const SortIndicator: FC<SortDescriptorProps> = ({ sortDirection }) =>
  sortDirection === 'descending' ? (
    <ArrowDownWideNarrow size={20} />
  ) : sortDirection === 'ascending' ? (
    <ArrowDownNarrowWide size={20} />
  ) : (
    <ArrowDownUpIcon size={20} />
  );
