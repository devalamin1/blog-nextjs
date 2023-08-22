import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      
      <section>
        <div className="container">
          <div className="d-flex">
            <h1>Welcome to My Next.js Blog!</h1>
            <Link href="/blog">Go to Blog</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
