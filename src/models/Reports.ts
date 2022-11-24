interface Reports {
  reportId?: string;
  reportAbout: string;
  reportDescription: string;
  reportCategories: string[];
  othersReactionAbout?: OthersReactions;
  shortVideos?: ShortVideosURL;
  photos?: {
    firstImage: string;
    secondImage: string;
    thirdImage: string;
  };
  reportMood: {
    itSucks?: boolean;
    first?: boolean;
    second?: boolean;
    third?: boolean;
    forth?: boolean;
    fifth?: boolean;
  };

  reportLocation: ReportLocation;
  createdAt: Date;
  updatedAt?: Date;
}

interface OthersReactions {
  otherReactionsId?: string;
  awesome?: string;
  happy?: string;
  sad?: string;
  scared?: string;
  goodVibe?: string;

  createdAt: Date;
  updatedAt?: Date;
}

interface ShortVideosURL {
  shortVideoUrlId?: string;
  firstShortUrl: string;
  secondShortUrl: string;
  thirdShortUrl: string;
  userId: string;

  createdAt: Date;
  updatedAt?: Date;
}

interface ReportLocation {
  reportLocationId?: string;
  reportLat: string;
  reportLog: string;
  reportAccuracy: string;
  userId: string;

  createdAt: Date;
  updatedAt?: Date;
}

export { OthersReactions, ReportLocation, Reports, ShortVideosURL };
