"use client"

import React from "react";
import { motion } from "framer-motion";
import { MdSecurity, MdAccessTime, MdStorage } from "react-icons/md";

const AboutUs = () => {
  return (
    <motion.section
      className="relative w-full py-20 px-4 z-10 font-poppins"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-6xl font-poppins text-white font-normal mb-6 drop-shadow-[0_0_12px_#fffde4]">
            About <span className="italic text-blue-300">Anonimity</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-poppins">
                Welcome to <span className="text-blue-300 font-semibold">Anonimity</span>, the revolutionary blockchain-powered messaging platform where your secrets find their eternal home on the blockchain.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-poppins">
                Created by <span className="text-yellow-300 font-semibold">Sarthak Harsh</span>, this platform offers a unique space where you can share your deepest thoughts, secrets, and confessions with complete anonymity while ensuring they&apos;re permanently preserved on the blockchain.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-poppins">
                Every message you send is cryptographically secured, timestamped, and immutably stored on the blockchain, creating a permanent record of your anonymous revelations that will exist forever.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MdSecurity className="text-blue-400 text-2xl" />
                <span className="text-white font-medium font-poppins">Complete Anonymity</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdStorage className="text-green-400 text-2xl" />
                <span className="text-white font-medium font-poppins">Immutable Blockchain Storage</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdAccessTime className="text-purple-400 text-2xl" />
                <span className="text-white font-medium font-poppins">Permanent Timestamps</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-2xl font-poppins text-white font-medium">
                  Your Secrets, Forever Preserved
                </h3>
                <p className="text-gray-300 text-sm max-w-xs font-poppins">
                  Every message becomes a permanent part of blockchain history
                </p>
              </div>
              
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-blue-400 rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute top-8 right-6 w-2 h-2 bg-purple-400 rounded-full"
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute bottom-6 left-8 w-2 h-2 bg-green-400 rounded-full"
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.4, 0.9, 0.4]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs; 