"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

export default function AnimatedContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const componentRef = useRef(null);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (componentRef.current) observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e :any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us an email anytime",
      value: "hello@modernblog.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      value: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 Design Street, Creative City",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Get instant help from our team",
      value: "Start Chat",
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };
  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -8 },
  };

  return (
    <div
      ref={componentRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#05000a] dark:to-[#0d0015] px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="pt-[40px] pb-5">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Talk
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Get in touch and let&apos;s create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            >
              Get in Touch
            </motion.h2>

            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className={`bg-white dark:bg-[#0f0a1a] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer group-hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white text-xl`}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {method.description}
                      </p>
                      <p className="text-gray-900 dark:text-gray-300 font-medium">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-[#0f0a1a] rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Send a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject", "message"].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
                    {field}
                  </label>
                  {field !== "message" ? (
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-[#0b0015] text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                      placeholder={`Enter your ${field}`}
                      required
                    />
                  ) : (
                    <textarea
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-[#0b0015] text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  )}
                </div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-5 px-8 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending Message...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-[#0f0a1a] rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Prefer a different way to connect?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              We&apos;re active on social media and always happy to chat.
            </p>
            <div className="flex justify-center space-x-6 ">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-100 dark:bg-[#1a1128] rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-100 dark:bg-[#1a1128] rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-100 dark:bg-[#1a1128] rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-100 dark:bg-[#1a1128] rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <FaDribbble size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
