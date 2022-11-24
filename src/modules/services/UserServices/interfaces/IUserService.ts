import type { Users } from '@/models/Users';

interface IUserService {
  newUser: (data: Omit<Users, 'userId'>) => Promise<Users | undefined>;
  getUserById: (userId: string) => Promise<Users | undefined>;
}

export { IUserService };
