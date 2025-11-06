import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Building immaculate SaaS experiences
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">with precision and play</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-2xl text-slate-300"
        >
          I’m Muhammad Dekananda — full‑stack developer crafting modern, performant SaaS products end‑to‑end. From concept to cloud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/10 transition hover:scale-[1.02]"
          >
            View selected work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Start a project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
