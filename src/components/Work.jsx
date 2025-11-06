import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NovaCRM',
    tag: 'B2B SaaS',
    desc: 'Customer lifecycle platform with real-time analytics and Stripe billing integration.',
    link: '#',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'LaunchKit',
    tag: 'DevTools',
    desc: 'CI/CD orchestration dashboard with serverless deploy previews and RBAC.',
    link: '#',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Insightly AI',
    tag: 'Analytics',
    desc: 'Events pipeline and feature flags powering ML‑driven insights at scale.',
    link: '#',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Selected Work</h2>
          <p className="mt-2 text-slate-400">A few highlights from recent SaaS builds.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
            >
              <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${p.gradient} opacity-30 blur-2xl`} />
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center rounded bg-white/10 px-2 py-0.5">{p.tag}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300">
                Visit <ExternalLink className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
