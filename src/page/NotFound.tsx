import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto text-center space-y-8 backdrop-blur-sm bg-gray-900/80 p-8 rounded-xl border border-gray-800 shadow-xl"
      >
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-7 w-7 text-yellow-400 mr-2" />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hello User!
          </h1>
          <Sparkles className="h-7 w-7 text-yellow-400 ml-2" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 leading-relaxed"
        >
          It looks like this page doesn't exist.
          <br />
          But you can create your own portfolio at{" "}
          <a
            href="https://jobsforce.ai"
            className="text-yellow-500 hover:text-yellow-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            jobsforce.ai
          </a>
          .
        </motion.p>
      </motion.div>
    </div>
  );
}
