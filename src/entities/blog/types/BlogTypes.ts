export interface BaseBlog {
  title: string;
  image: string;
  content: string;
  body: string;
}

export interface Blog extends BaseBlog {
  id: string;
  createdAt: string;
}
