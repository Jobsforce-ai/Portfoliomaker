export interface Position {
  title?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  description?: string | null;
}

export interface Education {
  school?: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
}

export interface Project {
  name?: string;
  description?: string;
  startDate?: string | null;
  endDate?: string;
}

export interface Profile {
  firstName?: string;
  lastName?: string;
  headline?: string;
  summary?: string;
  industryName?: string;
  location?: any;
  geoCountry?: any;
  miniProfile?: {
    firstName?: string;
    lastName?: string;
    occupation?: string;
    publicIdentifier?: string;
    profileImage?: string | null;
    backgroundImage?: {
      "com.linkedin.common.VectorImage"?: {
        artifacts?: Array<{
          width?: number;
          fileIdentifyingUrlPathSegment?: string;
          expiresAt?: number;
          height?: number;
        }>;
        rootUrl?: string;
      };
    };
  };
}

export interface ResumeData {
  entityUrn: string;
  profile?: Profile;
  positions?: Position[];
  education?: Education[];
  projects?: Project[];
  skills?: string[];
  certifications?: any[];
  publications?: any[];
  languages?: any[];
  testScores?: any[];
  honors?: any[];
  courses?: any[];
  volunteerExperiences?: any[];
}

export const profileData: ResumeData = {
  entityUrn: "urn:li:fs_profileView:ACoAADfHwC4Bl0nDz9Dw-hRGn_7K-kWY4SRHMRY",
  profile: {
    firstName: "Ravi",
    lastName: "Ranjan",
    headline:
      "CS Student @ VITB25 | MERN Developer | DevOps Enthusiast | GenAI Enthusiast",
    summary:
      "🚀 Full-Stack Developer | MERN | AI & Scalable Web Apps\n\nBuilding fast, scalable, and user-friendly web apps with React, Node.js, and Next.js. Passionate about AI-powered solutions, backend optimization, and seamless UI/UX. Always exploring new tech and open to collaborations & opportunities.\n\n💡 Let's connect and create something awesome! 🚀 ye",
    industryName: "Computer Software",
    location: {
      basicLocation: {
        countryCode: "in",
      },
    },
    geoCountry: null,
    miniProfile: {
      firstName: "Ravi",
      lastName: "Ranjan",
      occupation:
        "CS Student @ VITB25 | MERN Developer | DevOps Enthusiast | GenAI Enthusiast",
      publicIdentifier: "ravi-ranjan-9264b0221",
      profileImage: null,
      backgroundImage: {
        "com.linkedin.common.VectorImage": {
          artifacts: [
            {
              width: 757,
              fileIdentifyingUrlPathSegment:
                "200_800/profile-displaybackgroundimage-shrink_200_800/0/1739129532157?e=1749686400&v=beta&t=CGRFtVRKwhnOeNjqz69NyBlbgJ3myClEtX_Cdbtv5qI",
              expiresAt: 1749686400000,
              height: 189,
            },
            {
              width: 757,
              fileIdentifyingUrlPathSegment:
                "350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1739129532157?e=1749686400&v=beta&t=v88QCfOc3z4k7rQEk5iPjCuIaRy6e4SFRpfLyvjca9I",
              expiresAt: 1749686400000,
              height: 189,
            },
          ],
          rootUrl:
            "https://media.licdn.com/dms/image/v2/D5616AQGkgQN4JCorrA/profile-displaybackgroundimage-shrink_",
        },
      },
    },
  },
  positions: [
    {
      title: "Software Developer",
      company: "OpenGig",
      startDate: "3/2025",
      endDate: "Present",
      description: null,
    },
    {
      title: "Software Developer",
      company: "Jobsforce",
      startDate: "2/2025",
      endDate: "Present",
      description:
        "Developing an AI-powered job recommendation platform to match candidates with suitable job opportuni\nties. The platform is designed for customized resume creation and AI-powered resume matching, enhancing job search efficiency.",
    },
    {
      title: "Back End Developer",
      company: "Fanible",
      startDate: "5/2024",
      endDate: "7/2024",
      description:
        "As a Backend Developer Intern, I worked on optimizing and scaling the backend of an existing application, contributing to the company's technological growth. \nMy key responsibilities included:\nEngineered a scalable backend architecture using Node.js and Express.js, improving server response time by 40%.\nOptimized database queries in MongoDB, significantly enhancing data retrieval efficiency.\nResolved 10+ critical issues related to API performance, security, and data consistency, ensuring a seamless user experience.\nDeveloped and maintained robust REST APIs, rigorously tested using Postman for reliability and performance.",
    },
    {
      title: "Web Developer",
      company: "Ksham Innovation Private Limited",
      startDate: "5/2024",
      endDate: "6/2024",
      description:
        "Achieved through winning a hackathon on Unstop among 558 candidates\nDuring my internship, I was responsible for revamping the company's existing project using the MERN stack (MongoDB, Express.js, React, Node.js).\n My key contributions included:\nDeveloping a modern, responsive UI by recreating a three-page landing website featuring Home, About, and Contact sections.\nImplementing a robust contact form that allowed users to submit inquiries, ensuring seamless data handling and storage in MongoDB.\nBuilding an Admin Dashboard where administrators could view and manage all contact form submissions efficiently.\nEnhancing performance and scalability by structuring the project following best practices in React and Node.js.",
    },
    {
      title: "Web Development Team Member",
      company: "Mozilla Firefox Club VIT Bhopal",
      startDate: "1/2023",
      endDate: "6/2023",
      description: null,
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology",
      degree: "Bachelor of Technology - BTech",
      fieldOfStudy: "Computer Science",
      startDate: "2021",
      endDate: "2025",
    },
  ],
  projects: [
    {
      name: "Book_heaven",
      description:
        "Book Heaven is a React.js-based web application that lets users explore a vast collection of books from around the globe. Powered by the Google Books API, users can search for their favorite titles, discover new reads, and dive into detailed book information—all in one place.",
      startDate: null,
      endDate: "Ongoing",
    },
    {
      name: "Dark Pattern Buster Extension",
      description:
        "Introducing Dark Pattern Buster 🛡️, a powerful browser extension crafted to empower users against deceptive practices on shopping websites!\n\nWhat is Dark Pattern Buster?\nDark Pattern Buster is a cutting-edge browser extension designed to put an end to deceptive tactics employed by some online retailers. With the rise of dark patterns—subtle design choices intended to manipulate users into actions they might not otherwise take—Dark Pattern Buster stands as a vigilant guardian, ensuring transparency and integrity in online shopping experiences.",
      startDate: null,
      endDate: "Ongoing",
    },
    {
      name: "Enliven-The_Ngo_Website",
      description:
        "Enliven is a comprehensive resource dedicated to supporting domestic workers who have faced abuse. Our platform delivers essential information, aid, and connections to ensure every individual receives the assistance they deserve.\n\nKey Features\nComprehensive information on laws and articles related to abuse.\nDirect connections to NGOs and organizations providing free legal assistance.\nA supportive community platform where users can share experiences and offer mutual support.\nA dedicated contact page for seamless communication between users and administrators.",
      startDate: null,
      endDate: "Ongoing",
    },
  ],
  skills: ["node js", "mongoose", "RabbitMQ", "Redis"],
  certifications: [],
  publications: [],
  languages: [],
  testScores: [],
  honors: [],
  courses: [],
  volunteerExperiences: [],
};
