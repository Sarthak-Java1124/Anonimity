'use client';

import { motion } from 'framer-motion';
import Starfield from "../components/Starfield";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import { useReadContract } from 'wagmi';
import { abi } from "../../dataabi.json";
import { sepolia } from 'viem/chains';

type Message = {
  messages: string;
  messageTimestamp: bigint;
};

function AllMessagesCard({ message, index }: { message: Message; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 32px #ffd70088' }}
      whileTap={{ scale: 0.98 }}
      className="w-full max-w-md rounded-xl p-6 md:p-8 relative font-poppins cursor-pointer"
      style={{
        background: "rgba(20,20,20,0.8)",
        border: "1.5px solid #ffd70022",
        boxShadow: "0 0 20px #ffd70044"
      }}
    >
      <label className="block mb-4 text-sm md:text-base font-medium" style={{ color: "#ffd700" }}>
        Hot Gossip #{index + 1}
      </label>
      <div className="w-full text-gray-300 text-lg md:text-xl font-normal rounded-lg font-poppins">
        {message.messages}
      </div>
      <div className="mt-4 text-xs text-gray-500 font-poppins">
        Timestamp: {new Date(Number(message.messageTimestamp) * 1000).toLocaleString()}
      </div>
    </motion.div>
  );
}

export default function AllMessagesPage() {
  const result = useReadContract({
    abi,
    address: '0xBF8296D39a78961e7C5AeeA217E3308eF944Bbd8',
    functionName: "getTotalMessages",
    chainId: sepolia.id
  }) as {
    data: Message[] | undefined;
    isLoading: boolean;
    error: Error | null;
  };

  return (
    <div className="relative min-h-screen w-full bg-black font-inter overflow-hidden">
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
          All Hot Gossips
        </h2>
      </motion.div>
      
      <motion.div
        className="w-full flex justify-center mt-6 md:mt-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <motion.button
          onClick={() => window.history.back()}
          className="px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-base md:text-lg transition-all duration-200 font-poppins hover:scale-105"
          style={{
            background: "#ffd700",
            color: "#181818",
            boxShadow: "0 0 20px #ffd70044"
          }}
        >
          ← Back to Home
        </motion.button>
      </motion.div>
      
      {result.isLoading && (
        <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
          <div className="text-yellow-400 font-poppins text-lg md:text-xl text-center">Loading all gossips...</div>
        </div>
      )}
      
      {result.error && (
        <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
          <div className="text-red-400 font-poppins text-lg md:text-xl text-center">Error loading gossips: {result.error.message}</div>
        </div>
      )}
      
      {!result.isLoading && !result.error && (
        <motion.div
          className="w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12 px-4 pb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        >
          {result.data?.map((message, index) => (
            <AllMessagesCard key={index} message={message} index={index} />
          ))}
        </motion.div>
      )}
      
      {!result.isLoading && !result.error && (!result.data || result.data.length === 0) && (
        <motion.div
          className="w-full flex justify-center mt-8 md:mt-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        >
          <div className="text-yellow-400 font-poppins text-lg md:text-xl text-center">
            No gossips yet!<br />
            Be the first to send a message to the chain.
          </div>
        </motion.div>
      )}
      
      <Footer />
    </div>
  );
} 