'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="w-full mt-24 py-6 flex flex-col items-center justify-center"
      style={{ background: "rgba(20,20,20,0.85)", borderTop: "1.5px solid #ffd70022" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="w-2 h-2 rounded-full" style={{ background: "#ffd700" }}></span>
        <span className="font-poppins text-sm text-gray-400">&copy; {new Date().getFullYear()} Anonimity. All rights reserved.</span>
      </div>
      <div className="font-poppins text-xs text-gray-500">Built with Next.js & Tailwind CSS</div>
    </motion.footer>
  );
} 