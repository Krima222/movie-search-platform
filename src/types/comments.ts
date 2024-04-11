export type CommentsResponse = {
  docs: {
    id: number;
    author: string;
    review: string;
  }[];
  page: number;
  pages: number;
};
