import { Briefcase } from "lucide-react";
import { formatDescription } from "../../utils/helpers";
import { Position } from "../../utils/SamplePortfolioData";

interface ExperienceCardProps {
  position: Position;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ position, index }) => {
  return (
    <div
      className={`ml-10 md:ml-0 md:w-1/2 ${
        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
      }`}
    >
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30 shadow-xl hover:shadow-purple-900/10 transition-all duration-300 hover:translate-y-[-2px]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <span className="text-xs text-purple-400 font-medium">
              {position.startDate || "N/A"} - {position.endDate || "N/A"}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">
          {position.title || "Untitled Position"}
        </h3>
        <p className="text-purple-300 mb-3">
          {position.company || "Unknown Company"}
        </p>
        {position.description ? (
          <div className="text-gray-300 text-sm">
            {formatDescription(position.description)}
          </div>
        ) : (
          <p className="text-gray-300 text-sm">No description provided.</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
