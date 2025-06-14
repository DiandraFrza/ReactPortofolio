// src/components/MorphingBlob.jsx

import { useState, useEffect } from 'react';

function MorphingBlob() {
  const [style, setStyle] = useState({});

  useEffect(() => {
    // Fungsi untuk membuat nilai random
    const randomizeStyle = () => {
      const newStyle = {
        // border-radius yang aneh untuk bentuk organik
        borderRadius: `${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% / ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}%`,
        // Posisi random
        transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(${Math.random() * 0.5 + 0.8})`,
      };
      setStyle(newStyle);
    };

    // Panggil fungsi ini setiap beberapa detik untuk animasi morphing halus
    const intervalId = setInterval(randomizeStyle, 3000); // Morphing setiap 3 detik

    // Cleanup interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="absolute top-1/4 left-1/4 w-96 h-96 transition-all duration-[3000ms] ease-in-out"
      style={{
        // Warna gradasi untuk blob. Ganti dengan warna pilihanmu
        background: 'radial-gradient(circle at center, rgba(66, 153, 225, 0.3), rgba(129, 236, 236, 0))',
        // Efek blur yang kuat
        filter: 'blur(100px)',
        ...style,
      }}
    />
  );
}

export default MorphingBlob;