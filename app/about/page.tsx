"use client";

import Navbar from "@/components/Navbar";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="pt-[40px]">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-[#05000a]">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white text-center mb-8">
              We Create
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Beautiful Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
              We are a passionate team of designers and developers dedicated to
              crafting exceptional digital experiences that inspire and engage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0e0e16] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "5+", label: "Years Experience" },
              { number: "15+", label: "Team Members" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-[#12121b] dark:to-[#1a1a24] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0b0b12] transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the talented individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image:
                  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=400&h=400",
                description:
                  "Leading our design vision with 8+ years of experience in digital design.",
              },
              {
                name: "Marcus Johnson",
                role: "Lead Developer",
                image:
                  "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=400&h=400",
                description:
                  "Full-stack developer passionate about creating scalable solutions.",
              },
              {
                name: "Elena Rodriguez",
                role: "UX Researcher",
                image:
                  "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?crop=faces&fit=crop&w=400&h=400",
                description:
                  "Dedicated to understanding user needs and creating intuitive experiences.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="group bg-white dark:bg-[#12121b] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-[#0e0e16] dark:to-[#1a1a24] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Design Excellence",
                description:
                  "We believe in creating beautiful, functional designs that stand the test of time.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description:
                  "Constantly pushing boundaries and exploring new technologies and approaches.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description:
                  "Working closely with our clients to bring their vision to life.",
              },
              {
                icon: "⚡",
                title: "Performance",
                description:
                  "Delivering fast, efficient solutions that exceed expectations.",
              },
              {
                icon: "❤️",
                title: "Passion",
                description:
                  "We love what we do and it shows in every project we deliver.",
              },
              {
                icon: "🌱",
                title: "Growth",
                description:
                  "Continuously learning and improving our skills and processes.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-[#12121b] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0b0b12] transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life with our
            expertise and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              Start a Project
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-full font-semibold hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
