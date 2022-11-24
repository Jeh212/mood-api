// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuid } from 'uuid';

import type { Users } from '@/models/Users';

import type {
  IUserRepository,
  UpdateUserDataRepository,
} from '../interfaces/IUserRepository';

class UserRepositoryMock implements IUserRepository {
  private readonly repository: Users[] = [];

  async createUser(data: Omit<Users, 'userId'>): Promise<Users> {
    const user = {
      userId: uuid(),
      ...data,
      createdAt: new Date(),
    };

    this.repository.push(user);

    return this.repository[0]!!;
  }

  async findUserById(userId: string): Promise<Users | undefined> {
    const user = this.repository.find(({ userId: id }) => id === userId);

    return user;
  }

  async findUserByEmail(email: string): Promise<Users | undefined> {
    const user = this.repository.find(
      ({ email: userEmail }) => userEmail === email
    );
    return user;
  }

  async listAllUsers(): Promise<Users[] | []> {
    return this.repository;
  }

  async updateUser(
    { birthDate, email, nickName }: UpdateUserDataRepository,
    userId: string
  ): Promise<void> {
    const user = this.repository.find(({ userId: id }) => id === userId)!!;

    const updatedData = {
      ...user,
      birthDate,
      email,
      nickName,
    };

    this.repository.pop();
    this.repository.push(updatedData);
  }

  async deleteUser(userId: string): Promise<Users | undefined> {
    const user = this.repository.find(({ userId: id }) => id === userId);

    if (!user) throw new Error('***Internal Error');

    const removedUser = this.repository.pop();

    return removedUser;
  }
}
export { UserRepositoryMock };
