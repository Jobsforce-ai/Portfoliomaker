import Navbar from "@/components/PortfolioTemplate4/Navbar"
import Hero from "@/components/PortfolioTemplate4/Hero"
import Projects from "@/components/PortfolioTemplate4/Projects"
import Experience from "@/components/PortfolioTemplate4/Experience"
import Skills from "@/components/PortfolioTemplate4/Skills"
import SparkleBackground from "@/components/PortfolioTemplate4/SparkleBackground"
import { ThemeProvider } from "@/components/PortfolioTemplate4/ThemeProvider"
import { profileData } from "@/utils/SamplePortfolioData"


const PortfolioTemplate4 = () => {
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
  )
}

export default PortfolioTemplate4