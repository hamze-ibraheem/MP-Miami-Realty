import { motion } from 'motion/react';

export default function FloatingPromoButton() {
  return (
    <motion.a
      href="https://auroraadv.co/?tab=wizard"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex flex-col items-center justify-center w-32 h-32 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-shadow p-3 text-center border-4 border-[#0D0F12]"
    >
      <span className="text-xs font-bold leading-tight mb-1 uppercase tracking-tighter">
        Get this website for only
      </span>
      <span className="text-2xl font-black font-serif italic">$999</span>
    </motion.a>
  );
}
