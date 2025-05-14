import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { ResumeData } from '@/utils/SamplePortfolioData';
import { motion } from 'framer-motion';
import { Globe } from './ui/globe';
import { Meteors } from './ui/meteors';

interface HeroProps {
  profile: ResumeData['profile'];
}

const Hero = ({ profile }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <Meteors number={20} />
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative h-[300px] mb-12">
            <Globe className="opacity-50" size={400} />
            <motion.h1 
              className="text-4xl md:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {profile.firstName} {profile.lastName}
            </motion.h1>
          </div>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {profile.headline}
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {profile.summary}
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <LinkedinIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <GithubIcon className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;