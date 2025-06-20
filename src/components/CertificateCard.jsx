import React from "react";
import { FiArrowUpRight, FiAward } from "react-icons/fi";

function CertificateCard({
  imgSrc,
  title,
  issuer,
  credentialUrl,
  aosDelay,
  orientation,
}) {
  const imageContainerClasses = "overflow-hidden aspect-video bg-slate-900/50";

  const imageClasses = `
    w-full h-full group-hover:scale-105 transition-transform duration-300
    ${orientation === "portrait" ? "object-contain" : "object-cover"}
  `;

  return (
    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className={imageContainerClasses}>
        <img
          src={imgSrc}
          alt={`Certificate for ${title}`}
          className={imageClasses}
        />
      </div>

      <div className="p-5">
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <FiAward />
            <span>{issuer}</span>
          </div>
          <FiArrowUpRight className="text-slate-500 group-hover:text-purple-300 transition-colors duration-300" />
        </div>
      </div>
    </a>
  );
}

export default CertificateCard;
