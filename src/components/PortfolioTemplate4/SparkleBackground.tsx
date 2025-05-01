import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

const SparkleBackground = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const createSparkle = useCallback(() => {
    return {
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((currentSparkles) => {
        const newSparkles = [...currentSparkles];
        if (newSparkles.length < 30) {
          newSparkles.push(createSparkle());
        } else {
          newSparkles.shift();
          newSparkles.push(createSparkle());
        }
        return newSparkles;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [createSparkle]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            position: 'absolute',
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          className="bg-primary/20 rounded-full"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
    </div>
  );
};

export default SparkleBackground;