'use client';

import { useState } from "react";
import { useConnect, useWriteContract } from 'wagmi';
import {abi} from "../../dataabi.json";
import { toast } from "sonner";

export default function SendMessageToChain() {
  const [message, setMessage] = useState("");

  const { writeContractAsync, isPending  } = useWriteContract();
  const {connectAsync , connectors}  = useConnect();

  const handleSendMessage = async () => {
    try {
      const connectorFind = connectors.find((c) => c.id === 'injected');
      
      if (!connectorFind) {
        toast("No Wallet found first Install a Wallet");
        return;
      }
      
      await connectAsync({ connector: connectorFind });
      
      if (message.trim()) {
        await writeContractAsync({
          abi,
          address: "0xBF8296D39a78961e7C5AeeA217E3308eF944Bbd8",
          functionName: "sendMessage",
          args: [message],
        });
        
        toast.success("Message sent successfully!");
        setMessage("");
      }
    } catch {
      toast.error("No Wallet Found");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <button 
        onClick={() => toast("Test toast working!")}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Test Toast
      </button>
      <div className="w-full max-w-md mb-6">
        <h2 className="font-poppins text-2xl text-slate-200 font-normal text-left transition-all duration-300 hover:text-yellow-400 hover:italic">Send Your first Message</h2>
      </div>
      <div
        className="w-full max-w-md rounded-xl p-8 relative font-poppins"
        style={{
          background: "rgba(20,20,20,0.8)",
          border: "1.5px solid #ffd70022",
          boxShadow: "0 0 20px #ffd70044"
        }}
      >
        <label className="block mb-4 text-base font-medium" style={{ color: "#ffd700" }}>
          Your Message
        </label>
        <textarea
          className="w-full h-24 bg-transparent text-gray-300 placeholder:text-[#d1d5db] text-xl font-normal rounded-lg border-none focus:ring-0 focus:outline-none resize-none mb-8 font-poppins"
          placeholder="Type your message here..."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          disabled={isPending || !message.trim()}
          className="w-fit px-8 py-3 rounded-full font-bold text-lg mx-auto block transition-all duration-200 font-poppins disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: "#ffd700",
            color: "#181818",
            boxShadow: "0 0 20px #ffd70044"
          }}
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </div>
  );
} 