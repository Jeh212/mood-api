import type { Users } from '@/models/Users';

interface UpdateUserDataRepository {
  nickName: string;
  email: string;
  birthDate: Date;
}

interface IUserRepository {
  createUser: (data: Omit<Users, 'userId'>) => Promise<Users>;
  findUserById: (userId: string) => Promise<Users | undefined>;
  listAllUsers: (users: Omit<Users, 'userId'>) => Promise<Users[] | []>;
  findUserByEmail: (email: string) => Promise<Users | undefined>;
  updateUser: (data: UpdateUserDataRepository, userId: string) => Promise<void>;
  deleteUser: (userId: string) => Promise<Users | undefined>;
}
export { IUserRepository, UpdateUserDataRepository };
