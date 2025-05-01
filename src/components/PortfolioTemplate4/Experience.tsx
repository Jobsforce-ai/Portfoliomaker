import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Position } from '@/utils/SamplePortfolioData';
import { BriefcaseIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  positions: Position[];
}

const Experience = ({ positions }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <BriefcaseIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <p className="text-muted-foreground">
                        {position.company} • {position.startDate} - {position.endDate}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                {position.description && (
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {position.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;