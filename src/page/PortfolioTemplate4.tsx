import Navbar from "@/components/PortfolioTemplate4/Navbar";
import Hero from "@/components/PortfolioTemplate4/Hero";
import Projects from "@/components/PortfolioTemplate4/Projects";
import Experience from "@/components/PortfolioTemplate4/Experience";
import Skills from "@/components/PortfolioTemplate4/Skills";
import SparkleBackground from "@/components/PortfolioTemplate4/SparkleBackground";
import { ThemeProvider } from "@/components/PortfolioTemplate4/ThemeProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PortfolioTemplate4 = () => {
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
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background text-foreground relative w-screen">
          <SparkleBackground />
          <Navbar />
          <Hero profile={profileData.profile} />
          <Experience positions={profileData.positions} />
          <Projects projects={profileData.projects} />
          <Skills skills={profileData.skills} />
        </div>
      </ThemeProvider>
    );
  else return <div>Loading...</div>;
};

export default PortfolioTemplate4;
