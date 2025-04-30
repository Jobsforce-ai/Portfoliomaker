import {Project} from "../utils/samplePortfolioData";

type ProjectCardProps = {
    project: Project
}

function ProjectCard({project}: ProjectCardProps) {

  return (
    <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
            <div>{project.name}</div>
            <div>{project.startDate} - {project.endDate}</div>
        </div>
        <div>{project.description}</div>
    </div>
  )
}

export default ProjectCard