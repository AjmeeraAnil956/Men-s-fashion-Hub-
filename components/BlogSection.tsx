
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-indigo-500/30 hover:-translate-y-2">
    <div className="overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
      <p className="text-gray-400 mb-4">{post.excerpt}</p>
      <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
        Read More &rarr;
      </a>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Style <span className="text-indigo-400">Blog</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogPostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
