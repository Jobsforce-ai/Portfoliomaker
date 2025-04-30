import { Calendar } from "lucide-react";
import { Education } from "../../utils/SamplePortfolioData";

interface EducationCardProps {
  edu: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
  return (
    <div className="flex gap-4 sm:flex-row flex-col">
      <div className="w-16 h-16 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-700 font-semibold">
        {edu.school?.slice(0, 2).toUpperCase() || "SC"}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">
          {edu.degree || "Degree"}
        </h3>
        <p className="text-gray-700">{edu.school || "School Name"}</p>
        <p className="text-gray-600">{edu.fieldOfStudy || "Field of Study"}</p>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span>
            {edu.startDate || "Start Date"} - {edu.endDate || "End Date"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
