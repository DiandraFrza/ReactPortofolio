// src/components/About.jsx

import Skills from "./Skills";
// import CV from "../assets/CV_Diandra.pdf";
import iconfile from "../assets/img/icon/file.svg";
import iconproject from "../assets/img/icon/multimodal_handeye.svg";
import Showcase from "./Showcase";

// Import komponen baru dan ikon-ikonnya
import StatCard from "./StatCard";
import { GoProjectSymlink, GoShieldCheck, GoTrophy } from "react-icons/go";

function About() {
  // Data buat kartu statistiknya, biar gampang diubah
  const statsData = [
    {
      icon: <GoProjectSymlink size={24} className="text-slate-300" />,
      number: "9",
      title: "Total Projects",
      description: "Innovative web solutions crafted",
      aosDelay: "100",
      href: "#projects",
    },
    {
      icon: <GoShieldCheck size={24} className="text-slate-300" />,
      number: "???",
      title: "Certificates",
      description: "Professional skills validated",
      aosDelay: "200",
      href: "#certificates",
    },
    {
      icon: <GoTrophy size={24} className="text-slate-300" />,
      number: "3",
      title: "Years of Experience",
      description: "Continuous learning journey",
      aosDelay: "300",
      href: "#about",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32">
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
            ketertarikan pada Front-End serta Back-End Development. Saya
            berfokus menciptakan pengalaman digital yang menarik dan selalu
            berusaha memberikan solusi terbaik di setiap proyek yang saya
            kerjakan.
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

          {/* DISINI YANG GW MAU OKE? BISA? */}
          {/* INI DIA KARTU STATISTIKNYA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-24">
            {statsData.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                title={stat.title}
                description={stat.description}
                aosDelay={stat.aosDelay}
                href={stat.href}
              />
            ))}
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
