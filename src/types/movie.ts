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
    filmCritics: number;
    russianFilmCritics: number;
  };
  sequelsAndPrequels: {
    id: number;
    name: string;
    poster: {
      url: string;
      previewUrl: string;
    };
  }[];
  total: number;
  page: number;
  pages: number;
};
