export interface Post{
  id: number;
  title: string;
  content: string;
  author :string;
  createdDate: Date;
  modifiedDate: Date;
  imageUrl: string;
  category: string;
}
