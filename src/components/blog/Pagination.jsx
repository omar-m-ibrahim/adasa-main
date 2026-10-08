import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex items-center justify-center space-x-2 rtl:space-x-reverse mt-16 mb-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-400 hover:text-white hover:bg-[#262626] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Previous page"
      >
        <FaChevronRight className="w-4 h-4" />
      </button>
      
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
            currentPage === page
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
              : 'border border-[#262626] bg-[#161616] text-neutral-400 hover:text-white hover:bg-[#262626]'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-400 hover:text-white hover:bg-[#262626] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Next page"
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>
    </nav>
  );
}
