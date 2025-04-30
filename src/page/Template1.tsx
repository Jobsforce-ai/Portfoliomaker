
import { motion } from 'framer-motion';
import Hero from '../components/PortfolioTemplate3/Hero';
import Navbar from '../components/PortfolioTemplate3/Navbar';
import InfiniteScroll from '../components/PortfolioTemplate3/InfiniteScroll';
import WorkExperience from '../components/PortfolioTemplate3/WorkExperience.';
import PersonalInfo from '../components/PortfolioTemplate3/PersonalInfo';
import Footer from '../components/PortfolioTemplate3/Footer';
import Projects from '../components/PortfolioTemplate3/Projects';


function Template1() {
    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* <InfiniteScroll /> */}
                <PersonalInfo />
                <Projects />
                <WorkExperience />
                <Hero />
           
                <Footer />
            </motion.div>
        </div>
    );
}

export default Template1;