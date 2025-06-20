// src/components/Portofolio.jsx

import { useState } from "react";
// Import komponen lain
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";
// #94a3b8, #bb9fd8
// ICON
import ProjectIcon from "../assets/img/icon/project.svg";
import SkillsIcon from "../assets/img/icon/skill-5.svg";
import CertificateIcon from "../assets/img/icon/certificate.svg";

function Portofolio() {
  const [activeTab, setActiveTab] = useState("projects");

  const getButtonClass = (tabName) => {
    return `
      p-4 rounded-full font-semibold transition-all duration-300 transform relative z-10
      ${
        activeTab === tabName
          ? "bg-[#94a3b8] text-white scale-110 shadow-lg"
          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
      }
    `;
  };

  return (
    <section id="portofolio" className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-12 flex justify-center" data-aos="zoom-out">
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
                className="w-6 h-6 md:w-10 md:h-10"
              />{" "}
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={getButtonClass("skills")}
            >
              <img
                src={SkillsIcon}
                alt="Skills Icon"
                className="w-6 h-6 md:w-10 md:h-10"
              />{" "}
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={getButtonClass("certificates")}
            >
              <img
                src={CertificateIcon}
                alt="Certificate Icon"
                className="w-6 h-6 md:w-10 md:h-10"
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

export default Portofolio;
