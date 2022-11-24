import type { Users } from '@/models/Users';
import type { IUserRepository } from '@/repositories/interfaces/IUserRepository';

import type { IUserService } from './interfaces/IUserService';

class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async newUser({
    nickName,
    birthDate,
    email,
    password,
    personLocation,
  }: Omit<Users, 'userId'>): Promise<Users> {
    const createUser = await this.userRepository.createUser({
      nickName,
      birthDate,
      email,
      password,
      personLocation,
    });

    return createUser;
  }

  async getUserById(userId: string): Promise<Users | undefined> {
    const findUserById = await this.userRepository.findUserById(userId);

    return findUserById;
  }
}
export { UserService };
