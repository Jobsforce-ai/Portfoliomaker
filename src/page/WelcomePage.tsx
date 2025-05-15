import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [countdown, setCountdown] = useState(10);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Handle countdown
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = "https://jobsforce.ai";
    }
  }, [countdown]);

  useEffect(() => {
    // Handle smooth progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 0.1;
        return newProgress <= 0 ? 0 : newProgress;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  // Calculate the circle properties
  const size = 120;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center space-y-8 backdrop-blur-sm bg-gray-900/80 p-8 rounded-xl border border-gray-800 shadow-xl"
      >
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-7 w-7 text-blue-400 mr-2" />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Jobsforce Portfolio Maker
          </h1>
          <Sparkles className="h-7 w-7 text-blue-400 ml-2" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 leading-relaxed"
        >
          Want to effortlessly create a new portfolio? Go to{" "}
          <a
            href="https://jobsforce.ai"
            className="text-yellow-500 hover:text-yellow-400 underline"
          >
            jobsforce.ai
          </a>{" "}
          and create one now!
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="text-lg text-gray-300 mb-4">Redirecting in:</div>
          <div className="relative">
            <svg width={size} height={size} className="transform -rotate-90">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="#1e293b"
                strokeWidth={strokeWidth}
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="#3b82f6"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                key={countdown}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-white"
              >
                {countdown}
              </motion.span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
