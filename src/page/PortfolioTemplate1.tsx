import { JSX, useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  ExternalLink,
  Mail,
  Download,
} from "lucide-react";
import { Button } from "../components/PortfolioTemplate1/Button";
import ExperienceCard from "../components/PortfolioTemplate1/ExperienceCard";
import EducationCard from "../components/PortfolioTemplate1/EducationCard";
import ProjectCard from "../components/PortfolioTemplate1/ProjectCard";
import Band from "../components/Band";
import Watermark from "../components/Watermark";
import { useParams } from "react-router-dom";
import { ResumeData } from "@/utils/SamplePortfolioData";

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
  const [profileData, setProfileData] = useState<ResumeData>();
  const { userid } = useParams();
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    experience: true,
    education: true,
    projects: true,
    skills: true,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(
        `https://api.jobsforce.ai/api/portfolio/Nova/${userid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Authorization failed with status: ${response.status}`);
      }

      const data = await response.json();

      console.log("DATA: ", data);

      setProfileData(data.profileData);
    };
    fetchProfile();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (profileData)
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="fixed z-20 top-10 -right-10">
          <Band color="bg-green-600" />
        </div>
        <Watermark />

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
          <div className="bg-white rounded-lg mb-8 shadow-lg">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="rounded-full overflow-hidden h-24 w-24 border-4 border-white shadow-md">
                  <div className="bg-emerald-100 text-emerald-800 font-bold text-2xl flex items-center justify-center h-full w-full">
                    {profileData.profile?.firstName
                      ? profileData.profile.firstName[0]
                      : "A"}
                    {profileData.profile?.lastName
                      ? profileData.profile.lastName[0]
                      : "B"}
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
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
          </div>

          {["experience", "education", "projects", "skills"].map(
            (sectionKey) => {
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
                  <hr className="border-t my-4" />

                  {expandedSections[sectionKey] && (
                    <>
                      {sectionKey === "experience" &&
                        (profileData.positions?.length ? (
                          profileData.positions.map((position, i) => (
                            <div key={i} className="mb-6">
                              <ExperienceCard position={position} />
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500">
                            No experience available
                          </p>
                        ))}

                      {sectionKey === "education" &&
                        (profileData.education?.length ? (
                          profileData.education.map((edu, i) => (
                            <div key={i} className="mb-6">
                              <EducationCard edu={edu} />
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500">
                            No education available
                          </p>
                        ))}

                      {sectionKey === "projects" && (
                        <div className="grid grid-cols-1 gap-6">
                          {profileData.projects?.length ? (
                            profileData.projects.map((project, i) => (
                              <div
                                key={i}
                                className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow duration-300"
                              >
                                <ProjectCard project={project} />
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500">
                              No projects available
                            </p>
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
                            <span
                              key={i}
                              className="inline-block rounded-full font-semibold bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors py-1.5 px-3 text-sm capitalize"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            }
          )}

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
  else return <div>Loading...</div>;
}
