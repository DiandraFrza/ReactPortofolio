// src/components/Showcase.jsx

import { useState } from "react";
// Import komponen lain
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
// #94a3b8, #bb9fd8
// ICON
import ProjectIcon from "../assets/img/icon/project.svg";
import SkillsIcon from "../assets/img/icon/skills.svg";
import CertificateIcon from "../assets/img/icon/certificate.svg";

function Showcase() {
  const [activeTab, setActiveTab] = useState("projects");

  const getButtonClass = (tabName) => {
    // Tambahkan 'relative' dan 'z-10' agar tombol berada di atas garis
    return `
      p-5 rounded-full font-semibold transition-all duration-300 transform relative z-10
      ${
        activeTab === tabName
          ? "bg-[#94a3b8] text-white scale-110 shadow-lg"
          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
      }
    `;
  };

  return (
    <section id="showcase" className="py-16">
      <div className="container mx-auto px-4">
        {/* Wrapper untuk tombol dan garis penghubung */}
        <div
          className="relative mb-12 flex justify-center"
          data-aos="fade-down"
        >
          <div className="relative w-full max-w-md flex justify-between items-center">
            {/* Garis Penghubung (di belakang tombol) */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 transform -translate-y-1/2"></div>

            {/* Tombol Ikon */}
            <button
              onClick={() => setActiveTab("projects")}
              className={getButtonClass("projects")}
            >
              <img
                src={ProjectIcon}
                alt="Project Icon"
                className="w-7 h-7 md:w-10 md:h-10"
              />{" "}
              {/* Sesuaikan ukuran ikon */}
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={getButtonClass("skills")}
            >
              <img
                src={SkillsIcon}
                alt="Skills Icon"
                className="w-7 h-7 md:w-10 md:h-10"
              />{" "}
              {/* Sesuaikan ukuran ikon */}
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={getButtonClass("certificates")}
            >
              <img
                src={CertificateIcon}
                alt="Certificate Icon"
                className="w-7 h-7 md:w-10 md:h-10" /* Sesuaikan ukuran ikon */
              />
            </button>
          </div>
        </div>

        <div className="mt-10">
          {activeTab === "projects" && <Projects />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "certificates" && <Certificates />}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
