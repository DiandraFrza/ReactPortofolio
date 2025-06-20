// src/components/Certificates.jsx

import CertificateCard from "./CertificateCard";
import certSpektrum from "../assets/certificate/spektrum.jpeg";
import certCyberlabs from "../assets/certificate/cyberlabs.jpeg";
import certDicoding from "../assets/certificate/webinardicoding.jpeg";
import certJarvis from "../assets/certificate/webinarjarvis.jpeg";
import certMediasosial from "../assets/certificate/webinarmediasosial.jpeg";

const certificatesData = [
  {
    imgSrc: certSpektrum,
    title: "Praktek Kerja Lapangan (Internship)",
    issuer: "PT Spektrum Kreasi Pratama",
    credentialUrl: "#",
    aosDelay: "100",
    orientation: "portrait",
  },
  {
    imgSrc: certCyberlabs, // Sertifikat landscape
    title: "Exploring Passion in Your Dream Tech Companies",
    issuer: "CyberLabs",
    credentialUrl: "#",
    aosDelay: "200",
  },
  {
    imgSrc: certDicoding, // Sertifikat landscape
    title: "Webinar Express JS & Programmer WFH",
    issuer: "ID Koding",
    credentialUrl: "#",
    aosDelay: "200",
  },
  {
    imgSrc: certJarvis, // Sertifikat landscape
    title: "Kreativita Tanpa Batas",
    issuer: "Jarvis",
    credentialUrl: "#",
    aosDelay: "200",
  },
  {
    imgSrc: certMediasosial, // Sertifikat landscape
    title: "Literasi & Cakap Bermedia Sosial",
    issuer: "SMK Citra Negara",
    credentialUrl: "#",
    aosDelay: "200",
  },
];

function Certificates() {
  return (
    <div id="certificates" className="mt-10" data-aos="fade-up">
      <div className="text-2xl font-bold text-center text-white mb-10">
        <h3
          className="mb-4 text-3xl sm:text-6xl font-bold text-[var(--color-lavender)] text-spotlight-effect2"
          data-aos="fade-down"
        >
          My Certificates
        </h3>
      </div>

      {/* Galeri Sertifikat */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <CertificateCard
            key={index}
            imgSrc={cert.imgSrc}
            title={cert.title}
            issuer={cert.issuer}
            credentialUrl={cert.credentialUrl}
            aosDelay={cert.aosDelay}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
