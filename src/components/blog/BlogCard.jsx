import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';

export default function BlogCard({ post, viewMode }) {
  if (viewMode === 'list') {
    return (
      <article className="flex flex-col md:flex-row glass-card overflow-hidden group mb-6">
        <Link to={`/blog/${post.slug}`} className="md:w-1/3 overflow-hidden block relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-48 md:h-full object-cover aspect-video md:aspect-auto transform group-hover:scale-110 transition-transform duration-700" 
          />
          <span className="absolute top-4 right-4 bg-[#0a0a0a]/80 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
        </Link>
        <div className="p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center text-sm text-neutral-400 gap-1">
                <FaRegCalendarAlt />
                <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-white line-clamp-2 group-hover:text-orange-500 transition-colors">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-neutral-400 mb-4 line-clamp-2 md:line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
              <div className="text-sm">
                <p className="font-medium text-white">{post.author.name}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-neutral-500 gap-1">
              <FaRegClock />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid view
  return (
    <article className="glass-card overflow-hidden flex flex-col group">
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative h-52">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <span className="absolute top-4 right-4 bg-[#0a0a0a]/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{post.category}</span>
      </Link>
      <div className="p-6 grow flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center text-xs text-neutral-400 gap-1">
            <FaRegCalendarAlt />
            <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-3 text-white line-clamp-2 group-hover:text-orange-500 transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-neutral-400 mb-4 line-clamp-2 text-sm grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-[#262626] mt-auto">
          <div className="flex items-center gap-2">
            <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
            <span className="text-sm font-medium text-white">{post.author.name}</span>
          </div>
          <div className="flex items-center text-xs text-neutral-500 gap-1">
            <FaRegClock />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
