export type ActorsResponse = {
  docs: {
    id: number;
    name: string;
    photo: string;
  }[];
  total: number;
  page: number;
  pages: number;
};
