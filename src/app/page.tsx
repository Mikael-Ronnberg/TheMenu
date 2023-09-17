import "./Home.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main_container">
        <img src="./assets/pexels-adrian-kaźmierski-15563412.jpg" alt="solen" />
        <div className="hero_image"></div>

        <div className="information_container">
          <div className="imgtext_container">
            <div className="img1"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda ad quam repudiandae mollitia, voluptatem, similique eos,
              ipsa architecto commodi totam nobis esse quisquam nulla vero quas
              enim perferendis laborum ducimus?
            </p>
          </div>
          <div className="imgtext_container">
            <div className="img2"></div>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda ad quam repudiandae mollitia, voluptatem, similique eos,
              ipsa architecto commodi totam nobis esse quisquam nulla vero quas
              enim perferendis laborum ducimus?
            </p>
          </div>
          <div className="imgtext_container">
            <div className="img3"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda ad quam repudiandae mollitia, voluptatem, similique eos,
              ipsa architecto commodi totam nobis esse quisquam nulla vero quas
              enim perferendis laborum ducimus?
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}
