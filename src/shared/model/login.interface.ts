export interface LoginResponse {
  accessToken: string;
  user: {
    id: number;
    hasAdminAccess: boolean;
    isFinishSignUp: boolean;
  };
}
