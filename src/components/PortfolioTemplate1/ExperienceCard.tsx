import { Calendar } from "lucide-react";
import { formatDescription } from "../../utils/helpers";
import { Position } from "../../utils/SamplePortfolioData";

interface ExperienceCardProps {
  position: Position;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ position }) => {
  return (
    <div className="flex gap-4 sm:flex-row flex-col">
      <div className="w-16 h-16 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-700 font-semibold">
        {position.company?.slice(0, 2).toUpperCase() || "CO"}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">
          {position.title || "Position Title"}
        </h3>
        <p className="text-gray-700">{position.company || "Company Name"}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span>
            {position.startDate || "Start Date"} -{" "}
            {position.endDate || "End Date"}
          </span>
        </div>
        {position.description && (
          <div className="mt-3 text-gray-600">
            {formatDescription(position.description)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
