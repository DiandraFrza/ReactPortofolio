// src/components/Header.jsx

import { useState } from "react"; // 1. Import useState dari React

function Header() {
  // 2. Buat "saklar" (state) untuk mengontrol menu. Default-nya false (tertutup).
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. Buat fungsi untuk mengubah state saat tombol diklik
  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen); // Membalik nilai state (dari false ke true, atau sebaliknya)
  };

  return (
    <header className="fixed top-0 left-0 z-20 flex w-full items-center bg-white/30 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold text-slate-300 transition-colors duration-300 hover:text-white transition duration-100"
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
              // 4. Tambahkan event onClick dan class dinamis berdasarkan state
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
            // 5. Tampilkan/sembunyikan menu berdasarkan state 'isMenuOpen'
            className={`absolute top-full right-5 w-auto rounded-lg bg-white shadow-lg lg:static lg:block lg:w-auto lg:shadow-none lg:bg-transparent dark:lg:bg-transparent ${
              !isMenuOpen ? "hidden" : ""
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 p-4 lg:p-0">
              <li>
                <a
                  href="#home"
                  // PERBAIKAN: 'class' diubah jadi 'className' dan ditambahkan 'whitespace-nowrap'
                  className="whitespace-nowrap gap-2 text-[#100a36] font-semibold py-1 px-2 hover:gap-2 hover:rounded-md hover:bg-[#100a36] hover:py-1 hover:px-2 hover:font-semibold hover:text-white transition duration-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="whitespace-nowrap gap-2 text-[#100a36] font-semibold py-1 px-2 hover:gap-2 hover:rounded-md hover:bg-[#100a36] hover:py-1 hover:px-2 hover:font-semibold hover:text-white transition duration-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="whitespace-nowrap gap-2 text-[#100a36] font-semibold py-1 px-2 hover:gap-2 hover:rounded-md hover:bg-[#100a36] hover:py-1 hover:px-2 hover:font-semibold hover:text-white transition duration-100"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="whitespace-nowrap gap-2 text-[#100a36] font-semibold py-1 px-2 hover:gap-2 hover:rounded-md hover:bg-[#100a36] hover:py-1 hover:px-2 hover:font-semibold hover:text-white transition duration-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
