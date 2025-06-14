// src/components/SkillBadge.jsx

function SkillBadge({ icon, name }) {
  return (
    <div
      className="flex items-center gap-2 rounded-xl bg-gradient-to-bl from-slate-400 to-purple-200 px-4 py-2 text-black font-semibold transition-transform duration-300 hover:scale-110 glow-blue-badge"
      data-aos="fade-up" // Atribut AOS bisa tetap di sini
    >
      <img src={icon} alt={`${name} Icon`} className="w-5 h-5" />
      {name}
    </div>
  );
}

export default SkillBadge;
