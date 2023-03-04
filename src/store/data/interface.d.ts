export interface UserState {
  username: string;
  role: UserRole;
  setRole: (role: UserRole) => void;
}

export enum UserRole {
  GUEST,
  USER,
  ADMIN,
}
