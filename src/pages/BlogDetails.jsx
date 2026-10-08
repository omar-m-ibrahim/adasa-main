import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import data from '../data.json';
import { FaRegCalendarAlt, FaRegClock, FaArrowRight } from 'react-icons/fa';

export default function BlogDetails() {
  const { slug } = useParams();

  const post = useMemo(() => {
    return data.posts.find(p => p.slug === slug);
  }, [slug]);

  if (!post) {
    return <Navigate to="/404" />;
  }

  // Simple and safe markdown to HTML function since we know the structure
  const renderContent = (content) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        // give an ID for the TOC
        return <h2 key={index} id={`heading-${index}`} className="text-3xl font-bold mt-12 mb-6 text-white pl-4 border-l-4 border-orange-500">{paragraph.replace('## ', '')}</h2>;
      }
      return <p key={index} className="mb-4 text-neutral-400 leading-relaxed text-lg">{paragraph}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Full-width Hero Section */}
      <header className="relative pt-40 pb-20 px-4 min-h-[60vh] flex items-end">
        {/* Background Image with Dark Overlay */}
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6 font-medium">
            <Link to="/" className="hover:text-orange-500 transition-colors">الرئيسية</Link>
            <span>&gt;</span>
            <Link to="/blog" className="hover:text-orange-500 transition-colors">المدونة</Link>
            <span>&gt;</span>
            <span className="text-orange-500">{post.category}</span>
          </div>
          
          {/* Category Pill */}
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
            {post.category}
          </span>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight max-w-4xl">
            {post.title}
          </h1>
          
          {/* Author Card & Metadata */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-500" />
              <div>
                <p className="font-bold text-white">{post.author.name}</p>
                <p className="text-sm text-neutral-400">{post.author.role}</p>
              </div>
            </div>
            <div className="w-px h-8 bg-[#262626] hidden sm:block"></div>
            <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium">
              <FaRegCalendarAlt />
              <span>{new Date(post.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="w-px h-8 bg-[#262626] hidden sm:block"></div>
            <div className="flex items-center gap-2 text-neutral-400 text-sm font-medium">
              <FaRegClock />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert max-w-none prose-p:text-neutral-400 prose-headings:text-white prose-a:text-orange-500 pb-12 border-b border-[#262626]">
              {renderContent(post.content)}
            </div>
            
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-[#161616] border border-[#262626] text-neutral-400 text-sm font-medium px-4 py-1.5 rounded-full hover:border-orange-500 hover:text-white transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#161616] border border-[#262626] rounded-2xl p-6 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-[#262626] pb-4">محتويات المقالة</h3>
              <ul className="space-y-4">
                {post.content.split('\n\n').map((p, idx) => {
                  if (p.startsWith('## ')) {
                    return (
                      <li key={idx}>
                        <a href={`#heading-${idx}`} className="text-neutral-400 hover:text-orange-500 transition-colors text-sm font-medium flex items-center gap-3 group">
                          <span className="w-2 h-2 rounded-full border border-orange-500 group-hover:bg-orange-500 transition-colors"></span>
                          {p.replace('## ', '')}
                        </a>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
