import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2 } from 'lucide-react';
import { useEnquiry } from './EnquiryContext';
import { services } from '../data';

const budgets = ['Below ₹25,000', '₹25,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000+'];

type Errors = Record<string, string>;

export default function EnquiryModal() {
  const { isOpen, close } = useEnquiry();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [isOpen, close]);

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    const name = (data.get('name') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const service = data.get('service') as string;
    const details = (data.get('details') as string)?.trim();
    if (!name) e.name = 'Please enter your name';
    if (!phone) e.phone = 'Phone number is required';
    else if (!/^[0-9+\-\s]{10,15}$/.test(phone)) e.phone = 'Enter a valid phone number';
    if (!email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email';
    if (!service) e.service = 'Please select a service';
    if (!details) e.details = 'Tell us about your project';
    return e;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setTimeout(() => { setStatus('idle'); close(); (e.target as HTMLFormElement).reset(); }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6"
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-md" onClick={close} />
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl bg-ink2 border border-paper/10 p-6 md:p-10"
          >
            <button onClick={close} className="absolute top-5 right-5 text-paper/50 hover:text-paper" aria-label="Close">
              <X size={24} />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 12 }}
                  className="w-20 h-20 rounded-full bg-brand-500/15 flex items-center justify-center mb-6">
                  <Check size={40} className="text-brand-600" />
                </motion.div>
                <h3 className="font-display text-2xl mb-2">Thank you!</h3>
                <p className="text-paper/60">Your enquiry has been received. We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-3xl md:text-4xl mb-2">Let's build something.</h3>
                <p className="text-paper/50 mb-8 text-sm">Tell us what you're working on and we'll be in touch.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Name" name="name" error={errors.name} placeholder="Your name" />
                    <Field label="Company Name" name="company" error={errors.company} placeholder="Company (optional)" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Phone Number" name="phone" error={errors.phone} placeholder="10-digit number" />
                    <Field label="Email" name="email" type="email" error={errors.email} placeholder="you@email.com" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-paper/40 uppercase tracking-wider mb-2">Service Required</label>
                      <select name="service" className="w-full bg-ink border border-paper/10 rounded-xl px-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors">
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                      </select>
                      {errors.service && <p className="text-brand-600 text-xs mt-1">{errors.service}</p>}
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
                    <label className="block text-xs font-mono text-paper/40 uppercase tracking-wider mb-2">Project Details</label>
                    <textarea name="details" rows={4} placeholder="What are you building?" className="w-full bg-ink border border-paper/10 rounded-xl px-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors resize-none" />
                    {errors.details && <p className="text-brand-600 text-xs mt-1">{errors.details}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-full brand-gradient text-white px-6 py-4 font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === 'loading' ? (<><Loader2 size={20} className="animate-spin" /> Sending...</>) : 'Send Enquiry'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, error, type = 'text', placeholder }: { label: string; name: string; error?: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-mono text-paper/40 uppercase tracking-wider mb-2">{label}</label>
      <input
        type={type} name={name} placeholder={placeholder}
        className="w-full bg-ink border border-paper/10 rounded-xl px-4 py-3 text-paper focus:border-brand-500 outline-none transition-colors"
      />
      {error && <p className="text-brand-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
