import TechStackSection from "@/components/TechStackSection"
import AboutSection from "../components/AboutSection"
import Navbar from "../components/Navbar"
import ProjectsSection from "../components/ProjectsSection"

function Classic() {
  
  return (
    <div className="flex flex-col px-20 py-10">
      <Navbar/>
      <AboutSection
        summary="Building fast, scalable, and user-friendly web applications with React, Node.js, and Next.js. Passionate about AI-powered solutions, backend optimization, and seamless UI/UX."
      />
      <ProjectsSection/>
      <TechStackSection/>
    </div>
  )
}

export default Classic