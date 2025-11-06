import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition"
    >
      {children}
    </a>
  );

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition backdrop-blur ${
      scrolled ? 'bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400 p-2">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white">
              Muhammad Dekananda
            </span>
          </a>

          <nav className="hidden md:flex items-center">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col rounded-lg border border-white/10 bg-slate-900/70">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
