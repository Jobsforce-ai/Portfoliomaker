import React from "react";
import { formatDescription } from "../../utils/helpers";
import { Project } from "../../utils/SamplePortfolioData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">
          {project.name || "Project Name"}
        </h3>
        <span className="inline-block rounded-full px-2 py-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border-emerald-200">
          {project.endDate || "Ongoing"}
        </span>
      </div>
      <div className="mt-3 text-gray-600">
        {formatDescription(project.description || "No description available")}
      </div>
    </>
  );
};

export default ProjectCard;
