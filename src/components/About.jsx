import { motion } from 'framer-motion';
import { Code2, Server, Settings } from 'lucide-react';

const skills = [
  { icon: Code2, label: 'Frontend', items: 'React, Next.js, Vite, Tailwind, Framer Motion' },
  { icon: Server, label: 'Backend', items: 'FastAPI, Node, Postgres, MongoDB, Redis' },
  { icon: Settings, label: 'DevOps', items: 'Docker, CI/CD, Vercel, AWS, Kubernetes (basic)' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">About</h2>
          <p className="mt-2 text-slate-400">Crafting polished SaaS from idea to launch.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex items-center gap-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{s.label}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{s.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
