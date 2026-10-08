import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import data from '../../data.json';

export default function Footer() {
  const { categories, siteInfo } = data;

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626] pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                {siteInfo.name}
              </span>
              <span className="text-sm text-neutral-500">- {siteInfo.tagline}</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {siteInfo.description}
            </p>
            <div className="flex gap-4">
              <a href={siteInfo.social.twitter} className="w-10 h-10 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href={siteInfo.social.github} className="w-10 h-10 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href={siteInfo.social.linkedin} className="w-10 h-10 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href={siteInfo.social.youtube} className="w-10 h-10 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 hover:scale-110">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">استكشف</h3>
            <ul className="flex flex-col gap-4 text-sm text-neutral-400">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">الرئيسية</Link></li>
              <li><Link to="/blog" className="hover:text-orange-500 transition-colors">المدونة</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">من نحن</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">التصنيفات</h3>
            <ul className="flex flex-col gap-4 text-sm text-neutral-400">
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link to="/blog" className="hover:text-orange-500 transition-colors">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">ابقى على اطلاع</h3>
            <p className="text-neutral-400 text-sm mb-4">
              اشترك في النشرة البريدية لتصلك أحدث المقالات والنصائح.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="البريد الإلكتروني" 
                className="bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-sm text-white focus:outline-hidden focus:border-orange-500 transition-colors"
                required 
              />
              <button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-3 text-sm font-medium transition-colors"
              >
                اشترك الآن
              </button>
            </form>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} {siteInfo.name}. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
