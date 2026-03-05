import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import InstagramGallery from "../components/InstagramGallery";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#f6efe6]">

      <Navbar />
      <Hero />
      <Services />
      <About />
      <InstagramGallery />
      <CTA />
      <Footer />

    </div>
  );
}

export default Home;