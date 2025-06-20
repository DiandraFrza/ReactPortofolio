import React from "react";
import SkillBadge from "./SkillBadge";

function SkillCategoryCard({ title, skills, isFeatured }) {
  const cardClasses = `
    bg-slate-800/50 border border-slate-700 rounded-2xl p-6 h-full
    ${isFeatured ? "animate-pulse-border" : ""}
  `;

  return (
    <div className={cardClasses} data-aos="fade-up">
      <h4 className="text-xl font-bold text-white mb-6 text-center">{title}</h4>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default SkillCategoryCard;
