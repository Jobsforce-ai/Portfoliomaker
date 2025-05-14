import { motion } from 'framer-motion';
import { profileData } from '@/utils/SamplePortfolioData'; // Adjust the relative path if necessary

const Projects = () => {
  const projects = profileData.projects || [];

  const gradients = [
    'bg-gradient-to-r from-purple-500 to-pink-500',
    'bg-gradient-to-r from-blue-500 to-green-500',
    'bg-gradient-to-r from-yellow-500 to-red-500',
    'bg-gradient-to-r from-indigo-500 to-purple-500',
    'bg-gradient-to-r from-teal-500 to-cyan-500',
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[#111111]">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden p-6 ${gradients[index % gradients.length]}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.name || 'Untitled Project'}
              </h3>
              <p className="text-sm text-gray-200 mb-4">
                {project.description || 'No description available.'}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.startDate && (
                  <span className="px-3 py-1 bg-gray-800 text-sm rounded-full text-white">
                    Start: {project.startDate}
                  </span>
                )}
                {project.endDate && (
                  <span className="px-3 py-1 bg-gray-800 text-sm rounded-full text-white">
                    End: {project.endDate}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;