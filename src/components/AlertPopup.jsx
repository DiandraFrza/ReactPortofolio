// src/components/AlertPopup.jsx (Versi Upgrade)

import React, { useEffect, useState } from "react";
import { FiX, FiInfo } from "react-icons/fi"; // Ganti FiXCircle jadi FiX biar sama

const AlertPopup = ({ isOpen, message, onClose }) => {
  // 1. Tambahin state & effect buat ngontrol animasi, nyontek dari InfoModal
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 50); // Kasih jeda dikit biar transisi keliatan
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // 2. Backdrop-nya di-upgrade pake backdrop-blur & transisi opacity
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      {/* 3. Kotak modalnya juga di-upgrade pake transisi scale & opacity */}
      <div
        className={`relative w-full max-w-sm m-4 bg-slate-800/80 border border-slate-700 rounded-2xl shadow-xl transition-all duration-300 transform ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>
        <div className="p-8 text-center">
          {/* 4. Ikonnya dibikin lebih keren, dibungkus buletan ungu */}
          <div className="flex justify-center mb-5">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20">
              <FiInfo size={32} className="text-purple-300" />
            </div>
          </div>
          {/* 5. Kontennya tetep pake title & message, cuma bungkusannya baru */}
          <h3 className="text-xl font-bold text-slate-100 mb-2">Informasi</h3>
          <p className="text-slate-300">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertPopup;
