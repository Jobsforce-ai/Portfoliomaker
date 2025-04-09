import TechStackSkill from "./TechStackSkill"

function TechStackSection() {

    const skills = [
        {skill: "React.js"},
        {skill: "Next.js"},
        {skill: "JavaScript"},
        {skill: "TypeScript"},
        {skill: "Tailwind CSS"},
        {skill: "Node.js"},
        {skill: "Express"},
        {skill: "MongoDB"}
    ]

  return (
    <div className="px-20">
        <div className="text-center text-4xl font-semibold pb-20">Tech Stack</div>
        <div className="flex space-x-4">
            {skills.map((skill, index) => (
                <TechStackSkill key={index} {...skill}/>
            ))}
        </div>
    </div>
  )
}

export default TechStackSection