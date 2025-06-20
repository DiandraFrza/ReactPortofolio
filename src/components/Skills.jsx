import React from "react";
import SkillCategoryCard from "./SkillCategoryCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiNodedotjs,
  SiReact,
  SiVuedotjs,
  SiLaravel,
  SiCodeigniter,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiCanva,
  SiLaragon,
  SiXampp,
  SiGamemaker,
} from "react-icons/si";
import { FiDatabase, FiShare2, FiFileText } from "react-icons/fi";

const skillCategories = [
  {
    title: "Languages & Databases",
    skills: [
      { name: "HTML", icon: <SiHtml5 size={18} /> },
      { name: "CSS", icon: <SiCss3 size={18} /> },
      { name: "JavaScript", icon: <SiJavascript size={18} /> },
      { name: "PHP", icon: <SiPhp size={18} /> },
      { name: "SQL", icon: <FiDatabase size={18} /> },
      { name: "PAWN Script", icon: <FiFileText size={18} /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Node JS", icon: <SiNodedotjs size={18} /> },
      { name: "React JS", icon: <SiReact size={18} /> },
      { name: "Vue JS", icon: <SiVuedotjs size={18} /> },
      { name: "Laravel", icon: <SiLaravel size={18} /> },
      { name: "CodeIgniter", icon: <SiCodeigniter size={18} /> },
      { name: "Rest API", icon: <FiShare2 size={18} /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit size={18} /> },
      { name: "GitHub", icon: <SiGithub size={18} /> },
      { name: "GameMaker", icon: <SiGamemaker size={18} /> },
      { name: "Vercel", icon: <SiVercel size={18} /> },
      { name: "Figma", icon: <SiFigma size={18} /> },
      { name: "Canva", icon: <SiCanva size={18} /> },
      { name: "Laragon", icon: <SiLaragon size={18} /> },
      { name: "XAMPP", icon: <SiXampp size={18} /> },
    ],
  },
];

function Skills() {
  return (
    <div id="skills" className="mt-10">
      <h3
        className="text-center mb-12 text-3xl sm:text-6xl font-bold text-[var(--color-lavender)] text-spotlight-effect2"
        data-aos="fade-down"
      >
        Skills & Abilities
      </h3>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        data-aos="zoom-out"
      >
        {skillCategories.map((category, index) => (
          <SkillCategoryCard
            key={category.title}
            title={category.title}
            skills={category.skills}
            isFeatured={index === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
