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
import AboutUs from './components/AboutUs';
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
      
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Starfield />
      </div>
      
      <Intro />
      
      <motion.div
        className="w-full flex justify-center mt-16 md:mt-24 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="font-poppins text-4xl md:text-6xl lg:text-7xl text-white font-normal drop-shadow-[0_0_12px_#fffde4,0_0_4px_#fffde4] text-center">
          Send Messages To The Chain
        </h2>
      </motion.div>
      
      <motion.div
        className="mt-12 md:mt-20 w-full flex justify-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <SendMessageToChain />
      </motion.div>
      
      <GossipSection />
      
      <AboutUs />
      
      <Footer />
    </div>
  );
}
