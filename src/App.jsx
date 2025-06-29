import "./App.css";
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

  // useEffect Hook #2: Buat Anti-Copas
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && ["c", "u", "s"].includes(e.key.toLowerCase())) {
        e.preventDefault();
        alert("EHEM");
      }
      if (e.key === "F12") {
        e.preventDefault();
        alert("YAH... NGEBUG");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
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

  return (
    <div className="relative overflow-hidden">
      <MorphingBlob />
      <main className="relative z-10">
        {" "}
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
