import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";
import blogData from "../data/blogData.json";

const Blog = () => {
  return (
    <>
      <Header />
      <div>
        <nav aria-label="breadcrumb">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ul>
        </nav>

        <h1>Blog Posts</h1>
        <ul>
          {blogData.map((post) => (
            <li key={post.id}>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
