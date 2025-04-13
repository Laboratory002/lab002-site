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
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Lab002 Logo" width={40} height={40} className="object-contain" />
          <h1 className="text-xl font-bold tracking-widest">LAB002</h1>
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#features" className="hover:text-purple-400">Features</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#products" className="hover:text-purple-400">Products</a>
          <a href="#how-it-works" className="hover:text-purple-400">How It Works</a>
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
          Discover Next-Gen Commerce
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-400"
        >
          The most innovative products, designed for the future and powered by creators.
        </motion.p>
        <a href="#products" className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-xl shadow-xl">
          Shop Products
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Lightning Fast", desc: "No delays, instant loading for seamless shopping." },
            { title: "Seamless Checkout", desc: "One-click checkout with secure payment options." },
            { title: "Custom Curation", desc: "AI-powered suggestions tailored to your taste." },
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

      {/* Product Grid */}
      <section id="products" className="bg-black py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Products</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((num) => (
            <div key={num} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-600 transition">
              <Image src={`/product-${num}.jpg`} alt={`Product ${num}`} width={600} height={400} className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">Product Name {num}</h3>
                <p className="text-sm text-gray-400 mb-4">High-performance gear built for creators, athletes, and dreamers alike.</p>
                <a href="#" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm">
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-black py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
        <div className="max-w-5xl mx-auto space-y-8 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">1. Discover</h3>
            <p className="text-gray-400">Explore a curated collection of cutting-edge products built for modern lifestyles.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">2. Customize</h3>
            <p className="text-gray-400">Select styles, colors, or bundles to match your preferences.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">3. Checkout</h3>
            <p className="text-gray-400">A secure and quick checkout experience lets you finalize your purchase in seconds.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-950 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
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
