

import type { FC, PropsWithChildren } from 'react';
import { useToggle } from '@/shared/hooks';
import { CollapsibleContext, CollapsibleToggleContext } from '@/shared/ui';

interface CollapsibleProps extends PropsWithChildren {
  initialValue?: boolean;
}
export const Collapse: FC<CollapsibleProps> = ({ children, initialValue = false }) => {
  const [expanded, setExpanded] = useToggle(initialValue);

  return (
    <CollapsibleToggleContext value={setExpanded}>
      <CollapsibleContext value={expanded}>{children}</CollapsibleContext>
    </CollapsibleToggleContext>
  );
};
