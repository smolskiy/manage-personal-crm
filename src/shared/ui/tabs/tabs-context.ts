

import { createContext } from 'react';
import type { Nullable } from '@/shared/model';

export const ActiveTabContext = createContext<Nullable<string>>(null);
export const SetActiveTabContext = createContext<(value: Nullable<string>) => void>(() => {});
