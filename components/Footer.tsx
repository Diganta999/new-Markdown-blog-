"use client";
import Link from "next/link";

export default function MediumFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-[#0b0b0f] dark:border-gray-800 transition-colors duration-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Brand & Description */}
          <div className="flex-1 max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">M</span>
              </div>
              <span className="text-2xl font-serif font-bold text-black dark:text-white">
                ModernBlog
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light">
              A place to share knowledge and better understand the world.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {[
              {
                title: "Company",
                links: [
                  { name: "About", href: "/about" },
                  { name: "Careers", href: "/careers" },
                  { name: "Team", href: "/team" },
                  { name: "Press", href: "/press" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Help Center", href: "/help" },
                  { name: "Writing Tips", href: "/writing-tips" },
                  { name: "Style Guide", href: "/style-guide" },
                  { name: "Community", href: "/community" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Terms", href: "/terms" },
                  { name: "Privacy", href: "/privacy" },
                  { name: "Content Policy", href: "/content-policy" },
                  { name: "Cookie Policy", href: "/cookies" },
                ],
              },
            ].map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href}>
                        <span className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer text-lg">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            <div className="flex space-x-6">
              {[
                { icon: "twitter", href: "#" },
                { icon: "linkedin", href: "#" },
                { icon: "github", href: "#" },
                { icon: "instagram", href: "#" },
                { icon: "youtube", href: "#" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                  aria-label={social.icon}
                >
                  <i className={`fab fa-${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0e0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 dark:text-gray-400 text-lg">
              © {currentYear} ModernBlog. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400 text-lg">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>for readers and writers</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");

        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </footer>
  );
}
