import { motion } from 'framer-motion';

const InfiniteScroll = () => {
  const technologies = [
    'React', 'React Native', 'Angular', 'Figma', 'Adobe XD', 'MongoDB', 
    'NextJS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'Node.js', 'Express'
  ];
  
  // Duplicate the array to create a seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <div className="py-12 bg-[#191919] overflow-hidden">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {duplicatedTechnologies.map((tech, index) => (
          <div 
            key={index}
            className="px-6 py-3 bg-[#222222] rounded-full whitespace-nowrap"
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;