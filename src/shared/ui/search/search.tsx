

import {
  SearchField as AriaSearchField,
  type SearchFieldProps as AriaSearchFieldProps,
  composeRenderProps,
} from 'react-aria-components';
import { cn } from '@/shared/utils';

export const SearchField = ({ className, ...props }: AriaSearchFieldProps) => {
  return (
    <AriaSearchField className={composeRenderProps(className, (className) => cn('group', className))} {...props} />
  );
};
