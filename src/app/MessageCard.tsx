'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MotionButton = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.button),
  { ssr: false }
);

export default function MessageCard() {
  const [message, setMessage] = useState('');

  return (
    <div className="your-card-styles">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="your-textarea-styles"
      />
      <MotionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="your-button-styles"
      >
        Send Message
      </MotionButton>
    </div>
  );
} 