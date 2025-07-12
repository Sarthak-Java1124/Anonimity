'use client';

import dynamic from 'next/dynamic';

const MotionButton = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.button),
  { ssr: false }
);

import NavBar from "./components/NavBar";
import Starfield from "./components/Starfield";
import Intro from "./components/Intro";
import SendMessageToChain from './components/SendMessageToChain';
import GossipSection from './components/GossipSection';
import Footer from './components/Footer';
import Head from "next/head";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black font-inter overflow-hidden">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
        <title>Arcium Hero</title>
      </Head>
      {/* Starfield background covering the whole screen */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Starfield />
      </div>
      
      <Intro />
      {/* Title below Intro */}
      <motion.div
        className="w-full flex justify-center mt-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="font-poppins text-6xl md:text-7xl text-white font-normal drop-shadow-[0_0_12px_#fffde4,0_0_4px_#fffde4]">Send Messages To The Chain</h2>
      </motion.div>
      {/* Large card with textarea and send button */}
      <motion.div
        className="mt-20 w-full flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <SendMessageToChain />
      </motion.div>
      {/* Gossip Section */}
      <GossipSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
