// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function App() {
  const projects = [
    { title: "SaleBuddy Web", img: "salebuddy.png", desc: "E-Commerce website for sale and buy laptops and mobile" },
    { title: "Portfolio", img: "portfolio.PNG", desc: "This is portfolio site" },
    { title: "E-commerce UI", img: "quickcom.PNG", desc: "Quickcom websites for all kitchen product like Groceries,furniture and other" },
    { title: "Dashboard", img: "dashboard.PNG", desc: "Analytics dashboard & charts" },
    { title: "Food Page", img: "food.PNG", desc: "Food Entry page  " },
    { title: "Supply", img: "supply.PNG", desc: "Admin CRUD & RBAC" },
  ];

  const services = [
    { title: "Frontend Development", desc: "React / Next.js, component-driven UIs, accessibility." },
    { title: "Performance Optimization", desc: "Code-splitting, image optimization, lighthouse improvements." },
    { title: "UI/UX & Prototyping", desc: "Pixel-perfect UIs, responsive layouts, Framer Motion interactions." },
    { title: "Backend Development", desc: "Node / Express.js, Event driven , handled database with Mysql and mongodb." },
    { title: "Others", desc: "Deployement of the frontend project on vercel / netilfy and suffient knowledge of git/github like upload the  code on github." },

  ];

  const skills = ["HTML5", "CSS3", "Tailwind", "JavaScript", "TypeScript", "React", "Next.js", "Express js", "Node.js", "Git", "Github", "vercel", "netlify", "mysql", "mongodb", "bootstrap", "Material UI", "C Language"];

  const experience = [
    { role: "MERN Developer (Intern)", company: "Numeric Inforsystem Pvt Ltd", period: "2024 — Present", bullets: ["Work on MERN Stack Technoligy", "Worked on User-Interface"] },
  ];

  const education = [
    { degree: "B.Tech (Computer Science)", school: "Shri Rawatpura Sarkar Institute & Technology Science Datia M.P.", period: "2022 — 2026" },
  ];

  const testimonials = [
    { name: "Amit Patel", text: "Pradeep delivered a polished frontend and stayed communicative throughout." },
    { name: "Sneha Verma", text: "Great attention to detail — animations and responsiveness were top-notch." },
  ];

  const achievements = [
    "Certificate: C programming Language",
    
  ];

  return (
    <div className="bg-black text-white font-sans leading-relaxed">
      {/* NAV */}
      <header className="fixed w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            PRADEEP KUSHWAH<span className="text-pink-500">.</span>
          </a>
          <nav className="hidden md:flex gap-6 text-gray-300">
            <a href="#projects" className="hover:text-pink-400">Projects</a>
            <a href="#services" className="hover:text-pink-400">Services</a>
            <a href="#experience" className="hover:text-pink-400">Experience</a>
            <a href="#testimonials" className="hover:text-pink-400">Testimonials</a>
 <a href="/freelance" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
        Freelancer
      </a>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
            <a href="pradeep resume.pdf" className="ml-4 inline-flex items-center gap-2 bg-pink-600 px-3 py-2 rounded-xl hover:bg-pink-500">
              <FaDownload /> Resume
            </a>
          </nav>
          <div className="md:hidden text-gray-300">☰</div>
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="pt-20">
        <section className="min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.5 }}>
              <p className="text-pink-400 text-sm uppercase tracking-wider">MERN Developer</p>
              <h1 className="text-4xl md:text-6xl font-extrabold mt-3">
                Hi, I’m <span className="text-pink-500">Pradeep</span> — I craft modern web apps.
              </h1>
              <p className="mt-4 text-gray-300 max-w-xl">
                Specialized in React, Next.js and Tailwind and Node etc. I build responsive, high-performance user interfaces with attention to accessibility and delightful interactions.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className="bg-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-500">View Work</a>
                <a href="#contact" className="px-6 py-3 rounded-xl border border-white/10 hover:border-pink-500">Contact</a>
              </div>
              <div className="mt-6 flex gap-4 text-lg text-gray-300">
                <a href="https://github.com/pradeepkushwah24" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pradeep-kushwah-112455255/" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaLinkedin /></a>
                <a href="pradeepkushwah0606@gmail.com" className="hover:text-pink-400"><FaEnvelope /></a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <div className="absolute -inset-6 -z-10 blur-2xl bg-gradient-to-tr from-pink-600/30 to-fuchsia-500/20 rounded-full" />
              <img src="profile1.jpeg" alt="profile" className="w-full rounded-3xl shadow-[0_0_60px_rgba(236,72,153,0.35)] object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 initial="hidden" animate="show" variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">Featured Projects</motion.h2>
            <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }} className="mt-8 grid md:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <article key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
                    <div className="mt-4 flex gap-2 text-xs text-gray-400">
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">React</span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Tailwind</span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">HTML</span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">Node </span>
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10">mysql</span>

                    </div>
                    <div className="mt-4 flex gap-3">
                      <a className="text-sm text-pink-400 hover:underline" href="https://github.com/pradeepkushwah24">Live :</a>
                      <a className="text-sm text-gray-300 hover:underline" href="https://github.com/pradeepkushwah24">Source</a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 initial="hidden" animate="show" variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">Services</motion.h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div key={i} initial="hidden" animate="show" variants={fadeUp} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-gray-300 text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 initial="hidden" animate="show" variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">Skills</motion.h2>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((s, i) => (
                <motion.div key={i} initial="hidden" animate="show" variants={fadeUp} className="bg-white/5 rounded-xl p-4 text-center">
                  {s}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section id="experience" className="py-20 border-t border-white/10 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 initial="hidden" animate="show" variants={fadeUp} className="text-3xl md:text-4xl font-extrabold">Experience & Education</motion.h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  {experience.map((e, i) => (
                    <motion.div key={i} initial="hidden" animate="show" variants={fadeUp} className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold">{e.role}</div>
                          <div className="text-sm text-gray-400">{e.company}</div>
                        </div>
                        <div className="text-sm text-gray-400">{e.period}</div>
                      </div>
                      <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
                        {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  {education.map((ed, i) => (
                    <motion.div key={i} initial="hidden" animate="show" variants={fadeUp} className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="font-semibold">{ed.degree}</div>
                      <div className="text-sm text-gray-400">{ed.school} • {ed.period}</div>
                    </motion.div>
                  ))}
                </div>

              
               
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <motion.h2 initial="hidden" animate="show" variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-center">What people say</motion.h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <motion.blockquote key={i} initial="hidden" animate="show" variants={fadeUp} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-gray-300">“{t.text}”</p>
                  <cite className="block mt-4 font-semibold">— {t.name}</cite>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>
      


        {/* CONTACT */}
        <section id="contact" className="py-20 border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold">Get in touch</h2>
              <p className="mt-3 text-gray-300">Interested in working together? Send a short summary about yourself and I'll reply soon.</p>

              <div className="mt-6 space-y-4 text-gray-300">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-pink-400" />
                  <a href="pradeepkushwah0606@gmail.com" className="hover:text-pink-400">pradeepkushwah0606@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-pink-400" />
                  <a href="tel:+917610655232" className="hover:text-pink-400">+91 7610655232</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-pink-400" />
                  <p>Gwalior, Madhya Pradesh, India</p>
                </div>
              </div>

              <div className="mt-6 flex gap-4 text-lg">
                <a href="https://github.com/pradeepkushwah24" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pradeep-kushwah-112455255/" target="_blank" rel="noreferrer" className="hover:text-pink-400"><FaLinkedin /></a>
              </div>

              <div className="mt-6">
                <a href="pradeep resume.pdf" className="inline-flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-xl hover:bg-pink-500">
                  <FaDownload /> Download Resume
                </a>
              </div>
            </motion.div>

            <motion.form initial="hidden" animate="show" variants={fadeUp} className="glass rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur grid gap-4">
              <input className="rounded-xl px-4 py-3 border border-white/10 bg-black/40" placeholder="Your name" required />
              <input type="email" required className="rounded-xl px-4 py-3 border border-white/10 bg-black/40" placeholder="Email" />
              {/* Summary about yourself */}
              <textarea rows="3" required className="rounded-xl px-4 py-3 border border-white/10 bg-black/40" placeholder="Short summary about yourself (experience, role, what you're looking for)"></textarea>
              {/* Message */}
              <textarea rows="4" required className="rounded-xl px-4 py-3 border border-white/10 bg-black/40" placeholder="Message (details, links)"></textarea>
              <button type="submit" className="rounded-xl bg-pink-600 hover:bg-pink-500 px-5 py-3 font-semibold">Send Message</button>
            </motion.form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-8 text-center text-gray-400">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>© {new Date().getFullYear()} Pradeep Kushwah</div>
              <div className="text-sm text-gray-400">Built with React · Tailwind · Framer Motion</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
