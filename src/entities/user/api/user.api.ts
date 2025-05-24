import type { User, UserPayload } from '@/entities/user/model';
import { http } from '@/shared/utils';

export const fetchUsers = async ({ signal }: { signal: AbortSignal }): Promise<User[]> => {
  return http.get<User[]>('/api/users', { signal }).then((response) => response.data);
};

export const searchUsers = async ({ signal }: { signal: AbortSignal }, params: Record<string, string>): Promise<User[]> => {
  return http.get<User[]>('/api/users', { signal, params }).then((response) => response.data);
};

export const fetchUserById = async (id: number | string, signal: AbortSignal): Promise<User> => {
  return http.get<User>(`/api/users/${id}`, { signal }).then((response) => response.data);
};

export const updateUser = ({ id, payload }: { id: number; payload: UserPayload }): Promise<void> => {
  return http.patch(`/api/users/${id}`, payload);
};
