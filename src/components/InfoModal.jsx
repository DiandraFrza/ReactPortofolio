import React from "react";
import { FiX, FiAlertTriangle } from "react-icons/fi";

function InfoModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md m-4 bg-slate-800/80 border border-slate-700 rounded-2xl shadow-xl transition-all duration-300 transform scale-95 opacity-0 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <FiX size={24} />
        </button>
        <div className="p-8 text-center">
          <div className="flex justify-center mb-5">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20">
              <FiAlertTriangle size={32} className="text-purple-300" />
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
