// src/components/StatCard.jsx

import { FiArrowUpRight } from "react-icons/fi";

// Terima props 'href' yang baru
function StatCard({ icon, number, title, description, aosDelay, href }) {
  // Ganti tag 'div' paling luar jadi 'a' (anchor/link)
  // Tambahin 'href={href}' dan class 'block'
  return (
    <a
      href={href}
      className="group relative block flex-col justify-between p-6 h-full rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Bagian Atas: Ikon dan Angka */}
      <div className="flex justify-between items-start">
        <div className="p-3 bg-slate-700/50 rounded-full">{icon}</div>
        <span className="text-5xl font-bold text-slate-200">{number}</span>
      </div>

      {/* Bagian Bawah: Teks */}
      <div>
        <h3 className="text-lg font-semibold text-white mt-4">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>

      {/* Ikon panah di pojok, muncul pas hover */}
      <FiArrowUpRight
        className="absolute bottom-6 right-6 text-slate-500 group-hover:text-purple-300 transition-colors duration-300"
        size={24}
      />
    </a>
  );
}

export default StatCard;
