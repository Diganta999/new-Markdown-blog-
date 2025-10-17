"use client"
import React, { useState } from "react";

// Define Blog type
interface BlogTypes {
  slug?: string;
  content?: string;
  title: string;
  image: string;
  description: string;
  author: string;
  date: string;
  id: number;
  category?: string;
  readTime?: string;
}

// Local blog data with enhanced properties
const blogs: BlogTypes[] = [
  {
    id: 1,
    title: "Exploring the Wild: Top 10 Eco Adventures",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description:
      "Discover the best eco-adventures that bring you closer to nature while preserving the environment.",
    author: "John Doe",
    date: "Oct 10, 2025",
    category: "Adventure",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Sustainable Travel: A Guide for Beginners",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    description:
      "Learn how to travel responsibly and make eco-friendly choices on your next adventure.",
    author: "Jane Smith",
    date: "Oct 12, 2025",
    category: "Sustainability",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Wildlife Photography Tips for Travelers",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    description:
      "Capture the beauty of wildlife ethically with these essential photography techniques.",
    author: "Alex Brown",
    date: "Oct 14, 2025",
    category: "Photography",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Minimalist Travel: Less Baggage, More Experience",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    description:
      "Pack light, live free — discover how minimalist travel can transform your adventures.",
    author: "Sofia Khan",
    date: "Oct 15, 2025",
    category: "Lifestyle",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Forest Conservation and Its Global Importance",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    description:
      "Forests are vital to Earth's ecosystem. Learn why conserving them is more important than ever.",
    author: "David Lee",
    date: "Oct 16, 2025",
    category: "Conservation",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Eco-Friendly Camping: Leave No Trace Behind",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    description:
      "Explore how to camp sustainably by reducing waste and protecting fragile ecosystems.",
    author: "Emily Carter",
    date: "Oct 17, 2025",
    category: "Adventure",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "Ocean Conservation: Protecting Marine Life",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    description:
      "The ocean is our planet’s heartbeat. Discover practical ways to reduce pollution and protect marine species.",
    author: "Michael Green",
    date: "Oct 18, 2025",
    category: "Conservation",
    readTime: "7 min read",
  },
  {
    id: 8,
    title: "Top 5 Eco Lodges Around the World",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    description:
      "Stay close to nature without harming it. These eco-lodges blend comfort with sustainability.",
    author: "Laura Adams",
    date: "Oct 19, 2025",
    category: "Travel",
    readTime: "5 min read",
  },
  {
    id: 9,
    title: "How Technology is Transforming Wildlife Protection",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
    description:
      "From drones to AI, learn how modern innovations are helping conservationists safeguard endangered species.",
    author: "Kevin Brooks",
    date: "Oct 20, 2025",
    category: "Innovation",
    readTime: "6 min read",
  },
  {
    id: 10,
    title: "Volunteering Abroad: Make a Positive Impact",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    description:
      "Travel with purpose — explore how volunteering abroad can change both your life and the communities you help.",
    author: "Rachel Nguyen",
    date: "Oct 21, 2025",
    category: "Community",
    readTime: "8 min read",
  },
];


// Category filter type
type Category = "All" | "Adventure" | "Sustainability" | "Photography" | "Lifestyle" | "Conservation";

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  // Extract unique categories
  const categories: Category[] = ["All", ...new Set(blogs.map(blog => blog.category).filter(Boolean))] as Category[];

  // Filter blogs based on category and search term
  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-400 via-black to-gray-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Latest
            </span>
            {" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover insightful articles about sustainable travel, eco-adventures, and conservation efforts.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-6 md:space-y-0 md:flex md:items-center md:justify-between">
          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-xl text-white placeholder-gray-400 shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/30 transition-all duration-300 hover:border-white/20"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-xl border ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-400 border-green-500/30 shadow-lg shadow-green-500/20"
                    : "bg-black/40 text-gray-400 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-gray-400 text-center">
          Showing <span className="text-white font-semibold">{filteredBlogs.length}</span> of{" "}
          <span className="text-white font-semibold">{blogs.length}</span> blogs
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1"
            >
              <div className="text-white rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-white/25 overflow-hidden hover:shadow-white/5 hover:shadow-3xl">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                  <div
                    style={{ animationDelay: "0.5s" }}
                    className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
                  ></div>

                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/5 blur-xl animate-ping"></div>
                  <div
                    style={{ animationDelay: "1s" }}
                    className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-white/5 blur-lg animate-ping"
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>

                <div className="p-6 relative z-10">
                  {/* Blog Image */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30 backdrop-blur-xl">
                        {blog.category}
                      </span>
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(blog.id);
                      }}
                      className="absolute top-4 right-4 p-2 bg-black/40 rounded-full backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      <svg
                        className={`w-5 h-5 transition duration-300 ${
                          favorites.includes(blog.id)
                            ? "text-red-400 fill-current"
                            : "text-gray-400 hover:text-red-400"
                        }`}
                        fill={favorites.includes(blog.id) ? "currentColor" : "none"}
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Author and Date */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        {blog.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-500 line-clamp-2">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                      {blog.description}
                    </p>

                    {/* Read Time */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-2 group-hover:text-gray-400 transition-colors duration-300">
                        <div className="w-1 h-1 bg-current rounded-full"></div>
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Separator */}
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full transform group-hover:via-green-500/50 transition-all duration-500"></div>

                    {/* Read More Button */}
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-xl text-white font-semibold hover:from-green-500/20 hover:to-emerald-600/20 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                      Read More
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                    {/* Animated Dots */}
                    <div className="flex justify-center space-x-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div
                        style={{ animationDelay: "0.1s" }}
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                      ></div>
                      <div
                        style={{ animationDelay: "0.2s" }}
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <div className="relative inline-block mb-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#010101] via-[#090909] to-[#010101] shadow-2xl backdrop-blur-xl">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No blogs found</h3>
            <p className="text-gray-400 text-lg">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;