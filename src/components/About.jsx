// src/components/About.jsx

import Skills from "./Skills";
// import CV from "../assets/CV_Diandra.pdf";
import iconfile from "../assets/img/icon/file.svg";
import iconproject from "../assets/img/icon/multimodal_handeye.svg";
import Showcase from "./Showcase";

function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="w-full text-left">
          <div className="flex items-center gap-4 mb-4">
            <h2
              className="text-3xl font-bold text-[var(--action-primary)] sm:text-4xl"
              data-aos="fade-up"
            >
              About Me
            </h2>
            <div
              className="w-20 h-1 rounded-[4px] bg-gray-300 dark:bg-gray-700"
              data-aos="fade-left"
              data-aos-delay="200"
            ></div>
          </div>

          <p
            className="font-medium text-lg text-white-700 dark:text-slate-300 mb-6"
            data-aos="fade-right"
          >
            Hello! I'm{" "}
            <span className="py-1 px-2 rounded-md bg-slate-800 dark:bg-[#E1C78F] text-white dark:text-black font-semibold">
              Diandra Firza Nasywan
            </span>
            , seorang lulusan Pengembangan Perangkat Lunak dan Gim dengan
            ketertarikan mendalam pada Front-End Development. Saya berfokus
            menciptakan pengalaman digital yang menarik dan selalu berusaha
            memberikan solusi terbaik di setiap proyek yang saya kerjakan.
          </p>
          <p
            className="text-sm italic text-white-500 dark:text-[#ffff] mb-8 text-glow-dark"
            data-aos="fade-left"
          >
            "Code is how I express ideas. Tech is how I shape them."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#"
              className="w-full sm:w-auto bg-purple-300 text-black rounded-lg hover:bg-purple-200 px-6 py-3 text-sm font-medium dark:text-white transition duration-300 dark:hover:bg-slate-600 flex items-center justify-center gap-2 animate-attention"
              data-aos="fade-up"
            >
              <img src={iconfile} alt="Download Icon" className="w-6 h-6" />
              <span>Download CV</span>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto hover:bg-slate-300 hover:text-black rounded-lg bg-slate-200 dark:bg-slate-700 px-6 py-3 text-sm font-medium text-slate-800 dark:text-white transition duration-300 hover:bg-gray-300 dark:hover:bg-slate-600 flex items-center justify-center gap-2 animate-attention"
              data-aos="fade-up"
            >
              <img src={iconproject} alt="Project Icon" className="w-6 h-6" />
              Lihat Proyek
            </a>
          </div>
        </div>

        <div className="w-full px-4">
          <Showcase />
        </div>
      </div>
    </section>
  );
}

export default About;
