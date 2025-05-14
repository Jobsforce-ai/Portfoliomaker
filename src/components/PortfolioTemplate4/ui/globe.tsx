import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const Globe = ({
  className = "",
  size = 500,
}: {
  className?: string;
  size?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const gridLines = 20;
  const points = [];

  for (let i = 0; i < gridLines; i++) {
    const theta = (i / gridLines) * Math.PI;
    for (let j = 0; j < gridLines; j++) {
      const phi = (j / gridLines) * 2 * Math.PI;
      const x = Math.sin(theta) * Math.cos(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(theta);
      points.push([x, y, z]);
    }
  }

  return (
    <div
      ref={ref}
      className={`absolute left-1/2 top-1/2 size-[${size}px] -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 1 }}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          animation: "rotate 20s linear infinite",
        }}
      >
        {points.map(([x, y, z], i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/90"
            style={{
              transform: `translate3d(${x * (size / 3)}px, ${y * (size / 3)}px, ${
                z * (size / 3)
              }px)`,
            }}
          />
        ))}
      </motion.div>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotateY(0deg) rotateX(20deg);
            }
            to {
              transform: rotateY(360deg) rotateX(20deg);
            }
          }
        `}
      </style>
    </div>
  );
};