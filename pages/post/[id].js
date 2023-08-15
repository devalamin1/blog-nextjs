import Link from "next/link";
import { useRouter } from "next/router";
import blogData from "../../data/blogData.json";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <Link href="/blog">Back To Blog</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
};

export default Post;
