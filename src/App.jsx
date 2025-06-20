import "./App.css";

// import { useEffect, useRef } from 'react';
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import componenents
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import components blob
import MorphingBlob from "./components/MorphingBlob";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Preloader />;
  }

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //   });
  // }, []);
  return (
    <div className="relative overflow-hidden">
      {" "}
      <MorphingBlob />
      <main className="relative z-100">
        <Header />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
