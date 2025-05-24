import { type FC, type JSX, use } from 'react';
import { Pressable } from '@react-aria/interactions';
import { CollapsibleContext, CollapsibleToggleContext } from '@/shared/ui';

type CollapsibleTriggerChildrenFunction = (expanded: boolean) => JSX.Element;

interface CollapsibleTriggerProps {
  children: JSX.Element | CollapsibleTriggerChildrenFunction;
}
export const CollapsibleTrigger: FC<CollapsibleTriggerProps> = ({ children }) => {
  const toggle = use(CollapsibleToggleContext);
  const isExpanded = use(CollapsibleContext);

  return <Pressable onPress={toggle}>{typeof children === 'function' ? children(isExpanded) : children}</Pressable>;
};
