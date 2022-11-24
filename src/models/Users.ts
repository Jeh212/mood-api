interface Users {
  userId: string;
  nickName: string;
  email: string;
  password: string;
  birthDate: Date;
  personLocation?: PersonLocation;
  createdAt?: Date;
  updatedAt?: Date;
}

interface PersonLocation {
  persontLocationId: string;
  userLat: string;
  userLog: string;
  userAlt: string;
  userAccurancy: string;
  userId: string;

  createdAt: Date;
  updatedAt?: Date;
}

export { PersonLocation, Users };
