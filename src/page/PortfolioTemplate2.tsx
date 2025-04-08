import { useState, useEffect, useRef, JSX } from "react";
import {
  Calendar,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Code,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { profileData } from "../utils/SamplePortfolioData";

// --- Helper Function ---
const formatDescription = (
  description: string | null | undefined
): JSX.Element[] | JSX.Element => {
  if (!description) return <p>No description provided.</p>;
  return description.split("\n").map((line, index) => (
    <p key={index} className={index > 0 ? "mt-1" : ""}>
      {line || "—"}
    </p>
  ));
};

export default function PortfolioTemplate2(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    about: null,
    experience: null,
    education: null,
    projects: null,
    skills: null,
  });

  const scrollToSection = (section: string): void => {
    setIsScrolling(true);
    setActiveSection(section);

    const element = sectionRefs.current[section];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = (): void => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 100;
      let currentSection = "about";
      Object.entries(sectionRefs.current).forEach(([section, element]) => {
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {profileData.profile?.firstName || "First"}{" "}
                {profileData.profile?.lastName || "Last"}
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {Object.keys(sectionRefs.current).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 text-sm font-medium capitalize transition-colors duration-300 ${
                    activeSection === section
                      ? "text-purple-400 border-b-2 border-purple-500"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Contact</span>
              </button>
              <button className="p-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                <Download className="h-5 w-5" />
                <span className="sr-only">Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-950 z-0"></div>
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="stars-container">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-4xl font-bold text-white">
                  {profileData.profile?.firstName?.charAt(0) || "F"}
                  {profileData.profile?.lastName?.charAt(0) || "L"}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  {profileData.profile?.firstName || "First"}{" "}
                  {profileData.profile?.lastName || "Last"}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {profileData.profile?.headline || "Your headline goes here."}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                >
                  <Linkedin className="h-4 w-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                >
                  <Github className="h-4 w-4 text-purple-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300"
                >
                  <Twitter className="h-4 w-4 text-purple-400" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* About Section */}
        <section
          ref={(el) => (sectionRefs.current.about = el)}
          className="mb-20"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                About Me
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h2>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30 shadow-xl">
            <div className="prose prose-invert max-w-none">
              {formatDescription(
                profileData.profile?.summary ||
                  "No summary available at the moment."
              )}
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section
          ref={(el) => (sectionRefs.current.experience = el)}
          className="mb-20"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Experience
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500 transform md:translate-x-[-0.5px]"></div>
            <div className="space-y-12">
              {profileData.positions && profileData.positions.length > 0 ? (
                profileData.positions.map((position, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gray-900 border-2 border-purple-500 transform translate-x-[-10px] md:translate-x-[-12px] z-10"></div>
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
                              {position.startDate || "N/A"} -{" "}
                              {position.endDate || "N/A"}
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
                          <p className="text-gray-300 text-sm">
                            No description provided.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400">
                  No experience available.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          ref={(el) => (sectionRefs.current.education = el)}
          className="mb-20"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Education
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.education && profileData.education.length > 0 ? (
              profileData.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30 shadow-xl hover:shadow-purple-900/10 transition-all duration-300 hover:translate-y-[-2px]"
                >
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
                        {edu.startDate || "Start Date"} -{" "}
                        {edu.endDate || "End Date"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">
                No education records available.
              </p>
            )}
          </div>
        </section>

        {/* Projects Timeline Section */}
        <section
          ref={(el) => (sectionRefs.current.projects = el)}
          className="mb-20"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Projects
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500 transform md:translate-x-[-0.5px]"></div>
            <div className="space-y-12">
              {profileData.projects && profileData.projects.length > 0 ? (
                profileData.projects.map((project, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-gray-900 border-2 border-purple-500 transform translate-x-[-10px] md:translate-x-[-12px] z-10"></div>
                    <div
                      className={`ml-10 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-900/30 shadow-xl hover:shadow-purple-900/10 transition-all duration-300 hover:translate-y-[-2px]">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                            <Code className="h-5 w-5 text-purple-400" />
                          </div>
                          <div>
                            <span className="text-xs text-purple-400 font-medium">
                              {project.endDate || "Ongoing"}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {project.name || "Unnamed Project"}
                        </h3>
                        <div className="text-gray-300 text-sm">
                          {formatDescription(project.description)}
                        </div>
                        <div className="mt-4">
                          <a
                            href="#"
                            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                          >
                            <span>View Project</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400">
                  No projects available.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          ref={(el) => (sectionRefs.current.skills = el)}
          className="mb-20"
        >
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Skills
              </span>
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h2>
          </div>
          {profileData.skills && profileData.skills.length > 0 ? (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-900/30 shadow-xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {profileData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-lg p-4 flex items-center justify-center text-center hover:bg-gray-700 transition-colors duration-300 border border-purple-900/20 group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 capitalize">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-400">No skills available.</p>
          )}
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-purple-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © {new Date().getFullYear()}{" "}
                {profileData.profile?.firstName || "First"}{" "}
                {profileData.profile?.lastName || "Last"}
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for Stars Animation */}
      <style>{`
        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .star {
          position: absolute;
          background-color: white;
          border-radius: 50%;
          opacity: 0.7;
          animation: twinkle linear infinite;
        }
        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
}
