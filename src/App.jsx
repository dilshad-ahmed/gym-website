import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner2 from "./components/Banner2/Banner2";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Banner2 />
      <About />
      <Contact />
      <Services />
      <AppStoreBanner />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
