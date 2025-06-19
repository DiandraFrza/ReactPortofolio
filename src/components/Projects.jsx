import React from "react";

// Direkomendasikan untuk mengimpor library AOS jika kamu menggunakannya di seluruh proyek
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// React.useEffect(() => {
//   AOS.init();
// }, []);

import laundryAppImg from "../assets/project/laundryapp.png";
import portofolio3DImg from "../assets/project/3DPortofolio.png";
import aventuraArcanaImg from "../assets/project/AventuraArcana.png";
import angkringanImg from "../assets/project/landingPageAngkringan.png";
import gameJsImg from "../assets/project/lobbyGameJS.png";
import ppdbCNImg from "../assets/project/nativePPDBCN.png";
import spektrumImg from "../assets/project/wmsSpektrum.png";
import TFaceAPIImg from "../assets/img/31343C.svg";
import wmsImg from "../assets/img/31343C.svg";
// --- Komponen Anak: ProjectCard ---
// Komponen ini tidak diekspor secara default karena digunakan secara internal oleh ProjectsSection.
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
      className="bg-slate-800/50 rounded-xl bg-slate-100 p-4 shadow-md"
      data-aos="zoom-out"
    >
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 h-48 w-full rounded-lg object-cover"
        data-aos="zoom-in"
        onError={(e) => {
          // Fallback jika gambar gagal dimuat
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found";
        }}
      />
      <h3 className="text-xl font-bold text-[#94a3b8]" data-aos="flip-up">
        {title}
      </h3>
      <p className="mt-2 text-sm text-white" data-aos="flip-up">
        {description}
      </p>
      <p className="mt-2 text-xs text-white" data-aos="flip-up">
        Tech: {tech}
      </p>
      <div className="mt-4 flex gap-4" data-aos="zoom-out">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#bb9fd8] px-4 py-2 font-semibold text-gray-800 transition hover:bg-[#c8b6db] hover:text-black"
        >
          Live Demo
        </a>
        {/*rgb(200, 183, 219) */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#bb9fd8] px-4 py-2 font-semibold text-gray-800 transition hover:bg-[#c8b6db] hover:text-black"
        >
          GitHub
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

  return (
    <section id="projects" className="mt-10">
      <div className="mb-18 text-center" data-aos="zoom-out">
        <h3
          className="mb-4 text-3xl sm:text-6xl font-bold text-[var(--color-lavender)] text-spotlight-effect2"
          data-aos="flip-down"
        >
          Project Made
        </h3>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
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
    </section>
  );
};

// --- Komponen Utama Aplikasi ---
function App() {
  return (
    <div className="App">
      <ProjectsSection />
    </div>
  );
}

export default App;
