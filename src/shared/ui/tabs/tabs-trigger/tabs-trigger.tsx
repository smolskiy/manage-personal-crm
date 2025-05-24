import { type FC, type ReactNode, useContext } from 'react';
import { ActiveTabContext, SetActiveTabContext } from '@/shared/ui/tabs/tabs-context';
import { cn } from '@/shared/utils';

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

export const TabsTrigger: FC<TabsTriggerProps> = ({ value, children }) => {
  const activeTab = useContext(ActiveTabContext);
  const setActiveTab = useContext(SetActiveTabContext);

  const handleTabClick = (): void => {
    setActiveTab(value);
  };

  return (
    <button
      onClick={handleTabClick}
      className={cn(
        'rounded-md border border-transparent px-3 py-2 font-semibold text-slate-600',
        'hover:bg-slate-100',
        activeTab === value && 'border-slate-300 font-semibold text-slate-800 hover:bg-white',
      )}
    >
      {children}
    </button>
  );
};
