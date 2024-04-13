export type MovieResponse = {
  id: number;
  name: string;
  poster: {
    url: string;
    previewUrl: string;
  };
  description: string;
  persons: {
    id: number;
    name: string;
    photo: string;
  }[];
  rating: {
    kp: number;
    imdb: number;
  };

  sequelsAndPrequels: {
    id: number;
    name: string;
    poster: {
      url: string;
      previewUrl: string;
    };
  }[];
  similarMovies: {
    id: number;
    name: string;
    poster: {
      url: string;
      previewUrl: string;
    };
    rating: {
      kp: number;
      imdb: number;
    };
  }[];
  total: number;
  page: number;
  pages: number;
};
