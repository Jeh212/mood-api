import { UserService } from '@/modules/services/UserServices/UserService';
import { UserRepositoryMock } from '@/repositories/mock/UserRepositoryMock';

type IMakeSut = {
  sutUserService: UserService;
  userRepositoryMock?: UserRepositoryMock;
};

describe('UserService Module', () => {
  const makeSut = (): IMakeSut => {
    const userRepositoryMock = new UserRepositoryMock();
    const sutUserService = new UserService(userRepositoryMock);

    return {
      sutUserService,
    };
  };

  it('Should be able to create a user', async () => {
    const { sutUserService } = makeSut();

    const user = {
      nickName: 'batata',
      birthDate: new Date(),
      email: 'batata@gmail.com',
      password: '123456',
    };

    const createUser = await sutUserService.newUser(user);

    expect(createUser.userId).toBe(createUser?.userId);
  });

  it('Should be able to find a user By Id', async () => {
    const { sutUserService } = makeSut();

    const user = {
      nickName: 'batata',
      birthDate: new Date(),
      email: 'batata@gmail.com',
      password: '123456',
    };

    const createUser = await sutUserService.newUser(user);

    const findUserById = await sutUserService.getUserById(createUser.userId);

    expect(createUser.userId).toEqual(findUserById?.userId);
  });
});
