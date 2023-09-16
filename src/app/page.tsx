import "./Home.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="md:content-center items-center w-full h-screen">
        <section className="hero_image"></section>
      </main>

      <Footer />
    </>
  );
}
