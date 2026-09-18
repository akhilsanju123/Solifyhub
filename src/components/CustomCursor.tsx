import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [variant, setVariant] = useState<'default' | 'hover' | 'view' | 'explore' | 'click'>('default');
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { damping: 30, stiffness: 200, mass: 0.5 });
  const ry = useSpring(y, { damping: 30, stiffness: 200, mass: 0.5 });
  const sx = useSpring(x, { damping: 25, stiffness: 350 });
  const sy = useSpring(y, { damping: 25, stiffness: 350 });

  useEffect(() => {
    if (window.matchMedia('(max-width: 1023px)').matches) return;
    setVisible(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      if (el.closest('[data-cursor="view"]')) setVariant('view');
      else if (el.closest('[data-cursor="explore"]')) setVariant('explore');
      else if (el.closest('[data-cursor="hover"], a, button, input, textarea, select, label')) setVariant('hover');
      else setVariant('default');
    };

    const down = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('button, a, [data-cursor="hover"], [data-cursor="view"], [data-cursor="explore"]')) {
        setVariant('click');
      }
    };

    const up = () => {
      const el = document.elementFromPoint(x.get(), y.get()) as HTMLElement;
      if (!el) { setVariant('default'); return; }
      if (el.closest('[data-cursor="view"]')) setVariant('view');
      else if (el.closest('[data-cursor="explore"]')) setVariant('explore');
      else if (el.closest('[data-cursor="hover"], a, button, input, textarea, select, label')) setVariant('hover');
      else setVariant('default');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [x, y]);

  if (!visible) return null;

  const labels: Record<string, string> = { view: 'VIEW', explore: 'EXPLORE', click: 'CLICK' };
  const dotSizes: Record<string, number> = { default: 10, hover: 14, view: 14, explore: 14, click: 18 };
  const ringSizes: Record<string, number> = { default: 40, hover: 56, view: 90, explore: 90, click: 70 };

  return (
    <>
      <motion.div
        style={{ x: rx, y: ry, zIndex: 99999 }}
        className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ width: ringSizes[variant], height: ringSizes[variant] }}
          transition={{ type: 'spring', damping: 18, stiffness: 250 }}
          className={`rounded-full border-2 flex items-center justify-center font-mono text-[10px] tracking-widest transition-colors ${
            variant === 'click'
              ? 'border-brand-600 bg-brand-500/15'
              : variant === 'default'
                ? 'border-brand-500/50 bg-transparent'
                : 'border-brand-500 bg-brand-50/60 backdrop-blur-sm'
          }`}
        >
          {labels[variant] && (
            <span className="text-brand-600">{labels[variant]}</span>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: sx, y: sy, zIndex: 100000 }}
        className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ width: dotSizes[variant], height: dotSizes[variant] }}
          transition={{ type: 'spring', damping: 20, stiffness: 400 }}
          className={`rounded-full transition-colors ${
            variant === 'click'
              ? 'brand-gradient'
              : variant === 'default'
                ? 'bg-brand-600'
                : 'bg-brand-500'
          }`}
        />
      </motion.div>
    </>
  );
}
