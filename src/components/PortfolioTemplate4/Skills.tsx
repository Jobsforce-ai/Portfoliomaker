import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Badge 
                variant="secondary" 
                className="text-lg px-4 py-2 hover:scale-110 transition-transform cursor-default"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;