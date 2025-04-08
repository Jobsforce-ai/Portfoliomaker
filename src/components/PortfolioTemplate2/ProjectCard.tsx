import { ArrowRight, Code } from "lucide-react";
import { formatDescription } from "../../utils/helpers";
import { Project } from "../../utils/SamplePortfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className={`ml-10 md:ml-0 md:w-1/2 ${
        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
      }`}
    >
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30 shadow-xl hover:shadow-purple-900/10 transition-all duration-300 hover:translate-y-[-2px]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
            <Code className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <span className="text-xs text-purple-400 font-medium">
              {project.endDate || "Ongoing"}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          {project.name || "Unnamed Project"}
        </h3>
        <div className="text-gray-300 text-sm">
          {formatDescription(project.description)}
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <span>View Project</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
