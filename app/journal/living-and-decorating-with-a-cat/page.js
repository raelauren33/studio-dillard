import Link from 'next/link';

export const metadata = {
  title: 'Living & Decorating With A Cat | Studio Dillard',
  description: 'Five tips for creating a stylish, cat-friendly home.',
};

const tips = [
  {
    number: 'One',
    title: 'Bypass The Fabrics Cats Love To Destroy',
    body: 'Avoid loose-knit fabrics like bouclé, chenille, and linen that snag easily. Instead, choose tightly woven materials, durable upholstery, or performance fabrics such as canvas and microfiber for easier maintenance.',
  },
  {
    number: 'Two',
    title: 'Get Plenty of Cat Scratchers',
    body: 'Provide multiple scratchers throughout the home near furniture items that need protection. Look for stylish options like sisal art scratchers, corner scratchers, and canvas designs that blend into your space rather than clashing with it.',
  },
  {
    number: 'Three',
    title: 'Go Vertical',
    body: 'Choose pet-safe plants like spider plants and Boston ferns for floor level. Use hanging planters, wall-mounted brackets, and high shelves to keep non-cat-safe plants out of reach of curious pets.',
  },
  {
    number: 'Four',
    title: 'Anchor Everything',
    body: 'Secure bookshelves to walls and use museum gel for breakables. This prevents wobbling, tipping, or falling objects that could injure your cat or damage your home.',
  },
  {
    number: 'Five',
    title: 'Use Aluminum Foil As A Training Tool',
    body: 'Cover areas temporarily with aluminum foil as a deterrent — most cats dislike the crinkly sound, the shiny surface, and the unpredictable texture. This gentle training method reinforces boundaries without harsh methods.',
  },
];

export default function LivingWithACat() {
  return (
    <main className="bg-[#F5F0E8] min-h-screen">

      {/* Nav */}
      <nav className="bg-[#F5F0E8]">
        <div className="flex justify-between items-center px-10 py-6">
          <Link href="/" className="font-[family-name:var(--font-cormorant)] text-xl tracking-[0.2em] uppercase text-[#3D2E1E]">
            Studio Dillard
          </Link>
          <div className="flex gap-10">
            {['Projects', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-xs tracking-[0.2em] uppercase text-[#3D2E1E] hover:text-[#C17A50] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="w-full h-[60vh] overflow-hidden">
        <img
          src="/images/cat-header.jpg"
          alt="Furlough lounging at home"
          className="w-full h-full object-cover object-[center_65%]"
        />
      </div>

      {/* Article Header */}
      <header className="px-10 pt-16 pb-12 max-w-3xl">
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase text-[#C17A50] hover:text-[#3D2E1E] transition-colors duration-200 mb-10 block"
        >
          ← Journal
        </Link>
        <h1 className="font-[family-name:var(--font-cormorant)] text-6xl text-[#3D2E1E] font-light leading-tight mb-6">
          Living & Decorating<br />With A Cat
        </h1>
        <p className="text-[#8B7355] text-sm tracking-widest uppercase">By Rachel Dillard · Studio Dillard</p>
      </header>

      {/* Intro */}
      <section className="px-10 pb-16 max-w-3xl">
        <p className="text-[#3D2E1E] text-lg leading-relaxed">
          In college, my roommate and I once spent an entire afternoon color-matching a couch to hide cat scratch marks. That was the moment I decided there had to be a better way — furniture that could actually withstand cat ownership without sacrificing style. It took some trial and error, but I eventually found the strategies that made it work.
        </p>
      </section>

      {/* Furlough photos */}
      <section className="px-10 pb-20 flex gap-6 max-w-3xl">
        <div className="flex-1">
          <img
            src="/images/cat-article-1.png"
            alt="Furlough"
            className="w-full object-cover bg-[#F5F0E8]"
          />
        </div>
        <div className="flex-1">
          <img
            src="/images/cat-article-2.png"
            alt="Furlough in a box"
            className="w-full object-cover bg-[#F5F0E8]"
          />
        </div>
      </section>
      <section className="px-10 pb-16 max-w-3xl">
        <p className="font-[family-name:var(--font-cormorant)] text-xl italic text-[#8B7355]">
          Furlough — the CEO and inspiration behind this post.
        </p>
      </section>

      {/* Tips */}
      <section className="px-10 pb-28 max-w-3xl">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#3D2E1E] font-light mb-14">
          Five Tips for Cat-Friendly Decorating
        </h2>
        <div className="flex flex-col gap-14">
          {tips.map((tip) => (
            <div key={tip.number} className="border-t border-[#D4C4B0] pt-10">
              <p className="text-xs tracking-[0.3em] uppercase text-[#C17A50] mb-3">Tip {tip.number}</p>
              <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#3D2E1E] font-light mb-4">
                {tip.title}
              </h3>
              <p className="text-[#3D2E1E] leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D2E1E] py-20 px-10">
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
              href="https://www.pinterest.com/StudioDillard/"
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
