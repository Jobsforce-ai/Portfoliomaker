import { motion } from "framer-motion";
import Hero from "../components/PortfolioTemplate3/Hero";
import Navbar from "../components/PortfolioTemplate3/Navbar";
import WorkExperience from "../components/PortfolioTemplate3/WorkExperience.";
import PersonalInfo from "../components/PortfolioTemplate3/PersonalInfo";
import Footer from "../components/PortfolioTemplate3/Footer";
import Projects from "../components/PortfolioTemplate3/Projects";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PortfolioTemplate3() {
  const [profileData, setProfileData] = useState<any>();
  const { userid } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(
        `https://api.jobsforce.ai/api/portfolio/Nova/${userid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Authorization failed with status: ${response.status}`);
      }

      const data = await response.json();

      console.log("DATA: ", data);

      setProfileData(data.profileData);
    };
    fetchProfile();
  }, []);

  if (profileData)
    return (
      <div className="min-h-screen bg-[#111111] text-white">
        <Navbar />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <InfiniteScroll /> */}
          <PersonalInfo profileData={profileData} />
          <Projects profileData={profileData} />
          <WorkExperience profileData={profileData} />
          <Hero />

          <Footer />
        </motion.div>
      </div>
    );
  else return <div>Loading...</div>;
}

export default PortfolioTemplate3;
