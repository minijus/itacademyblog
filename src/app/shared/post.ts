export interface Post {
  id?: string;
  authorId: string;
  categoryId: string;
  img?: string;
  fullImg?: string;
  title: string;
  lead?: string;
  content: string;
  created: number;
  tags: string[];
  views: number;
  likes: number;
}
