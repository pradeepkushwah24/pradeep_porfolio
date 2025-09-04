import React from "react";
import { Link } from "react-router-dom";


export default function Freelance() {
  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-black text-white shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-6 py-4 gap-4">
          {/* Photo + Title */}
          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt="Pradeep Kushwah"
              className="w-10 h-10 rounded-full object-cover border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.7)]"
            />
            <h1 className="text-xl font-bold">Freelancer</h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-4 md:gap-6">
           <Link to="/" className="hover:text-pink-400">Back to Portfolio</Link>
<a href="#work" className="hover:text-pink-400">Work</a>

          </nav>
        </div>
      </header>

      {/* Freelance Page Content */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              🚀 Work <span className="text-pink-500">With Me</span>
            </h1>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              I’m available for freelance projects worldwide 🌍.  
              Let’s collaborate and bring your ideas to life!
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl w-full">
            <form className="grid gap-4">
              <input className="rounded-xl px-4 py-3 border border-white/10 bg-black/40 w-full" required placeholder="Your Name" />
              <input type="email" className="rounded-xl px-4 py-3 border border-white/10 bg-black/40 w-full" required placeholder="Email" />
              <textarea rows="4" className="rounded-xl px-4 py-3 border border-white/10 bg-black/40 w-full" required placeholder="Project Summary"></textarea>
              <button className="rounded-xl bg-pink-600 hover:bg-pink-500 px-5 py-3 font-semibold w-full md:w-auto">
                Send Request
              </button>
            </form>

            {/* New Link under form */}
            <div className="text-center mt-6">
              <a
                href="#work"
                className="text-pink-400 hover:underline font-medium"
              >
                👉 See My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            💼 My Recent <span className="text-pink-500">Work</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
              <p className="text-gray-400 text-sm mb-4">
                A modern responsive portfolio built with React & TailwindCSS.
              </p>
              <Link to="/" className="text-pink-400 hover:underline">
  View Project →
</Link>

            </div>
            {/* Project 2 */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-3">E-commerce Store</h3>
              <p className="text-gray-400 text-sm mb-4">
                A complete MERN stack store with payments integration.
              </p>
              <Link to="/" className="text-pink-400 hover:underline">  View Project →</Link>
              
            </div>
            {/* Project 3 */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition transform">
              <h3 className="text-xl font-semibold mb-3">Dashboard of Project</h3>
              <p className="text-gray-400 text-sm mb-4">
                A real-time chat app like WhatsApp using Socket.io & React.
              </p>
              <Link to="/" className="text-pink-400 hover:underline">  View Project →</Link>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>© {new Date().getFullYear()} Pradeep Kushwah</div>
            <div className="text-sm text-gray-400">
              Built with React · Tailwind · Framer Motion
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
