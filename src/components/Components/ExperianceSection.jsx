import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Calendar,
  Building2,
  Briefcase,
  TrendingUp,
  Users,
  Code,
  Award,
  ChevronRight,
  Code2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const experiences = [
    {
      role: "Freelance Fullstack Developer",
      company: "Self-employed",
      period: "2024 - Present",
      location: "Remote / Sri Lanka",
      type: "Freelance",
      responsibilities: [
        "Delivering custom frontend, backend, and fullstack web applications for clients",
        "Collaborating directly with clients to gather requirements and iterate quickly",
        "Designing responsive UI/UX and ensuring smooth integrations between services",
        "Deploying, monitoring, and maintaining production-ready solutions",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PHP",
        "Git",
        "GitHub",
        "Vercel",
      ],
      achievements: [
        "Built end-to-end applications covering UI, API, and database layers",
        "Delivered multiple production deployments with fast turnaround",
        "Maintained long-term client relationships through reliable delivery",
      ],
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      role: "Intern Fullstack Software Engineer",
      company: "Lakion",
      period: "2023 - 2024",
      location: "Remote (Global)",
      type: "Internship",
      responsibilities: [
        "Participating in global IT projects with a focus on fullstack development",
        "Collaborating remotely with cross-functional teams",
        "Contributing to innovative software solutions for overseas markets, including New Zealand",
        "Attending virtual onboarding and orientation to integrate with Lakion's workflow and culture",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      achievements: [
        "Joined a globally recognized IT solutions provider",
        "Selected for impactful internship projects",
        "Integrated into a remote-first, international development team",
      ],
      icon: Building2,
      gradient: "from-purple-500 to-indigo-500",
    },

    {
      role: "Full Stack Developer",
      company: "Flexycode",
      period: "2022 - 2023",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Built responsive web applications using React and Node.js",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Optimized application performance resulting in 40% faster load times",
        "Developed RESTful APIs and database schemas",
      ],
      tech: ["React", "Express.js", "Node.js", "MongoDB", "Prisma ORM"],
      achievements: [
        "40% faster load times",
        "Pixel-perfect designs",
        "10+ applications built",
      ],
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        id="experience"
        className="py-20 px-4 bg-slate-950 dark:bg-slate-950 relative overflow-hidden"
      >
        {/* Technical grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 dark:bg-slate-800/50 border border-slate-700/50 dark:border-slate-700/50 rounded-lg backdrop-blur-sm mb-4">
              <Code2 className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-mono font-medium text-slate-300 dark:text-slate-300">
                &gt; experience.load()
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-0.5 bg-blue-500 mx-auto"></div>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto font-mono">
              <span className="text-slate-500">//</span> A timeline of my
              professional growth and the amazing teams I've worked with
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-blue-500/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-700 delay-${
                      index * 200
                    } transform ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 shadow-lg transition-all duration-300 ${
                        activeCard === index
                          ? "scale-150 border-blue-500"
                          : "scale-100"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full bg-blue-500`}
                      ></div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-16 md:ml-0 md:w-5/12 ${
                        isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      }`}
                    >
                      <Card
                        className={`transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-500/50 ${
                          activeCard === index
                            ? "shadow-2xl scale-105 border-blue-500/50"
                            : "shadow-lg"
                        } bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden group`}
                      >
                        {/* Card Header with Technical accent */}
                        <div className={`h-0.5 bg-blue-500`}></div>

                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-3 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 shadow-lg`}
                              >
                                <Icon className="h-6 w-6" />
                              </div>
                              <div>
                                <CardTitle className="text-xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors">
                                  {exp.role}
                                </CardTitle>
                                <CardDescription className="text-lg font-semibold font-mono text-slate-300 mt-1">
                                  {exp.company}
                                </CardDescription>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className="bg-slate-800/50 border-slate-700/50 text-slate-300 text-xs font-mono font-medium"
                            >
                              {exp.type}
                            </Badge>
                          </div>

                          {/* Period and Location */}
                          <div className="flex flex-wrap gap-4 mt-4 text-sm text-slate-400 font-mono">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-blue-400" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-blue-400" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Key Achievements */}
                          <div>
                            <h4 className="font-semibold font-mono text-white mb-3 flex items-center gap-2">
                              <Award className="h-4 w-4 text-yellow-400" />
                              Key Achievements
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              {exp.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-sm font-mono"
                                >
                                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                  <span className="text-slate-300 font-medium">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Responsibilities */}
                          <div>
                            <h4 className="font-semibold font-mono text-white mb-3 flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-blue-400" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-slate-300 text-sm font-mono"
                                >
                                  <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold font-mono text-white mb-3 flex items-center gap-2">
                              <Code className="h-4 w-4 text-blue-400" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech, idx) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className={`text-xs bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-blue-500/50 font-mono hover:scale-105 transition-transform duration-200 animate-fade-in-up`}
                                  style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Stats */}
        </div>

        <style>{`
                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fade-in-up {
                        animation: fade-in-up 0.6s ease-out forwards;
                        opacity: 0;
                    }

                    .delay-0 { animation-delay: 0ms; }
                    .delay-200 { animation-delay: 200ms; }
                    .delay-400 { animation-delay: 400ms; }
                    .delay-600 { animation-delay: 600ms; }
                    .delay-1000 { animation-delay: 1000ms; }
                `}</style>
      </section>
    </div>
  );
}
