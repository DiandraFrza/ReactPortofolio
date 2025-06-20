import React from "react";

function SkillBadge({ icon, name }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-700/50 border border-transparent px-3 py-1.5 text-sm text-slate-300 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-900/20 hover:text-purple-200">
      {icon}
      <span>{name}</span>
    </div>
  );
}

export default SkillBadge;
