"use client";

// Lab002-inspired website template using React + Tailwind CSS

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Lab002Template() {
  useEffect(() => {
    document.title = "Lab002 Inspired Site";
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Lab002 Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-xl font-bold tracking-widest">LAB002</h1>
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#features" className="hover:text-purple-400">Features</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Enter the New Creative Web
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-400"
        >
          Experience the future of publishing and creativity with a platform that empowers your ideas.
        </motion.p>
        <a href="#features" className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-xl shadow-xl">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Fast & Smooth", desc: "Lightning-fast interactions with zero lag." },
            { title: "Creative Freedom", desc: "Design without limitations or boundaries." },
            { title: "Built for the Future", desc: "Next-gen tools for next-gen creators." },
          ].map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-black p-6 rounded-2xl border border-gray-700 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-2">{feat.title}</h3>
              <p className="text-gray-400">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Lab002</h2>
        <p className="max-w-3xl mx-auto text-gray-400">
          Lab002 is reimagining how creators share ideas. This site template replicates its aesthetic and vibe, using modern tools and smooth animations to bring your own vision to life.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-950 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-6">Drop us a line or follow us on social media.</p>
        <a
          href="https://x.com/laboratory002"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-10">
        <div className="mb-2">© 2025 Lab002 Inspired Template. All rights reserved.</div>
        <div className="mt-4">
          <a
            href="https://x.com/laboratory002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition"
          >
            <X className="w-5 h-5" />
            Follow us on X
          </a>
        </div>
      </footer>
    </div>
  );
}
