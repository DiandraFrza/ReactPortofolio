import React, { useState } from "react";
// Kita butuh ikon, jadi import dari react-icons
import { FiGithub, FiExternalLink, FiPlusCircle } from "react-icons/fi";

import laundryAppImg from "../assets/project/laundryapp.png";
import portofolio3DImg from "../assets/project/3DPortofolio.png";
import aventuraArcanaImg from "../assets/project/AventuraArcana.png";
import angkringanImg from "../assets/project/landingPageAngkringan.png";
import gameJsImg from "../assets/project/lobbyGameJS.png";
import ppdbCNImg from "../assets/project/nativePPDBCN.png";
import spektrumImg from "../assets/project/wmsSpektrum.png";
import TFaceAPIImg from "../assets/img/31343C.svg";
import wmsImg from "../assets/img/31343C.svg";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  tech,
  demoUrl,
  githubUrl,
}) => {
  return (
    <div
      className="bg-slate-800/50 rounded-xl p-4 shadow-lg flex flex-col h-full"
      data-aos="fade-up"
    >
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 h-48 w-full rounded-lg object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found";
        }}
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-200">{title}</h3>
        <p className="mt-2 text-sm text-slate-300 flex-grow">{description}</p>
        <p className="mt-4 text-xs text-slate-400">
          <span className="font-semibold">Tech:</span> {tech}
        </p>
      </div>
      <div className="mt-5 flex gap-4">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:text-[16px] text-[13px] flex-1 text-center flex items-center justify-center gap-2 rounded-md bg-transparent border-2 border-[#bb9fd8] px-4 py-2 font-semibold text-[#bb9fd8] transition-all duration-300 hover:bg-[#bb9fd8] hover:text-slate-900"
        >
          <FiExternalLink />
          <span>Live Demo</span>
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:text-[16px] text-[14px] flex-1 text-center flex items-center justify-center gap-2 rounded-md bg-transparent border-2 border-slate-500 px-4 py-2 font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-500 hover:text-slate-900"
        >
          <FiGithub />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      imageUrl: spektrumImg,
      title: "Inventory SpektrumKreasiPratama",
      description: "Membantu mengembangkan fitur di Website Resmi Spektrum.",
      tech: "Boostrap, Codeigniter 4, MySQL",
      demoUrl: "#",
      githubUrl: "https://github.com/DiandraFrza/BarangKeluarMasuk-Spektrum",
    },
    {
      imageUrl: laundryAppImg,
      title: "Laundry App",
      description:
        "Aplikasi laundry berbasis web dengan 3 role (Admin, Owner, Member). Untuk membantu UMKM Laundry.",
      tech: "Laravel 11, Breeze, Tailwind, MySQL",
      demoUrl: "https://laundryfrzaa.publicvm.com/",
      githubUrl: "https://github.com/DiandraFrza/Laundryza.git",
    },
    {
      imageUrl: angkringanImg,
      title: "UMKM Angkringan",
      description:
        "Sebuah Aplikasi landing page untuk membantu penjualan UMKM Angkringan di Depok.",
      tech: "PHP Native, HTML, CSS, JS, MySQL",
      demoUrl: "https://angkringankita.vercel.app/",
      githubUrl: "https://github.com/DiandraFrza/UMKMAngkringan-Native",
    },
    {
      imageUrl: aventuraArcanaImg,
      title: "Aventura Arcana",
      description:
        "Sebuah game petualangan RPG Platformer 2D Pixel Art. Game ini masih dalam tahap pengembangan.",
      tech: "Engine Game Maker Studio 2, GML",
      demoUrl: "#",
      githubUrl: "https://github.com/DiandraFrza/AventuraArcanaV0.8",
    },
    {
      imageUrl: gameJsImg,
      title: "Fighting Game 2 Player",
      description:
        "Game fighting 2D pixel art sederhana, yang dibuat pake JavaScript OOP.",
      tech: "HTML, CSS, JavaScript, Framework KaboomJS",
      demoUrl: "#",
      githubUrl: "https://github.com/DiandraFrza/fightingJs",
    },
    {
      imageUrl: ppdbCNImg,
      title: "PPDB Citra Negara",
      description:
        "Aplikasi PPDB Citra Negara. Yang di lengkapi Multi Auth. Masih dalam tahap pengembangan.",
      tech: "Laravel 11, HTML, CSS, JavaScript, MySQL",
      demoUrl: "#",
      githubUrl: "https://github.com/DiandraFrza/PPDBCitraNegara",
    },
    {
      imageUrl: portofolio3DImg,
      title: "3D Interactive Portfolio",
      description:
        "Portofolio interaktif dalam bentuk 3D yang keren, dibangun pake Three.js.",
      tech: "Three.js, TailwindCSS",
      demoUrl: "https://firza-3dportfolio.vercel.app/",
      githubUrl: "https://github.com/DiandraFrza/3D-Interactive-Portfolio",
    },
    {
      imageUrl: TFaceAPIImg,
      title: "TensorFlow Face API",
      description:
        "Aplikasi pendeteksi wajah seperti umur, reaksi, mimik wajah. Yang menggunakan Tiny AI.",
      tech: "TensorFlow JS, API",
      demoUrl: "#",
      githubUrl: "https://github.com/DiandraFrza/TensorFlowAPI-Face",
    },
    {
      imageUrl: wmsImg,
      title: "WMS System Beta Test",
      description:
        "Warehouse Management System (WMS). Sederhana, sudah multi Auth.",
      tech: "Codeigniter 3, MySQL, Boostrap",
      demoUrl: "#",
      githubUrl: "https://github.com/DiandraFrza/WMSystem",
    },
  ];

  // State untuk mengontrol jumlah proyek yang ditampilkan
  const [visibleCount, setVisibleCount] = useState(4);

  // Fungsi untuk menambah jumlah proyek yang ditampilkan
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section id="projects" className="mt-10">
      <div className="mb-12 text-center" data-aos="zoom-in">
        <h3 className="mb-4 text-3xl sm:text-6xl font-bold text-[var(--color-lavender)] text-spotlight-effect2">
          Project Made
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, visibleCount).map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            tech={project.tech}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

      {visibleCount < projects.length && (
        <div className="mt-12 text-center">
          <button
            onClick={handleShowMore}
            className="group flex items-center justify-center gap-3 mx-auto rounded-full bg-slate-800/70 border-2 border-slate-600 px-8 py-3 font-semibold text-slate-200 transition-all duration-300 hover:border-purple-400 hover:text-white"
            data-aos="fade-up"
          >
            <FiPlusCircle className="transition-transform duration-300 group-hover:rotate-90" />
            <span>Show More</span>
          </button>
        </div>
      )}
    </section>
  );
};

function Projects() {
  return (
    <div className="Projects">
      <ProjectsSection />
    </div>
  );
}

export default Projects;
