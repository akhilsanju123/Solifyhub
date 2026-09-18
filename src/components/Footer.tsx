import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { navItems, services, contact } from '../data';

export default function Footer() {
  return (
    <footer className="relative bg-ink2 border-t border-paper/10 pt-20 pb-8 px-5 md:px-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-[1600px]">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 text-lg text-paper/60 max-w-sm">Creative Ideas. Digital Impact.</p>
            <p className="mt-3 text-sm text-paper/40 max-w-sm">A creative agency turning business ideas into something people can see, understand, remember and act on.</p>
            <div className="mt-8">
              <Logo showText={false} className="scale-[2.5] origin-left opacity-30" />
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/solifyhub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/profile.php?id=61593760515445" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.linkedin.com/in/solifysrinivasa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-paper/10 flex items-center justify-center hover:border-brand-500 hover:text-brand-600 transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs text-paper/40 uppercase tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-paper/70 hover:text-brand-600 transition-colors text-sm">Home</Link></li>
              {navItems.map((item) => {
                const path = item === 'Journal' ? '/blog' : `/${item.toLowerCase().replace(' ', '-')}`;
                return <li key={item}><Link to={path} className="text-paper/70 hover:text-brand-600 transition-colors text-sm">{item}</Link></li>;
              })}
              <li><Link to="/contact" className="text-paper/70 hover:text-brand-600 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs text-paper/40 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-paper/70 hover:text-brand-600 transition-colors text-sm">{s.title}</Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs text-paper/40 uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-paper/70">
              <li><a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-start gap-2 hover:text-brand-600 transition-colors"><Phone size={16} className="mt-0.5 shrink-0" /> {contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} className="flex items-start gap-2 hover:text-brand-600 transition-colors break-all"><Mail size={16} className="mt-0.5 shrink-0" /> {contact.email}</a></li>
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> <span>Visakhapatnam, AP</span></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-paper/10">
          <p className="text-xs text-paper/40 font-mono">© 2026 SolifyHub. All Rights Reserved.</p>
          <p className="text-xs text-paper/40 font-mono">Creative Agency / Digital Marketing</p>
        </div>
      </div>
    </footer>
  );
}
