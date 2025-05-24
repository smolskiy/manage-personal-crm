import { type FC, type PropsWithChildren, use } from 'react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { CollapsibleContext } from '@/shared/ui';

const variants: Variants = {
  open: { height: 'auto' },
  collapsed: { height: 0 },
};

export const CollapsibleContent: FC<PropsWithChildren> = ({ children }) => {
  const expanded = use(CollapsibleContext);

  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          className='overflow-hidden will-change-[height]'
          variants={variants}
          initial='collapsed'
          animate='open'
          exit='collapsed'
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
