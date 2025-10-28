"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";

interface BlogTypes {
  id: number;
  title: string;
  image: string;
  description: string;
  author: string;
  date: string;
  category?: string;
  readTime?: string;
}

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
      "Learn how to travel responsibly and make eco-friendly choices for your next adventure.",
    author: "Jane Smith",
    date: "Oct 12, 2025",
    category: "Sustainability",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Wildlife Photography Tips for Every Explorer",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    description:
      "Capture stunning wildlife shots ethically with these beginner-friendly photography techniques.",
    author: "Alex Brown",
    date: "Oct 14, 2025",
    category: "Photography",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Minimalist Travel: Experience More with Less",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    description:
      "Discover how packing light can help you focus on the beauty of the journey, not the baggage.",
    author: "Sofia Khan",
    date: "Oct 15, 2025",
    category: "Lifestyle",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Forest Conservation: Protecting Earth's Lungs",
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    description:
      "Forests are essential for our planet. Learn why their preservation matters more than ever.",
    author: "David Lee",
    date: "Oct 16, 2025",
    category: "Conservation",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Eco-Friendly Camping: Leave Only Footprints",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    description:
      "Discover how to camp sustainably and protect nature while enjoying outdoor adventures.",
    author: "Emily Carter",
    date: "Oct 17, 2025",
    category: "Adventure",
    readTime: "6 min read",
  },
  {
    id: 7,
    title: "Ocean Conservation: Saving Marine Life Together",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    description:
      "Learn how simple lifestyle choices can contribute to preserving marine biodiversity.",
    author: "Michael Green",
    date: "Oct 18, 2025",
    category: "Conservation",
    readTime: "7 min read",
  },
  {
    id: 8,
    title: "Top 5 Eco Lodges Around the Globe",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    description:
      "These eco-lodges blend luxury with sustainability, offering comfort in harmony with nature.",
    author: "Laura Adams",
    date: "Oct 19, 2025",
    category: "Travel",
    readTime: "5 min read",
  },
  {
    id: 9,
    title: "Tech Meets Nature: Innovations in Conservation",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=80",
    description:
      "Explore how AI, drones, and IoT are helping protect endangered species and habitats worldwide.",
    author: "Kevin Brooks",
    date: "Oct 20, 2025",
    category: "Innovation",
    readTime: "6 min read",
  },
  {
    id: 10,
    title: "Volunteering Abroad: Make a Real Impact",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    description:
      "Travel with purpose — learn how volunteering abroad can change lives and communities.",
    author: "Rachel Nguyen",
    date: "Oct 21, 2025",
    category: "Community",
    readTime: "8 min read",
  },
];

type Category =
  | "All"
  | "Adventure"
  | "Sustainability"
  | "Photography"
  | "Lifestyle"
  | "Conservation"
  | "Travel"
  | "Innovation"
  | "Community";

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories: Category[] = [
    "All",
    ...new Set(blogs.map((blog) => blog.category).filter(Boolean)),
  ] as Category[];

  const filteredBlogs = blogs.filter(
    (blog) => selectedCategory === "All" || blog.category === selectedCategory
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#09090b] dark:via-[#0d0d10] dark:to-[#09090b] transition-colors duration-500">
      <div className="pt-[40px]">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Latest Articles
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-600 to-gray-900 dark:from-gray-100 dark:via-green-400 dark:to-gray-100 bg-clip-text text-transparent">
            Explore Our Blogs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Dive into insightful articles about sustainable travel, eco-adventures, and conservation efforts that matter.
          </p>
        </div>

        {/* Category Filter Only */}
        <div className="mb-16 p-8 rounded-3xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25"
                    : "bg-white dark:bg-neutral-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-green-300 dark:hover:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="group relative bg-white dark:bg-neutral-900 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-green-300 dark:hover:border-green-700 flex flex-col h-full"
            >
              <div className="relative overflow-hidden flex-shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/90 dark:bg-neutral-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                    {blog.category}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(blog.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm hover:scale-110 transition-transform duration-300"
                >
                  {favorites.includes(blog.id) ? (
                    <span className="text-red-500 text-lg">❤️</span>
                  ) : (
                    <span className="text-gray-400 text-lg">🤍</span>
                  )}
                </button>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <span className="font-medium">{blog.author}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                  </div>
                  <span className="text-gray-400 dark:text-gray-500">{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 line-clamp-2 leading-tight mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-6 flex-grow">
                  {blog.description}
                </p>

                <div className="mt-auto">
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-300 rounded-xl font-semibold hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30 transition-all duration-300 transform hover:scale-[1.02] border border-green-200 dark:border-green-800">
                    Read Article
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
