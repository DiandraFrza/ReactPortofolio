// src/components/Footer.jsx

import githubIcon from "../assets/img/icon/github.svg";
import linkedinIcon from "../assets/img/icon/in.svg";
import instagramIcon from "../assets/img/icon/instagram.svg";

function Footer() {
  return (
    <footer className="w-full p-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 sm:mb-0">
            © 2025 Diandra Firza. Made with Vue and React.
          </p>

          <div className="flex space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/DiandraFrza"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-6 h-6 hover:scale-110 transition dark:invert"
              />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/diandra-firza-nasywan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition dark:invert"
              />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com/xiiivpiexzo.f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-6 h-6 hover:scale-110 transition dark:invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
