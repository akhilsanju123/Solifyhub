import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Check, Loader2, ArrowUpRight } from 'lucide-react';
import { Reveal, WordsReveal, PageWrap } from '../components/anim';
import { contact, services } from '../data';

const budgets = ['Below ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000+'];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!(data.get('name') as string)?.trim()) errs.name = 'Name is required';
    if (!(data.get('email') as string)?.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get('email') as string)) errs.email = 'Enter a valid email';
    if (!(data.get('phone') as string)?.trim()) errs.phone = 'Phone is required';
    if (!(data.get('message') as string)?.trim()) errs.message = 'Message is required';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <PageWrap>
      <section className="pt-32 pb-12 px-5 md:px-10 relative">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-500/15 blur-[130px] pointer-events-none" />
        <div className="relative mx-auto max-w-[1600px]">
          <Reveal><span className="font-mono text-xs text-brand-600 uppercase tracking-widest">/ Contact</span></Reveal>
          <h1 className="font-display text-5xl md:text-8xl mt-6 leading-[0.9] tracking-tight">
            <WordsReveal text="Let's create something memorable." />
          </h1>
          <Reveal delay={0.2} className="mt-10 rounded-3xl overflow-hidden">
            <img src="https://images.pexels.com/photos/6592690/pexels-photo-6592690.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Get in touch" className="w-full h-[40vh] md:h-[50vh] object-cover hover:scale-105 transition-transform duration-700" />
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-10 pb-20">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-8">
            <Reveal>
              <div className="p-8 rounded-2xl border border-paper/10 hover:border-brand-400/30 transition-colors">
                <h3 className="font-mono text-xs text-brand-600 uppercase tracking-wider mb-4">Get in touch</h3>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 text-lg hover:text-brand-600 transition-colors group">
                  <Phone size={20} className="text-brand-600" /> {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-lg mt-4 hover:text-brand-600 transition-colors break-all">
                  <Mail size={20} className="text-brand-600" /> {contact.email}
                </a>
                <div className="flex items-start gap-4 text-lg mt-4 text-paper/70">
                  <MapPin size={20} className="text-brand-600 mt-1 shrink-0" />
                  <span>{contact.address}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-8 rounded-2xl border border-paper/10">
                <h3 className="font-mono text-xs text-brand-600 uppercase tracking-wider mb-4">Follow us</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/solifyhub/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-paper/10 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                  <a href="https://www.facebook.com/profile.php?id=61593760515445" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-paper/10 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                  <a href="https://www.linkedin.com/in/solifysrinivasa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-paper/10 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-paper/10 space-y-5">
              <h3 className="font-display text-2xl mb-2">Send an enquiry</h3>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" name="name" error={errors.name} placeholder="Your name" />
                <Field label="Company" name="company" placeholder="Company (optional)" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" error={errors.email} placeholder="you@email.com" />
                <Field label="Phone" name="phone" error={errors.phone} placeholder="10-digit number" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-paper/40 uppercase tracking-wider mb-2">Service</label>
                  <select name="service" className="w-full bg-ink border border-paper/10 rounded-xl px-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors">
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-paper/40 uppercase tracking-wider mb-2">Budget</label>
                  <select name="budget" className="w-full bg-ink border border-paper/10 rounded-xl px-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors">
                    <option value="">Select a range</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-paper/40 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" rows={5} placeholder="Tell us about your project" className="w-full bg-ink border border-paper/10 rounded-xl px-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors resize-none" />
                {errors.message && <p className="text-brand-600 text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full rounded-full brand-gradient text-white px-6 py-4 font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Loader2 size={20} className="animate-spin" /> Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Check size={20} /> Sent! We'll be in touch.
                    </motion.span>
                  ) : (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Send Enquiry <ArrowUpRight size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </PageWrap>
  );
}

function Field({ label, name, error, type = 'text', placeholder }: { label: string; name: string; error?: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-mono text-paper/40 uppercase tracking-wider mb-2">{label}</label>
      <input type={type} name={name} placeholder={placeholder} className="w-full bg-ink border border-paper/10 rounded-xl px-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors" />
      {error && <p className="text-brand-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
