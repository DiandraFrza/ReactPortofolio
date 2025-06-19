// src/components/Skills.jsx

import SkillBadge from "./SkillBadge"; // Import komponen badge

import htmlIcon from "../assets/img/icon/html5.svg";
import cssIcon from "../assets/img/icon/css3.svg";
import phpIcon from "../assets/img/icon/php.svg";
import javascriptIcon from "../assets/img/icon/javascript.svg";
import gitIcon from "../assets/img/icon/git.svg";
import githubIcon from "../assets/img/icon/github.svg";
import codeigniterIcon from "../assets/img/icon/codeigniter.svg";
import laravelIcon from "../assets/img/icon/laravel.svg";
import gamemakerIcon from "../assets/img/icon/gamemaker.svg";
import pwnIcon from "../assets/img/icon/pwn.svg";
import mysqlIcon from "../assets/img/icon/mysql.svg";
import figmaIcon from "../assets/img/icon/figma.svg";
import canvaIcon from "../assets/img/icon/canva.svg";
import writerIcon from "../assets/img/icon/libreofficewriter.svg";
import calcIcon from "../assets/img/icon/libreofficecalc.svg";
import laragonIcon from "../assets/img/icon/laragon.svg";
import xamppIcon from "../assets/img/icon/xampp.svg";

const skillsData = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "PHP", icon: phpIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "CodeIgniter", icon: codeigniterIcon },
  { name: "Laravel", icon: laravelIcon },
  { name: "GameMaker", icon: gamemakerIcon },
  { name: "PAWN Script", icon: pwnIcon },
  { name: "MySQL", icon: mysqlIcon },
];

const toolsData = [
  { name: "Figma", icon: figmaIcon },
  { name: "Canva", icon: canvaIcon },
  { name: "MS Word", icon: writerIcon },
  { name: "MS Excel", icon: calcIcon },
  { name: "Laragon", icon: laragonIcon },
  { name: "XAMPP", icon: xamppIcon },
];

function Skills() {
  return (
    <div className="mt-10">
      <h3
        className="text-center mb-18 text-3xl sm:text-6xl font-bold text-[var(--color-lavender)] text-spotlight-effect2"
        data-aos="fade-down"
      >
        Skills & Abilities
      </h3>
      <div className="flex flex-wrap items-center gap-4">
        {skillsData.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>

      <div
        className="mt-6 mb-4 w-full h-1 bg-gray-300 dark:bg-gray-700"
        data-aos="zoom-out"
      ></div>

      <h3
        className="text-center mb-4 text-3xl sm:text-6xl font-bold text-[var(--color-lavender)] text-glow-purpled"
        data-aos="fade-down"
      >
        Tools
      </h3>
      <div className="flex flex-wrap items-center gap-4">
        {toolsData.map((tool) => (
          <SkillBadge key={tool.name} name={tool.name} icon={tool.icon} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
