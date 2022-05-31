enum RoleType {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface IUser {
  id?: number;
  name: string;
  email: string,
  password: string, 
  // role: string,
}