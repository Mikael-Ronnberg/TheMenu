import "./Home.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="md:content-center items-center w-full h-screen">
        <section className="hero_image"></section>
        <section className="information_container">
          <div className="imgtext_container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda ad quam repudiandae mollitia, voluptatem, similique eos,
              ipsa architecto commodi totam nobis esse quisquam nulla vero quas
              enim perferendis laborum ducimus?
            </p>
          <div className="imgtext_container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda ad quam repudiandae mollitia, voluptatem, similique eos,
              ipsa architecto commodi totam nobis esse quisquam nulla vero quas
              enim perferendis laborum ducimus?
            </p>
          <div className="imgtext_container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda ad quam repudiandae mollitia, voluptatem, similique eos,
              ipsa architecto commodi totam nobis esse quisquam nulla vero quas
              enim perferendis laborum ducimus?
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
