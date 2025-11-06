import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      setStatus('Sending...');
      // For now, simulate success. Hook to backend later if needed.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! I will get back within 24 hours.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-slate-400">Ready to build your next SaaS? Let’s talk.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Name</label>
            <input name="name" required className="rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-300">Email</label>
            <input name="email" type="email" required className="rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@company.com" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-slate-300">Project details</label>
            <textarea name="message" rows={5} required className="rounded-md border border-white/10 bg-transparent px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Briefly describe your project, timeline, and budget." />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 ring-1 ring-white/10 transition hover:scale-[1.02]">Send message</button>
            <span className="text-sm text-slate-400">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
