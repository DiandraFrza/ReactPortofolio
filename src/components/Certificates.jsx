// src/components/Certificates.jsx

// 1. Import komponen card dan gambar-gambar sertifikat lo
import CertificateCard from "./CertificateCard";
import certDicodingJs from "../assets/img/31343C.svg";
import certGoogleIt from "../assets/img/31343C.svg";
import certFreecodecamp from "../assets/img/31343C.svg";

// 2. Siapin data sertifikatnya di sini
const certificatesData = [
  {
    imgSrc: certDicodingJs,
    title: "DUMMY",
    issuer: "DUMMY",
    credentialUrl: "#",
    aosDelay: "100",
  },
  {
    imgSrc: certGoogleIt,
    title: "DUMMY",
    issuer: "DUMMY",
    credentialUrl: "#",
    aosDelay: "200",
  },
  {
    imgSrc: certFreecodecamp,
    title: "DUMMY",
    issuer: "fDUMMY",
    credentialUrl: "#",
    aosDelay: "300",
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
