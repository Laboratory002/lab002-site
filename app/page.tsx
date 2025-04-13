"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function Lab002Template() {
  useEffect(() => {
    document.title = "Lab002 Inspired Site";
  }, []);

  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur flex justify-between items-center px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Lab002 Logo" width={36} height={36} className="object-contain" />
          <span className="text-lg font-semibold tracking-wide">LAB002</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-purple-400 transition">Learn</a>
          <a href="#" className="hover:text-purple-400 transition">Explore</a>
          <a href="#" className="hover:text-purple-400 transition">FAQ</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-black via-zinc-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Welcome to Lab002
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-4"
        >
          Redefining how creators, developers, and innovators launch, grow, and connect in the digital world.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-xl text-base md:text-lg text-gray-500 italic mb-10"
        >
          "Build bold. Create fast. Scale infinitely. Lab002 is where the future gets launched."
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#about-lab002"
          className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-200 transition"
        >
          Start Exploring
        </motion.a>
      </section>

      {/* About Lab002 Section */}
      <section id="about-lab002" className="py-28 px-6 bg-black border-t border-white/10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What is Lab002?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Lab002 is a new kind of platform for builders and creators who want to launch the future. Whether you're building tools, launching a project, or connecting with a community, Lab002 provides the infrastructure, support, and exposure to help you scale from zero to everywhere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Modular by Default",
                desc: "Start with just what you need. Add complexity only when you're ready."
              },
              {
                title: "Made for Speed",
                desc: "Fast deploys, minimal friction, and tools optimized for execution."
              },
              {
                title: "Community-Enabled",
                desc: "Access knowledge, feedback, and network effects from other builders."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900 border border-white/10 p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Why Lab002?</h2>
            <p className="text-gray-400">
              Lab002 is built to simplify complexity and amplify creativity. Whether you're building apps, brands, or communities — our tools let you do more with less.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {["Intuitive Tools", "Secure by Design", "Modular Systems", "Creator First"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-lg bg-zinc-900 border border-white/10 text-center"
              >
                <p className="font-medium text-sm text-white mb-1">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 text-sm border-t border-white/10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          © 2025 Lab002. All rights reserved.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          href="https://x.com/laboratory002"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded-xl transition hover:bg-zinc-200"
        >
          <X className="w-5 h-5" />
          Follow us on X
        </motion.a>
      </footer>
    </main>
  );
}
