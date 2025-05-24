import { type FC, type ReactNode, useContext } from 'react';
import { ActiveTabContext } from '@/shared/ui/tabs/tabs-context';

interface TabsContentProps {
  value: string;
  children: ReactNode;
}
export const TabsContent: FC<TabsContentProps> = ({ value, children }) => {
  const activeTab = useContext(ActiveTabContext);

  return activeTab === value ? <div>{children}</div> : null;
};
