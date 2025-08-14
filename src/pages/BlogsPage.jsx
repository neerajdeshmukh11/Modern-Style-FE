import React from 'react';
import './BlogsPage.css';
import backgroundImage from '../assets/hero/hero-background.jpg';

const BlogsPage = () => {
  const blogPosts = [
    { id: 1, title: "The Future of Web Development", excerpt: "Exploring the latest trends and technologies shaping the web development landscape in 2024 and beyond.", date: "March 15, 2024", readTime: "5 min read", category: "Technology" },
    { id: 2, title: "Building Scalable Applications", excerpt: "Best practices for creating applications that can grow with your business needs and user base.", date: "March 10, 2024", readTime: "8 min read", category: "Development" },
    { id: 3, title: "UI/UX Design Principles", excerpt: "Essential design principles every developer should know to create better user experiences.", date: "March 5, 2024", readTime: "6 min read", category: "Design" },
    { id: 4, title: "Performance Optimization Tips", excerpt: "Practical techniques to improve your website's speed and overall performance metrics.", date: "February 28, 2024", readTime: "7 min read", category: "Performance" },
    { id: 5, title: "Modern JavaScript Features", excerpt: "Discover the latest JavaScript features and how they can improve your development workflow.", date: "February 20, 2024", readTime: "10 min read", category: "JavaScript" },
    { id: 6, title: "CSS Grid vs Flexbox", excerpt: "Understanding when to use CSS Grid and when to use Flexbox for your layout needs.", date: "February 15, 2024", readTime: "4 min read", category: "CSS" }
  ];

  return (
    <div className="blog-container">
      {/* Fixed background layer for smoothness */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        {/* Main Heading */}
        <h1 className="text-white text-6xl font-bold mb-12 text-center leading-tight">
          Latest Insights
        </h1>

        {/* Blog Grid */}
        <div className="blog-grid-container">
          <h2 className="text-white text-4xl font-bold mb-12 text-center">
            Recent Articles
          </h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="card-header">
                  <span className="category-tag">{post.category}</span>
                  <div className="card-meta">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-3 hover:text-purple-300 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <button className="read-more-btn">
                  Read More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h2 className="text-white text-3xl font-bold mb-4 text-center">
            Stay Updated
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-md mx-auto">
            Subscribe to our newsletter and never miss the latest articles and updates.
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
