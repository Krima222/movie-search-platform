export type MoviesResponse = {
  docs: {
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
    }[];
    rating: {
      kp: number;
      imdb: number;
      filmCritics: number;
      russianFilmCritics: number;
    };
  }[];
  total: number;
  page: number;
  pages: number;
};
