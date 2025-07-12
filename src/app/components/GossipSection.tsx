'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useReadContract } from 'wagmi';
import { abi } from "../../dataabi.json";
import { useRouter } from 'next/navigation';
import { sepolia } from 'viem/chains';

const dummyMessages = [
  {
    author: 'Anon #1',
    message: 'Did you hear about the secret party on the blockchain? 🎉',
  },
  {
    author: 'Anon #2',
    message: 'Someone just sent 100 ETH to a mystery address... 👀',
  },
  {
    author: 'Anon #3',
    message: 'Rumor has it, a new DAO is forming in town! 🏛️',
  },
  {
    author: 'Anon #4',
    message: 'The devs are planning something big for next week. Stay tuned! 🚀',
  },
  {
    author: 'Anon #5',
    message: 'Who is the wallet behind all those meme coin buys? 🤔',
  },
];

function GossipCarousel() {
  const [current, setCurrent] = useState(0);
  const total = dummyMessages.length;
 

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
      <div className="relative w-full max-w-2xl flex items-center">
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-yellow-400/80 hover:bg-yellow-300 text-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-200 border-2 border-yellow-200/60"
          aria-label="Previous gossip"
        >
          <span className="text-2xl md:text-3xl font-bold">&#8592;</span>
        </button>
        <div className="mx-auto bg-white bg-opacity-10 backdrop-blur-2xl border border-yellow-300/30 rounded-2xl shadow-[0_8px_32px_0_rgba(255,224,102,0.25)] px-6 md:px-8 py-8 md:py-10 w-full flex flex-col items-center relative overflow-hidden min-h-[160px] md:min-h-[180px]">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-200/60 via-yellow-400/80 to-yellow-200/60 rounded-t-2xl blur-sm opacity-80 pointer-events-none" />
          <div className="text-base md:text-lg text-yellow-200 font-poppins mb-2">{dummyMessages[current].author}</div>
          <div className="text-lg md:text-2xl text-white font-poppins text-center drop-shadow-[0_0_12px_#ffe066]">{dummyMessages[current].message}</div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-yellow-400/80 hover:bg-yellow-300 text-black rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all duration-200 border-2 border-yellow-200/60"
          aria-label="Next gossip"
        >
          <span className="text-2xl md:text-3xl font-bold">&#8594;</span>
        </button>
      </div>
    </div>
  );
}

type Message = {
  messages: string;
  messageTimestamp: bigint;
};

function GossipCard({ message }: { message: Message }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: '0 0 32px #ffd70088' }}
      whileTap={{ scale: 0.97 }}
      className="w-full max-w-md rounded-xl p-6 md:p-8 relative font-poppins cursor-pointer"
      style={{
        background: "rgba(20,20,20,0.8)",
        border: "1.5px solid #ffd70022",
        boxShadow: "0 0 20px #ffd70044"
      }}
    >
      <label className="block mb-4 text-sm md:text-base font-medium" style={{ color: "#ffd700" }}>
        Hot Gossip
      </label>
      <div className="w-full text-gray-300 text-lg md:text-xl font-normal rounded-lg font-poppins">
        {message.messages}
      </div>
    </motion.div>
  );
}

export default function GossipSection() {
  const router = useRouter();
  
  const result = useReadContract({
    abi,
    address: '0xBF8296D39a78961e7C5AeeA217E3308eF944Bbd8',
    functionName: "getTotalMessages",
    chainId: sepolia.id
  }) as {
    data: Message[] | undefined,
    isLoading: boolean;
    error: Error | null;
  };
  
  const displayedMessages = result.data?.slice(0, 3);
  const hasMoreMessages = result.data && result.data.length > 3;
  
  const handleShowMore = () => {
    router.push('/all-messages');
  };
  
  return (
    <>
      <motion.div
        className="w-full flex justify-center mt-16 md:mt-24 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      >
        <h2 className="font-poppins text-4xl md:text-6xl lg:text-7xl text-white font-normal drop-shadow-[0_0_12px_#fffde4,0_0_4px_#fffde4] text-center">
          Read Some Hot Gossips
        </h2>
      </motion.div>
      
      {result.isLoading && (
        <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
          <div className="text-yellow-400 font-poppins text-lg md:text-xl text-center">Loading gossips...</div>
        </div>
      )}
      
      {result.error && (
        <div className="w-full flex justify-center mt-8 md:mt-12 px-4">
          <div className="text-red-400 font-poppins text-lg md:text-xl text-center">Error loading gossips: {result.error.message}</div>
        </div>
      )}
      
      {!result.isLoading && !result.error && (
        <>
          <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12 px-4">
            {displayedMessages?.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
              >
                <GossipCard message={msg} />
              </motion.div>
            ))}
          </div>
          
          {hasMoreMessages && (
            <motion.div
              className="w-full flex justify-center mt-6 md:mt-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: 'easeOut' }}
            >
              <button
                onClick={handleShowMore}
                className="px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-base md:text-lg transition-all duration-200 font-poppins hover:scale-105"
                style={{
                  background: "#ffd700",
                  color: "#181818",
                  boxShadow: "0 0 20px #ffd70044"
                }}
              >
                Show More
              </button>
            </motion.div>
          )}
        </>
      )}
    </>
  );
} 