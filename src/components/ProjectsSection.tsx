import ProjectCard from "./ProjectCard"
import { profileData } from "@/utils/samplePortfolioData"

function ProjectsSection() {
  
  return (
    <div className="px-20 pb-20">
        <div className="text-center text-4xl font-semibold pb-10">Projects</div>
        <div className="grid grid-cols-[600px_600px] grid-rows-[250px_200px] gap-4">
          {/* <ProjectCard
          /> */}
          <div className="bg-blue-700 col-span-1"></div>
          <div className="bg-blue-700 col-span-1"></div>
          <div className="bg-blue-700 col-span-2"></div>
        </div>
    </div>
  )
}

export default ProjectsSection