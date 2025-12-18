'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [activeNav, setActiveNav] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A full-stack web application built with Next.js and TypeScript',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'E-commerce platform with real-time features',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Mobile-first responsive design showcase',
      tags: ['Next.js', 'Tailwind CSS', 'Responsive Design'],
      link: '#',
    },
  ]

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Figma'],
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold gradient-blue">JN</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveNav(item.id)}
                  className={`transition-colors duration-300 ${
                    activeNav === item.id
                      ? 'text-blue-500'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-slate-100">
            Hi, I'm <span className="gradient-blue">Jekson Nababan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 mb-8">
            Full Stack Developer | Web Designer | Problem Solver
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional, and user-friendly web applications using modern technologies like Next.js, React, and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="btn-blue px-8 py-3 text-lg">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary px-8 py-3 text-lg">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                I'm a passionate full-stack developer with a keen interest in building modern web applications. With expertise in React, Next.js, and Node.js, I deliver high-quality solutions that solve real-world problems.
              </p>
              <p className="text-slate-400 mb-4 leading-relaxed">
                I love learning new technologies, collaborating with teams, and contributing to open-source projects. When I'm not coding, you'll find me exploring new frameworks or writing about web development.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-blue-500">Quick Facts</h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">→</span> Location: Your City, Country
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">→</span> Experience: 2+ Years
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">→</span> Email: your.email@example.com
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">→</span> GitHub: @Jekson16
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="card-dark group"
              >
                <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-4 group-hover:shadow-blue-lg transition-all"></div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="card-dark">
                <h3 className="text-xl font-bold mb-6 text-blue-500">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-400 mb-12">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:your.email@example.com" className="btn-blue px-8 py-3">
              Send Email
            </a>
            <a
              href="https://github.com/Jekson16"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3"
            >
              GitHub Profile
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2025 Jekson Nababan. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
