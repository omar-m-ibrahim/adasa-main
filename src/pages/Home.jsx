import React from "react";
import { Link } from "react-router-dom";
import {
  FaLightbulb,
  FaUserAlt,
  FaImages,
  FaCogs,
  FaCamera,
  FaFileAlt,
  FaUsers,
  FaFolderOpen,
  FaPenNib,
} from "react-icons/fa";
import data from "../data.json";
import BlogCard from "../components/blog/BlogCard";

// Map arabic category names to icons
const getCategoryIcon = (categoryName) => {
  switch (categoryName) {
    case "إضاءة":
      return <FaLightbulb className="w-8 h-8" />;
    case "بورتريه":
      return <FaUserAlt className="w-8 h-8" />;
    case "مناظر طبيعية":
      return <FaImages className="w-8 h-8" />;
    case "تقنيات":
      return <FaCogs className="w-8 h-8" />;
    case "معدات":
      return <FaCamera className="w-8 h-8" />;
    default:
      return <FaCamera className="w-8 h-8" />;
  }
};

export default function Home() {
  const { posts, categories } = data;
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0a0a0a] pb-16">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10 pt-20">
          <div className="inline-block border border-orange-500/30 bg-orange-500/10 text-orange-500 rounded-full px-4 py-1 mb-6">
            <span className="text-sm font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
              مرحباً بك في عدسة
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24 max-w-md mx-auto sm:max-w-none">
            <Link
              to="/blog"
              className="btn-primary px-8 py-4 rounded-full font-medium text-center text-white bg-orange-500 hover:bg-orange-600 transition-colors w-full sm:w-auto"
            >
              ابدأ القراءة
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 rounded-full font-medium text-center text-white border border-[#262626] hover:bg-[#161616] hover:-translate-y-1 transition-all shadow-xl shadow-transparent hover:shadow-[#161616]/50 duration-300 w-full sm:w-auto"
            >
              اعرف المزيد
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Stats */}
      <div className="relative z-20 px-4 w-full max-w-4xl mx-auto -mt-24 md:-mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaFileAlt className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">+50</div>
            <div className="text-sm text-neutral-500">مقالة </div>
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaUsers className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">+10ألف</div>
            <div className="text-sm text-neutral-500">قارئ</div>
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaFolderOpen className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">4</div>
            <div className="text-sm text-neutral-500">تصنيفات</div>
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaPenNib className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">6</div>
            <div className="text-sm text-neutral-500">كاتب</div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <section className="pt-40 pb-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block border border-orange-500/30 bg-orange-500/10 text-orange-500 rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-bold">مميز</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              مقالات مختارة
            </h2>
            <p className="text-neutral-400">محتوى منتقى لبدء رحلة تعلمك</p>
          </div>
          <Link
            to="/blog"
            className="btn-secondary px-6 py-2 rounded-full font-medium border border-[#262626] text-white hover:bg-[#161616] transition-colors self-start md:self-end"
          >
            عرض الكل
          </Link>
        </div>
        <div className="flex flex-col gap-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} viewMode="list" />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[#0a0a0a] border-t border-[#262626] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              استكشف حسب الموضوع
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
              <Link
                to="/blog"
                key={index}
                className="glass-card flex flex-col items-center justify-center p-8 rounded-2xl group hover:border-orange-500 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors"></div>
                <div className="text-neutral-400 group-hover:text-orange-500 transition-colors mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(249,115,22,0)] group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  {getCategoryIcon(cat.name)}
                </div>
                <h3 className="text-white font-medium relative z-10">
                  {cat.name}
                </h3>
                <span className="text-neutral-500 font-mono text-sm mt-2 relative z-10">
                  {cat.count} مقال
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 px-4 max-w-7xl mx-auto border-t border-[#262626]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block border border-orange-500/30 bg-orange-500/10 text-orange-500 rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-bold flex items-center gap-2">
                الأحدث{" "}
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                </span>
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              أحدث المقالات
            </h2>
            <p className="text-neutral-400">محتوى جديد طازج من المطبعة</p>
          </div>
          <Link
            to="/blog"
            className="text-white hover:text-orange-500 transition-colors flex items-center gap-2 self-start md:self-end group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            عرض جميع المقالات
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} viewMode="grid" />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-[#161616] border border-[#262626] rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="inline-flex flex-col items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mb-8 relative z-10 shadow-lg shadow-orange-500/20 text-white">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg relative z-10">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <form
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 relative z-10 mb-8 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="grow bg-[#0a0a0a] border border-[#262626] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors w-full"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-medium transition-colors w-full sm:w-auto whitespace-nowrap"
            >
              اشترك الآن
            </button>
          </form>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-neutral-500 relative z-10 font-medium">
            <div className="flex -space-x-3 space-x-reverse ml-2 md:mr-2">
              <img
                className="w-10 h-10 rounded-full border-2 border-[#161616]"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                alt="User 1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-[#161616]"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                alt="User 2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-[#161616]"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                alt="User 3"
              />
            </div>
            <p>
              انضم لـ +10,000 مصور &bull; بدون إزعاج &bull; إلغاء الاشتراك في أي
              وقت
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
