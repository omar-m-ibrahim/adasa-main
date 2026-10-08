import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function Navbarcomp() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link className="flex items-center gap-3 group" to="/">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img className="w-full h-full object-cover" src="https://adasa-psi.vercel.app/favicon.png" alt="Photography Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">عدسة</span>
              <span className="text-[10px] text-orange-400/80 hidden sm:block tracking-wide">عالم التصوير الفوتوغرافي</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            <Link 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === "/" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "text-neutral-400 hover:text-white"}`} 
              to="/"
            >
              الرئيسية
            </Link>
            <Link 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === "/blog" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "text-neutral-400 hover:text-white"}`} 
              to="/blog"
            >
              المدونة
            </Link>
            <Link 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === "/about" ? "bg-linear-to-r from-orange-500 to-orange-600 text-white" : "text-neutral-400 hover:text-white"}`} 
              to="/about"
            >
              من نحن
            </Link>
          </div>

          <div className="hidden md:flex items-center">
             <Link className="btn-primary text-sm px-6 py-2.5 rounded-full font-medium text-white shadow-lg shadow-orange-500/20" to="/blog">ابدأ القراءة</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-400 hover:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#161616] border-t border-[#262626] rounded-b-2xl shadow-xl mt-2 py-4 px-4 flex flex-col gap-4">
             <Link 
              className={`block px-4 py-2 rounded-xl text-sm font-medium ${location.pathname === "/" ? "bg-orange-500/20 text-orange-500" : "text-neutral-400"}`} 
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              className={`block px-4 py-2 rounded-xl text-sm font-medium ${location.pathname === "/blog" ? "bg-orange-500/20 text-orange-500" : "text-neutral-400"}`} 
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
            >
              المدونة
            </Link>
             <Link 
              className={`block px-4 py-2 rounded-xl text-sm font-medium ${location.pathname === "/about" ? "bg-orange-500/20 text-orange-500" : "text-neutral-400"}`} 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              من نحن
            </Link>
             <Link 
              className="block px-4 py-3 mt-2 text-center btn-primary rounded-xl text-sm font-medium text-white" 
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
            >
              ابدأ القراءة
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
