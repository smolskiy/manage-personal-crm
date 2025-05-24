import { BaseUserInfo } from '@/entities/user/model';

export interface WeightUser extends BaseUserInfo {
  weightVote: number;
}

export interface WeightUserPayload {
  id: number;
  weightVote: number;
}
