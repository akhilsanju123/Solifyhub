import { motion } from 'framer-motion';

const logoPath = '/images/files_11839245-2026-09-17T07-08-41-916Z-22eae948-eccb-498a-8777-8e474a2d4d59.webp';

export default function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  if (showText) {
    return (
      <motion.img
        src={logoPath}
        alt="SolifyHub logo"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`h-12 w-auto max-w-[200px] object-contain drop-shadow-[0_2px_12px_rgba(37,132,255,0.15)] ${className}`}
      />
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: -5 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`relative h-10 w-10 shrink-0 overflow-hidden drop-shadow-[0_2px_12px_rgba(37,132,255,0.2)] ${className}`}
    >
      <img
        src={logoPath}
        alt="SolifyHub infinity logo"
        className="absolute left-0 top-1/2 h-auto w-[110px] max-w-none -translate-y-1/2 object-contain"
      />
    </motion.div>
  );
}
