import { useState, useEffect, useRef, JSX } from "react";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
} from "lucide-react";
import ExperienceCard from "../components/PortfolioTemplate2/ExperienceCard";
import AboutCard from "../components/PortfolioTemplate2/AboutCard";
import EducationCard from "../components/PortfolioTemplate2/EducationCard";
import ProjectCard from "../components/PortfolioTemplate2/ProjectCard";
import Footer from "../components/PortfolioTemplate2/Footer";
import Band from "../components/Band";
import Watermark from "../components/Watermark";
import { useParams } from "react-router-dom";

export default function PortfolioTemplate2(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [profileData, setProfileData] = useState<any>();
  const { userid } = useParams();

  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);

  const sectionRefs = {
    about: aboutRef,
    experience: experienceRef,
    education: educationRef,
    projects: projectsRef,
    skills: skillsRef,
  };

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

  const scrollToSection = (section: string): void => {
    setIsScrolling(true);
    setActiveSection(section);

    // Use the appropriate ref for the section
    const sectionRef = sectionRefs[section as keyof typeof sectionRefs];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 100;
      let currentSection = "about";
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  if (profileData)
    return (
      <div className="min-h-screen bg-gray-950 text-gray-200">
        <div className="fixed z-30 top-10 -right-10">
          <Band color="bg-purple-600" />
        </div>
        <Watermark />
        {/* Fixed Navigation */}
        <nav className="hidden md:block fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md z-20 border-b border-purple-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-20 items-center h-16">
              <div className="hidden md:flex space-x-8">
                {Object.keys(sectionRefs).map((section) => (
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
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {/* About Section */}
          <section ref={aboutRef} className="mb-20">
            <div className="relative">
              <h2 className="text-3xl font-bold mb-8 inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                  About Me
                </span>
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </h2>
            </div>
            <AboutCard summary={profileData.profile?.summary} />
          </section>

          {/* Experience Timeline Section */}
          <section ref={experienceRef} className="mb-20">
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
                      <ExperienceCard position={position} index={index} />
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
          <section ref={educationRef} className="mb-20">
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
                    <EducationCard edu={edu} />
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
          <section ref={projectsRef} className="mb-20">
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
                      <ProjectCard project={project} index={index} />
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
          <section ref={skillsRef} className="mb-20">
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
        <Footer
          firstName={profileData.profile?.firstName}
          lastName={profileData.profile?.lastName}
        />

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
  else return <div>Loading...</div>;
}
