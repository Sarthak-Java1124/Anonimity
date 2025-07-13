'use client';

import { motion } from 'framer-motion';
import { useReadContract } from 'wagmi';
import { abi } from "../../dataabi.json";
import { useRouter } from 'next/navigation';
import { sepolia } from 'viem/chains';

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
        <h2 className="font-poppins text-4xl md:text-6xl lg:text-7xl text-white font-normal text-center transition-all duration-300 hover:text-yellow-400 hover:italic">
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