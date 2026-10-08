import React, { useState, useMemo } from 'react';
import BlogCard from '../components/blog/BlogCard';
import Pagination from '../components/blog/Pagination';
import data from '../data.json';
import { FaSearch, FaTh, FaListUl } from 'react-icons/fa';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('جميع المقالات');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = useMemo(() => {
    return data.posts.filter((post) => {
      const matchesSearch = post.title.includes(searchTerm) || post.excerpt.includes(searchTerm);
      const matchesCategory = selectedCategory === 'جميع المقالات' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [currentPage, filteredPosts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="pt-20 bg-[#0a0a0a] min-h-screen">
      
      {/* Top Header Section with Grid */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none"></div>
        {/* Fade Out Grid Effect */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0a0a]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">استكشف <span className="gradient-text">مقالاتنا</span></h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            مساحتنا لمشاركة المعرفة، تجارب التصوير، وآخر أخبار عالم العدسات والكاميرات.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 px-4 max-w-7xl mx-auto relative z-10">
        
        {/* Filter bar */}
        <div className="bg-[#161616] border border-[#262626] rounded-2xl p-4 mb-12 flex flex-col md:flex-row gap-4 justify-between items-center shadow-2xl">
          
          <div className="relative w-full md:w-96">
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="ابحث في المقالات..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-[#0a0a0a] border border-[#262626] rounded-xl py-3 pr-12 pl-4 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          <div className="flex w-full md:w-auto items-center gap-4 justify-between md:justify-end">
             {/* Category Links instead of Select for better UI */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full justify-start md:justify-end">
              <button
                 onClick={() => handleCategoryChange({target: {value: 'جميع المقالات'}})}
                 className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === 'جميع المقالات' ? 'bg-orange-500 text-white' : 'bg-[#0a0a0a] border border-[#262626] text-neutral-400 hover:text-white'}`}
              >
                جميع المقالات
              </button>
              {data.categories.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryChange({target: {value: cat.name}})}
                  className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat.name ? 'bg-orange-500 text-white' : 'bg-[#0a0a0a] border border-[#262626] text-neutral-400 hover:text-white'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts List / Grid */}
        {currentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map(post => (
              <BlogCard key={post.id} post={post} viewMode="grid" />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#161616] border border-[#262626] rounded-3xl">
            <p className="text-xl text-neutral-400">لم يتم العثور على تدوينات تطابق بحثك.</p>
          </div>
        )}

        {/* Pagination component */}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={setCurrentPage} 
        />
      </section>
    </div>
  );
}
