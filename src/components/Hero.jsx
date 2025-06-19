// src/components/Hero.jsx

import profilePicture from "../assets/me.png";

import { TypeAnimation } from "react-type-animation";
import iconSign from "../assets/img/icon/up_sign.svg";
import iconHi from "../assets/img/icon/hi.svg";

function Hero() {
  return (
    <section id="home" className="pt-10 pb-12">
      <div className="container mx-auto p-[2rem]">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* === KOLOM KIRI (Teks) === */}
          <div className="w-full lg:w-1/2 text-left lg:text-left">
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="text-purple-100 text-glow-purple">Frontend</span>
              <br className="hidden lg:block" />{" "}
              <span className="inline-block text-spotlight-effect">
                Developer
              </span>
            </h1>
            <p
              className="text-base md:text-lg font-medium text-slate-100 mb-2 "
              data-aos="fade-right"
            >
              Bikin hal kecil jadi luar biasa lewat teknologi dan ide liar.{" "}
            </p>

            {/* animasi typing */}
            <TypeAnimation
              sequence={[
                "I Build Web Interfaces.",
                1000, // Jeda 1 detik
                "Creating Seamless User Experiences.",
                1000, // Jeda 1 detik
                "Turning Ideas into Interactive Code.",
                1000, // Jeda 1 detik
              ]}
              wrapper="p"
              speed={50}
              className="text-2xl md:text-3xl font-bold text-white-100 dark:text-slate-300 mb-2 text-glow-purpled"
              style={{
                minHeight: "4em",
                display: "inline-block",
              }}
              repeat={Infinity}
            />

            {/* tomboll show skills */}
            <div className="justify-center lg:justify-start mb-6 mt-6">
              <a
                href="#"
                className="rounded-[4px] bg-[var(--color-mauve)] px-5 py-2 m-1 hover:bg-[var(--color-dark-slate)] text-glow-bdark"
                data-aos="fade-right"
              >
                React
              </a>
              <a
                href="#"
                className="rounded-[4px] bg-[var(--color-mauve)] px-5 py-2 m-1 hover:bg-[var(--color-dark-slate)] text-glow-bdark"
                data-aos="fade-right"
              >
                Laravel
              </a>
              <a
                href="#"
                className="rounded-[4px] bg-[var(--color-mauve)] px-5 py-2 m-1 hover:bg-[var(--color-dark-slate)] text-glow-bdark"
                data-aos="fade-up"
              >
                <span data-aos="fade-up">Codeigniter</span>
              </a>
            </div>

            {/* tombol action in hero */}
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              <a
                href="#projects"
                className="w-full sm:w-auto bg-[#100a3654] text-white rounded-lg px-3 py-3 text-sm font-medium transition duration-300 flex items-center justify-center gap-2 button-wipe-effect"
                data-aos="fade-up"
              >
                <span className="button-content flex items-center gap-2">
                  <span>Projects</span>
                  <img src={iconSign} alt="Download Icon" className="w-6 h-6" />
                </span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto bg-[#100a3654] text-white rounded-lg p-3 text-sm font-medium transition duration-300 flex items-center justify-center gap-2 button-wipe-effect"
                data-aos="fade-up"
              >
                <span className="button-content flex items-center gap-2">
                  <span>Message</span>
                  <img src={iconHi} alt="Project Icon" className="w-6 h-6" />
                </span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0 overflow-hidden lg:overflow-visible">
            <div className="relative w-full max-w-[280px] sm:max-w-xs">
              <div
                className="relative z-10 rounded-full p-2 bg-gradient-to-br from-slate-400 to-purple-200"
                data-aos="zoom-out"
              >
                <img
                  src={profilePicture}
                  alt="Diandra Firza"
                  className="w-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
