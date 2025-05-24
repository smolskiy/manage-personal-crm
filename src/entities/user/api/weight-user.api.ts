import type { WeightUser, WeightUserPayload } from '@/entities/user/model';
import { http } from '@/shared/utils';

export const fetchWeightUsers = async ({ signal }: { signal: AbortSignal }): Promise<WeightUser[]> => {
  return http.get<WeightUser[]>('/api/users/weight-info', { signal }).then((response) => response.data);
};

export const updateUserWeight = async (payload: WeightUserPayload) => {
  return http
    .patch<{ weightVote: number }>(`/api/users/${payload.id}/patch-weight-vote`, { weightVote: payload.weightVote })
    .then(() => payload);
};
