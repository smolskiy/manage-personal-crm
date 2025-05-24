import type { SalaryPayload } from '@/entities/user/model';
import { http } from '@/shared/utils';

export const updateSalaries = async (body: SalaryPayload[]): Promise<void> => {
  return http.post('/api/users/update-salaries', body);
};
