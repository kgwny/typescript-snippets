type Post = {
  id: number;
  title: string;
  content: string;
};
  
type PostKey = keyof Post;
// type PostKey = "id" | "title" | "content"
