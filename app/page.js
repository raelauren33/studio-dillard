'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#F5F0E8] shadow-sm' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-10 py-6">
          <span className="font-[family-name:var(--font-cormorant)] text-xl tracking-[0.2em] uppercase text-[#3D2E1E]">
            Studio Dillard
          </span>
          <div className="flex gap-10">
            {['Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-[#3D2E1E] hover:text-[#C17A50] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen w-full flex items-end" style={{ backgroundColor: '#A89880' }}>
        {/* Replace this div with an <img> tag once you have your hero photo */}
        <div className="absolute inset-0" style={{ backgroundColor: '#A89880' }} />
        <div className="relative z-10 p-14 pb-20">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[7vw] leading-[1.1] text-[#F5F0E8] font-light">
            Intentional spaces,<br />lived in deeply.
          </h1>
          <p className="mt-6 text-[#F5F0E8] tracking-[0.3em] uppercase text-xs opacity-80">
            Portland, Maine
          </p>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-28 px-8 text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.3em] text-[#C17A50] mb-8">
          Sustainable · Stylish · Personal
        </p>
        <p className="max-w-lg mx-auto text-[#3D2E1E] leading-relaxed text-lg">
          We blend mid-century modern restraint with layered, maximalist character to create
          spaces that feel intentional, character-rich, and entirely your own.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 pb-28">
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl mb-12 text-[#3D2E1E] font-light">
          Projects
        </h2>
        <div className="flex gap-4 h-[70vh]">
          {/* Left: large */}
          <div className="flex-[1.4] relative overflow-hidden group cursor-pointer bg-[#B8955A]">
            {/* Replace bg color with your photo:
                style={{ backgroundImage: 'url(/images/living-room.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} */}
            <div className="absolute inset-0 bg-[#3D2E1E] opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8">
              <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F0E8]">Living Room</span>
            </div>
          </div>
          {/* Right: stacked */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 relative overflow-hidden group cursor-pointer bg-[#C4908A]">
              {/* Replace bg color with your photo */}
              <div className="absolute inset-0 bg-[#3D2E1E] opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6">
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F0E8]">Bedroom</span>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden group cursor-pointer bg-[#6B7C5C]">
              {/* Replace bg color with your photo */}
              <div className="absolute inset-0 bg-[#3D2E1E] opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6">
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#F5F0E8]">Office</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="grid grid-cols-2 min-h-[60vh]">
        <div className="bg-[#D4C4B0]">
          {/* Replace with: <img src="/images/about.jpg" className="w-full h-full object-cover" alt="Studio Dillard" /> */}
        </div>
        <div className="bg-[#3D2E1E] flex items-center px-16 py-20">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl text-[#F5F0E8] mb-8 font-light">
              About
            </h2>
            <p className="text-[#D4C4B0] leading-relaxed text-lg mb-10">
              Studio Dillard is an interior design studio based in Portland, Maine. We create
              spaces that are sustainable, stylish, and deeply personal — rooted in mid-century
              modern restraint with a layered, maximalist spirit.
            </p>
            <a
              href="mailto:StudioDillard@outlook.com"
              className="text-[#C17A50] text-xs tracking-[0.2em] uppercase border-b border-[#C17A50] pb-1 hover:text-[#F5F0E8] hover:border-[#F5F0E8] transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="py-28 px-8">
        <h2 className="font-[family-name:var(--font-cormorant)] text-5xl mb-16 text-[#3D2E1E] font-light">
          Journal
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {[
            {
              title: 'Lighting',
              desc: "How the right light transforms a room's entire feeling.",
              color: '#D4C4B0',
            },
            {
              title: "Finding Your Home's Style",
              desc: 'A guide to discovering the aesthetic that feels like you.',
              color: '#C4B5A0',
            },
            {
              title: 'Living & Decorating With A Cat',
              desc: 'Stylish spaces that work for both you and your pets.',
              color: '#B8A898',
              href: '/journal/living-and-decorating-with-a-cat',
            },
          ].map((article) => {
            const Card = (
              <div key={article.title} className="group cursor-pointer">
                <div
                  className="aspect-[4/3] mb-6 overflow-hidden"
                  style={{ backgroundColor: article.color }}
                >
                  {/* Replace with <img> when you have article photos */}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#3D2E1E] mb-2 group-hover:text-[#C17A50] transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-sm text-[#8B7355] leading-relaxed">{article.desc}</p>
              </div>
            );
            return article.href ? (
              <Link key={article.title} href={article.href}>{Card}</Link>
            ) : (
              <div key={article.title}>{Card}</div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#3D2E1E] py-20 px-10">
        <div className="flex justify-between items-end">
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-4xl text-[#F5F0E8] block mb-3 font-light">
              Studio Dillard
            </span>
            <p className="text-[#8B7355] text-sm tracking-widest">Portland, Maine</p>
          </div>
          <div className="text-right flex flex-col gap-3">
            <a
              href="mailto:StudioDillard@outlook.com"
              className="text-[#C17A50] text-xs tracking-[0.2em] uppercase hover:text-[#F5F0E8] transition-colors duration-200"
            >
              StudioDillard@outlook.com
            </a>
            <a
              href="https://www.pinterest.com"
              className="text-[#C17A50] text-xs tracking-[0.2em] uppercase hover:text-[#F5F0E8] transition-colors duration-200"
            >
              Pinterest
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[#5C4A35]">
          <p className="text-[#5C4A35] text-xs tracking-widest">© 2026 Studio Dillard. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
