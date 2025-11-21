import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  BookOpen,
  Trophy,
  Star,
  CheckCircle,
  MapPin,
  Clock,
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

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [certProgress, setCertProgress] = useState(0);
  const sectionRef = useRef(null);

  const education = [
    {
      degree: "Higher Diploma in Computing and Software Engineering",
      institution: "Cardiff Metropolitan University",
      year: "2022 - 2024",
      location: "Cardiff, UK",
      description:
        "Completed a comprehensive program covering web technologies, databases, and modern software engineering practices.",
      highlights: [
        "Skills gained: HTML5, CSS, Tailwind CSS, React.js, JavaScript, JavaScript Frameworks and Libraries, MySQL, PHP, PhpMyAdmin, Next.js, MongoDB, Prisma ORM",
        "Strong foundation in full-stack development and database management",
      ],
      courses: [
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "JavaScript Frameworks",
        "Backend Development with PHP and Node.js",
      ],
      icon: GraduationCap,
      gradient: "from-indigo-500 to-purple-600",
      duration: "2 years",
    },
    {
      degree: "BSc (Hons) Software Engineering (In Progress)",
      institution: "Cardiff Metropolitan University",
      year: "2024 - Present",
      location: "Cardiff, UK",
      description:
        "Currently pursuing an advanced software engineering degree with focus on modern development methodologies and tools.",
      highlights: [
        "Building on skills in React.js, Next.js, JavaScript, and backend technologies",
        "Engaged in practical projects and collaborative software development",
      ],
      courses: [
        "Advanced Software Engineering",
        "Cloud Computing",
        "Data Structures and Algorithms",
        "Project Management",
      ],
      icon: GraduationCap,
      gradient: "from-indigo-500 to-purple-600",
      duration: "Ongoing",
    },
  ];

  const certifications = [
    {
      name: "Higher Diploma in Computing and Software Engineering",
      issuer: "Cardiff Metropolitan University",
      year: "2024",
      level: "Higher Diploma",
      color: "bg-indigo-600",
    },
    {
      name: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      year: "2020",
      level: "Certified",
      color: "bg-yellow-400",
    },
    {
      name: "Introduction to Programming Using HTML and CSS",
      issuer: "HackerRank",
      year: "2020",
      level: "Certified",
      color: "bg-blue-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate certification progress
          setTimeout(() => {
            let progress = 0;
            const interval = setInterval(() => {
              progress += 2;
              setCertProgress(progress);
              if (progress >= 100) {
                clearInterval(interval);
              }
            }, 20);
          }, 800);
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
                &gt; education.load()
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-0.5 bg-blue-500 mx-auto"></div>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto font-mono">
              <span className="text-slate-500">//</span> Continuous learning and
              professional development through formal education and industry
              certifications
            </p>
          </div>

          {/* Education Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 delay-${
                    index * 200
                  } transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  onMouseEnter={() => setActiveCard(`edu-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <Card
                    className={`h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:border-blue-500/50 ${
                      activeCard === `edu-${index}`
                        ? "shadow-2xl scale-105 border-blue-500/50"
                        : "shadow-lg"
                    } bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden group`}
                  >
                    {/* Technical header accent */}
                    <div className={`h-0.5 bg-blue-500`}></div>

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-4 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 shadow-lg flex-shrink-0`}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors leading-tight">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold font-mono text-slate-300 mt-1">
                            {edu.institution}
                          </CardDescription>

                          {/* Meta information */}
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-400 font-mono">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-blue-400" />
                              <span className="font-medium">{edu.year}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-blue-400" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-blue-400" />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed font-mono">
                        <span className="text-slate-500">//</span>{" "}
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold font-mono text-white mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          Key Highlights
                        </h4>
                        <div className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm font-mono"
                            >
                              <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Courses */}
                      <div>
                        <h4 className="font-semibold font-mono text-white mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-blue-400" />
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <Badge
                              key={course}
                              variant="outline"
                              className={`text-xs bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-blue-500/50 font-mono hover:scale-105 transition-transform duration-200 animate-fade-in-up`}
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <div
            className={`transition-all duration-700 delay-400 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 shadow-xl overflow-hidden">
              {/* Header with technical accent */}
              <div className="h-0.5 bg-blue-500"></div>

              <CardHeader className="text-center pb-8">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold font-mono text-white">
                  <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  Professional Certifications
                </CardTitle>
                <p className="text-slate-300 mt-2 font-mono">
                  <span className="text-slate-500">//</span> Industry-recognized
                  credentials and continuous learning
                </p>

                {/* Progress indicator */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-slate-300 mb-2 font-mono">
                    <span>Certification Progress</span>
                    <span>{Math.round(certProgress)}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 border border-slate-700">
                    <div
                      className="h-2 bg-blue-500 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-blue-500/50"
                      style={{ width: `${certProgress}%` }}
                    ></div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`group p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up cursor-pointer`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform`}
                        ></div>
                        <div className="flex-1">
                          <h4 className="font-semibold font-mono text-white text-sm leading-tight group-hover:text-blue-400 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 font-mono">
                            {cert.issuer}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge
                              variant="outline"
                              className="text-xs bg-slate-900 border-slate-700 text-slate-300 font-mono"
                            >
                              {cert.level}
                            </Badge>
                            <span className="text-xs text-slate-400 font-medium font-mono">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary stats */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                      {
                        label: "Total Certifications",
                        value: certifications.length,
                        icon: Trophy,
                      },
                      { label: "Professional Level", value: "3", icon: Star },
                      { label: "Latest Year", value: "2024", icon: Calendar },
                      { label: "Cloud Platforms", value: "2", icon: Award },
                    ].map(({ label, value, icon: Icon }, index) => (
                      <div key={label} className="p-3">
                        <Icon className="h-5 w-5 mx-auto mb-2 text-blue-400" />
                        <div className="text-xl font-bold font-mono text-white">
                          {value}
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
                    .delay-2000 { animation-delay: 2000ms; }
                `}</style>
      </section>
    </div>
  );
}
