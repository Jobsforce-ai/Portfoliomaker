import { formatDescription } from "../../utils/helpers";

interface AboutCardProps {
  summary?: string;
}

const AboutCard = ({ summary }: AboutCardProps) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30 shadow-xl">
      <div className="prose prose-invert max-w-none">
        {formatDescription(summary || "No summary available at the moment.")}
      </div>
    </div>
  );
};

export default AboutCard;
