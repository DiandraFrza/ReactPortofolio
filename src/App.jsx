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
        <div className="w-screen h-screenoverflow-hidden">
          {/* Blob pertama */}
          <MorphingBlob
            className="-top-1/4 -left-1/4" // Posisi pertama (agak ke kiri atas)
            style={{
              background:
                "radial-gradient(circle, rgba(9, 57, 97, 0.4), transparent 70%)",
            }}
          />

          {/* Blob kedua */}
          <MorphingBlob
            className="-bottom-1/4 -right-1/4" // Posisi kedua (agak ke kanan bawah)
            style={{
              background:
                "radial-gradient(circle, rgba(110, 12, 102, 0.4), transparent 70%)",
            }}
          />
        </div>
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
