import "./App.css";

// import { useEffect, useRef } from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import componenents
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import components blob
import MorphingBlob from "./components/MorphingBlob";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya terjadi sekali
    });
  }, []); //
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
        {/* <Portfolio /> */}
      </main>
    </div>
  );
}

export default App;
