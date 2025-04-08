import { JSX, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  ExternalLink,
  Mail,
  Download,
} from "lucide-react";
import { Button } from "../components/PortfolioTemplate1/Button";
import { Card } from "../components/PortfolioTemplate1/Card";
import { Avatar } from "../components/PortfolioTemplate1/Avatar";
import { Separator } from "../components/PortfolioTemplate1/Seperator";
import { Badge } from "../components/PortfolioTemplate1/Badge";
import { profileData } from "../utils/SamplePortfolioData";

const formatDescription = (
  description: string | null
): JSX.Element[] | null => {
  if (!description) return null;
  return description.split("\n").map((line, i) => (
    <p key={i} className={i > 0 ? "mt-1" : ""}>
      {line}
    </p>
  ));
};

export default function PortfolioTemplate1() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    experience: true,
    education: true,
    projects: true,
    skills: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        className="h-40 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${
            profileData.profile?.miniProfile?.backgroundImage?.[
              "com.linkedin.common.VectorImage"
            ]?.artifacts?.[0]?.fileIdentifyingUrlPathSegment ||
            "/placeholder.svg?height=400&width=1600"
          }')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-16">
        {/* Profile Card */}
        <Card className="mb-8 shadow-lg">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                <div className="bg-emerald-100 text-emerald-800 font-bold text-2xl flex items-center justify-center h-full w-full">
                  {profileData.profile?.firstName
                    ? profileData.profile.firstName[0]
                    : "A"}
                  {profileData.profile?.lastName
                    ? profileData.profile.lastName[0]
                    : "B"}
                </div>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {profileData.profile?.firstName || "First Name"}{" "}
                  {profileData.profile?.lastName || "Last Name"}
                </h1>
                <p className="text-lg text-gray-600 mt-5">
                  {profileData.profile?.headline ||
                    "Professional Headline Placeholder"}
                </p>
                <div className="flex items-center mt-2 text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>
                    {profileData.profile?.location?.basicLocation
                      ?.countryCode || "Country"}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button size="sm" variant="outline" className="gap-2">
                    <Mail className="h-4 w-4" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    LinkedIn
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                About
              </h2>
              <div className="text-gray-600 whitespace-pre-line">
                {formatDescription(
                  profileData.profile?.summary || "No summary available"
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Section renderer helper */}
        {["experience", "education", "projects", "skills"].map((sectionKey) => {
          const title =
            sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);

          return (
            <div key={sectionKey} className="mb-8">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(sectionKey)}
              >
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                {expandedSections[sectionKey] ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </div>
              <Separator className="my-4" />

              {expandedSections[sectionKey] && (
                <>
                  {sectionKey === "experience" &&
                    (profileData.positions?.length ? (
                      profileData.positions.map((position, i) => (
                        <div key={i} className="mb-6">
                          <div className="flex gap-4 sm:flex-row flex-col">
                            <div className="w-16 h-16 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-700 font-semibold">
                              {position.company?.slice(0, 2).toUpperCase() ||
                                "CO"}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {position.title || "Position Title"}
                              </h3>
                              <p className="text-gray-700">
                                {position.company || "Company Name"}
                              </p>
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
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No experience available</p>
                    ))}

                  {sectionKey === "education" &&
                    (profileData.education?.length ? (
                      profileData.education.map((edu, i) => (
                        <div key={i} className="mb-6">
                          <div className="flex gap-4 sm:flex-row flex-col">
                            <div className="w-16 h-16 bg-emerald-100 rounded-md flex items-center justify-center text-emerald-700 font-semibold">
                              {edu.school?.slice(0, 2).toUpperCase() || "SC"}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {edu.degree || "Degree"}
                              </h3>
                              <p className="text-gray-700">
                                {edu.school || "School Name"}
                              </p>
                              <p className="text-gray-600">
                                {edu.fieldOfStudy || "Field of Study"}
                              </p>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>
                                  {edu.startDate || "Start Date"} -{" "}
                                  {edu.endDate || "End Date"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500">No education available</p>
                    ))}

                  {sectionKey === "projects" && (
                    <div className="grid grid-cols-1 gap-6">
                      {profileData.projects?.length ? (
                        profileData.projects.map((project, i) => (
                          <Card
                            key={i}
                            className="p-6 hover:shadow-md transition-shadow duration-300"
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {project.name || "Project Name"}
                              </h3>
                              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                                {project.endDate || "Ongoing"}
                              </Badge>
                            </div>
                            <div className="mt-3 text-gray-600">
                              {formatDescription(
                                project.description ||
                                  "No description available"
                              )}
                            </div>
                          </Card>
                        ))
                      ) : (
                        <p className="text-gray-500">No projects available</p>
                      )}
                    </div>
                  )}

                  {sectionKey === "skills" && (
                    <div className="flex flex-wrap gap-2">
                      {(profileData.skills?.length
                        ? profileData.skills
                        : [
                            "React.js",
                            "Next.js",
                            "Express.js",
                            "MongoDB",
                            "JavaScript",
                            "TypeScript",
                            "REST API",
                            "DevOps",
                          ]
                      ).map((skill, i) => (
                        <Badge
                          key={i}
                          className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors py-1.5 px-3 text-sm capitalize"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}

        <div className="text-center text-gray-500 text-sm mt-12">
          <p>
            © {new Date().getFullYear()}{" "}
            {profileData.profile?.firstName || "First Name"}{" "}
            {profileData.profile?.lastName || "Last Name"} • Resume
          </p>
        </div>
      </div>
    </div>
  );
}
