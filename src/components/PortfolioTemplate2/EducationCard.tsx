import { Calendar, GraduationCap } from "lucide-react";
import { Education } from "../../utils/SamplePortfolioData";

interface EducationCardProps {
  edu: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            {edu.degree || "Degree Unavailable"}
          </h3>
          <p className="text-purple-300">
            {edu.fieldOfStudy || "Field of Study N/A"}
          </p>
        </div>
      </div>
      <div className="ml-16">
        <p className="text-gray-300">
          {edu.school || "School information unavailable"}
        </p>
        <div className="flex items-center text-sm text-gray-400 mt-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>
            {edu.startDate || "Start Date"} - {edu.endDate || "End Date"}
          </span>
        </div>
      </div>
    </>
  );
};

export default EducationCard;
