import type {Company, Department} from "@/shared/api/fetchUsersData.ts";
//
// export interface BaseUserInfo {
//   id: number;
//   firstName: string;
//   lastName: string;
// }
//
// export interface UserEmailInfo {
//   email: string;
// }
//
// export interface User extends BaseUserInfo, UserEmailInfo {
//   isFinishSignUp: boolean;
//   createdAt: string;
//   roles: string[];
//   jobTitle?: string;
//   department?: string;
//   salary?: number;
// }
  export interface User {
  id: string;
  name: string;
  position: string;
  departmentId: string;
  hireDate: string;
  phone: string;
  email: string;
  education: string;
  birthDate: string;
  employmentType: string;
  address: string;
  gender: string;
  isActive: boolean;
};

export type HRData = {
  users: User[];
  departments: Department[];
  companies: Company[];
};
