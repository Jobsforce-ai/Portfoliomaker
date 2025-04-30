
import { motion } from 'framer-motion';
import Hero from '../components/PortfolioTemplate1/Hero';
import Navbar from '../components/PortfolioTemplate1/Navbar';
import InfiniteScroll from '../components/PortfolioTemplate1/InfiniteScroll';
import WorkExperience from '../components/PortfolioTemplate1/WorkExperience.';
import PersonalInfo from '../components/PortfolioTemplate1/PersonalInfo';
import Footer from '../components/PortfolioTemplate1/Footer';
import Projects from '../components/PortfolioTemplate1/Projects';


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