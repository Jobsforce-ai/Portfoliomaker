import { Badge } from "./ui/badge";

type TechStackSkillProps = {
    skill: string;
}

function TechStackSkill({skill}: TechStackSkillProps) {

  return (
    <Badge className="text-lg px-4 py-1">{skill}</Badge>
  )
}

export default TechStackSkill