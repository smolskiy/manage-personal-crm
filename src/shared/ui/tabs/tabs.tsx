import { type FC, type ReactNode, useState } from 'react';
import { ActiveTabContext, SetActiveTabContext } from '@/shared/ui/tabs/tabs-context';
import type { Nullable } from '@/shared/model';

interface TabsProps {
  defaultValue: Nullable<string>;
  children: ReactNode;
}
export const Tabs: FC<TabsProps> = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState<Nullable<string>>(defaultValue);

  return (
    <ActiveTabContext value={activeTab}>
      <SetActiveTabContext value={setActiveTab}>{children}</SetActiveTabContext>
    </ActiveTabContext>
  );
};
