"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { MdMessage, MdCreate, MdVisibility } from "react-icons/md";

const Intro = () => {
  return (
    <div className="relative min-h-screen w-full font-inter overflow-hidden">
      <motion.div
        className="absolute top-4 right-4 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative w-[200px] h-[80px] md:w-[250px] md:h-[100px] lg:w-[300px] lg:h-[120px]">
          <Image
            src="/logoImage.png"
            alt="Anonimity Logo"
            fill
            className="object-contain drop-shadow-[0_0_32px_#fffde4] rounded-lg"
            priority
          />
        </div>
      </motion.div>
  
      <motion.div
        className="absolute top-16 md:top-24 left-4 md:left-10 z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <h1 className="text-white text-[clamp(1.2rem,3vw,4rem)] font-normal font-poppins leading-none">
          <span className="inline-block hover:text-red-300 transition-colors duration-300">W</span>
          <span className="inline-block hover:text-orange-300 transition-colors duration-300">r</span>
          <span className="inline-block hover:text-yellow-300 transition-colors duration-300">i</span>
          <span className="inline-block hover:text-green-300 transition-colors duration-300">t</span>
          <span className="inline-block hover:text-blue-300 transition-colors duration-300">e</span>
          <br />
          <span className="inline-block hover:text-purple-300 transition-colors duration-300">G</span>
          <span className="inline-block hover:text-pink-300 transition-colors duration-300">o</span>
          <span className="inline-block hover:text-cyan-300 transition-colors duration-300">s</span>
          <span className="inline-block hover:text-emerald-300 transition-colors duration-300">s</span>
          <span className="inline-block hover:text-violet-300 transition-colors duration-300">i</span>
          <span className="inline-block hover:text-rose-300 transition-colors duration-300">p</span>
          <span className="inline-block hover:text-lime-300 transition-colors duration-300">s</span>
          <span className="inline-block hover:text-amber-300 transition-colors duration-300">.</span>
        </h1>
        <motion.div
          className="mt-2 md:mt-4 flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <MdCreate className="text-white text-2xl md:text-3xl lg:text-5xl drop-shadow-[0_0_16px_#fffde4]" />
        </motion.div>
      </motion.div>
  
      <motion.div
        className="absolute bottom-16 md:bottom-24 right-4 md:right-10 z-10 text-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <h1 className="text-white text-[clamp(1.2rem,3vw,4rem)] font-normal font-poppins leading-none">
          <span className="inline-block hover:text-teal-300 transition-colors duration-300">R</span>
          <span className="inline-block hover:text-sky-300 transition-colors duration-300">e</span>
          <span className="inline-block hover:text-indigo-300 transition-colors duration-300">a</span>
          <span className="inline-block hover:text-fuchsia-300 transition-colors duration-300">d</span>
          <br />
          <span className="inline-block hover:text-red-400 transition-colors duration-300">G</span>
          <span className="inline-block hover:text-orange-400 transition-colors duration-300">o</span>
          <span className="inline-block hover:text-yellow-400 transition-colors duration-300">s</span>
          <span className="inline-block hover:text-green-400 transition-colors duration-300">s</span>
          <span className="inline-block hover:text-blue-400 transition-colors duration-300">i</span>
          <span className="inline-block hover:text-purple-400 transition-colors duration-300">p</span>
          <span className="inline-block hover:text-pink-400 transition-colors duration-300">s</span>
          <span className="inline-block hover:text-cyan-400 transition-colors duration-300">.</span>
        </h1>
        <motion.div
          className="mt-2 md:mt-4 flex justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <MdVisibility className="text-white text-2xl md:text-3xl lg:text-5xl drop-shadow-[0_0_16px_#fffde4]" />
        </motion.div>
      </motion.div>
  
      <motion.div
        className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 text-center px-4"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <span className="block text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-normal font-poppins text-white">
          <span className="inline-block hover:text-blue-300 transition-colors duration-300">O</span>
          <span className="inline-block hover:text-green-300 transition-colors duration-300">n</span>
          <span className="inline-block"> </span>
          <span className="inline-block italic text-blue-300 hover:text-purple-300 transition-colors duration-300">C</span>
          <span className="inline-block italic text-blue-300 hover:text-pink-300 transition-colors duration-300">h</span>
          <span className="inline-block italic text-blue-300 hover:text-yellow-300 transition-colors duration-300">a</span>
          <span className="inline-block italic text-blue-300 hover:text-red-300 transition-colors duration-300">i</span>
          <span className="inline-block italic text-blue-300 hover:text-indigo-300 transition-colors duration-300">n</span>
        </span>
        <span className="block text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-normal font-poppins text-white">
          <span className="inline-block hover:text-cyan-300 transition-colors duration-300">a</span>
          <span className="inline-block hover:text-emerald-300 transition-colors duration-300">n</span>
          <span className="inline-block hover:text-violet-300 transition-colors duration-300">d</span>
          <span className="inline-block"> </span>
          <span className="inline-block hover:text-rose-300 transition-colors duration-300">A</span>
          <span className="inline-block hover:text-orange-300 transition-colors duration-300">n</span>
          <span className="inline-block hover:text-teal-300 transition-colors duration-300">o</span>
          <span className="inline-block hover:text-fuchsia-300 transition-colors duration-300">n</span>
          <span className="inline-block hover:text-lime-300 transition-colors duration-300">y</span>
          <span className="inline-block hover:text-amber-300 transition-colors duration-300">m</span>
          <span className="inline-block hover:text-sky-300 transition-colors duration-300">o</span>
          <span className="inline-block hover:text-pink-300 transition-colors duration-300">u</span>
          <span className="inline-block hover:text-cyan-300 transition-colors duration-300">s</span>
        </span>
        <motion.div
          className="mt-4 md:mt-6 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <MdMessage className="text-white text-3xl md:text-4xl lg:text-6xl drop-shadow-[0_0_16px_#fffde4]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Intro; 