// src/components/Header.jsx

import { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home"); // State buat mantau section aktif

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portofolio", "contact"];
      let newActiveSection = ""; // Pake variabel sementara

      // Logika diubah: Cari section TERAKHIR yang posisinya pas
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Cek kalo bagian atas section udah ngelewatin 'garis' 100px dari atas viewport
          if (rect.top <= 100) {
            newActiveSection = `#${id}`;
            // Gak ada 'break' di sini, jadi loop jalan terus sampe akhir
          }
        }
      }

      // Fallback kalo scroll di paling atas banget
      if (window.scrollY < 200) {
        newActiveSection = "#home";
      }

      // Update state cuma kalo emang ada perubahan, biar ga re-render terus
      if (newActiveSection && newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    // Tambahin event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]); // Array kosong biar useEffect cuma jalan sekali pas komponen render

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portofolio", label: "Portofolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-20 flex w-full items-center bg-white/30 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold text-slate-300 transition-colors duration-300 hover:text-[#ede8d0]"
            data-aos="fade-right"
          >
            Diandra
            <span className="text-[#100a36]">Frzaa.</span>
          </a>

          {/* Tombol Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              id="hamburger"
              type="button"
              onClick={handleHamburgerClick}
              className={`relative z-[9999] group ${
                isMenuOpen ? "hamburger-active" : ""
              }`}
            >
              <span className="hamburger-line block w-6 h-0.5 bg-slate-800 my-1 transition duration-300"></span>
              <span className="hamburger-line block w-6 h-0.5 bg-slate-800 my-1 transition duration-300"></span>
              <span className="hamburger-line block w-6 h-0.5 bg-slate-800 my-1 transition duration-300"></span>
            </button>
          </div>

          {/* Menu Navigasi */}
          <nav
            id="nav-menu"
            className={`absolute top-full right-5 w-auto rounded-lg bg-white shadow-lg lg:static lg:block lg:w-auto lg:shadow-none lg:bg-transparent dark:lg:bg-transparent ${
              !isMenuOpen ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 p-4 lg:p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`whitespace-nowrap gap-2 text-[#100a36] font-semibold py-1 px-2 transition hover:rounded-md hover:bg-[#100a36] hover:text-white 
                    ${
                      activeSection === link.href
                        ? "lg:rounded-md lg:bg-[#100a36] lg:text-white"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
