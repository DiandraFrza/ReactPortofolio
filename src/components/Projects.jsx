import React from "react";

// Direkomendasikan untuk mengimpor library AOS jika kamu menggunakannya di seluruh proyek
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// React.useEffect(() => {
//   AOS.init();
// }, []);

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
    <div className="rounded-xl bg-slate-100 p-4 shadow-md" data-aos="fade-down">
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
      <p className="mt-2 text-sm text-slate-600" data-aos="flip-up">
        {description}
      </p>
      <p className="mt-2 text-xs text-slate-500" data-aos="flip-up">
        Tech: {tech}
      </p>
      <div className="mt-4 flex gap-4" data-aos="fade-down">
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
      imageUrl: "assets/img/project/laundryapp.png",
      title: "LaundryApp",
      description:
        "Aplikasi laundry berbasis web dengan 3 role (Admin, Owner, Member). Dibuat pakai Laravel 11.",
      tech: "Laravel 11, Breeze, Tailwind",
      demoUrl: "https://laundryfrzaa.publicvm.com/",
      githubUrl: "https://github.com/DiandraFrza/Laundryza.git",
    },
    {
      imageUrl: "assets/img/project/DUMMY.png",
      title: "DUMMY Project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tech: "Lorem ipsum dolor.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      imageUrl: "assets/img/project/DUMMY.png",
      title: "DUMMY Project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tech: "Lorem ipsum dolor.",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      imageUrl: "assets/img/project/DUMMY.png",
      title: "DUMMY Project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tech: "Lorem ipsum dolor.",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="mt-10">
      <div className="mb-18 text-center" data-aos="fade-down">
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
// Ini adalah satu-satunya komponen yang diekspor sebagai default.
function App() {
  return (
    <div className="App">
      <ProjectsSection />
    </div>
  );
}

export default App;
