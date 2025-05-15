import { motion } from "framer-motion";

const WorkExperience = ({ profileData }) => {
  const experiences = profileData.positions || [];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#1a1a1a] rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    {exp.company || "Unknown Company"}
                  </h3>
                  <p className="text-gray-400">
                    {exp.title || "Unknown Position"}
                  </p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">
                  {exp.startDate || "N/A"} - {exp.endDate || "Present"}
                </p>
              </div>
              <p className="text-gray-300">
                {exp.description || "No description available."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
