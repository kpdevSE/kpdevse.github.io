import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Lightbulb,
  Users,
  Award,
  Coffee,
  GitBranch,
  Zap,
  Heart,
} from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef(null);

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-yellow-500" },
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Next.js", level: 80, color: "bg-purple-500" },
    { name: "Expree.js", level: 75, color: "bg-orange-500" },
    { name: "MongoDB", level: 85, color: "bg-green-600" },
    { name: "Prisma ORM", level: 60, color: "bg-red-600" },
    { name: "HTML", level: 90, color: "bg-indigo-600" },
    { name: "CSS", level: 90, color: "bg-pink-600" },
    { name: "Tailwind CSS", level: 80, color: "bg-sky-600" },
    { name: "Shadcn UI", level: 88, color: "bg-yellow-200" },
    { name: "Github", level: 85, color: "bg-gray-600" },
  ];

  const stats = [
    { icon: Code2, label: "Years Experience", value: 4, suffix: "+" },
    { icon: GitBranch, label: "Projects Completed", value: 50, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 25, suffix: "+" },
  ];

  const interests = [
    { icon: Coffee, label: "Coffee Enthusiast" },
    { icon: Lightbulb, label: "Problem Solver" },
    { icon: Award, label: "Continuous Learner" },
    { icon: Heart, label: "Open Source Contributor" },
  ];

  useEffect(() => {
    // No animations needed - static display only
  }, []);

  return (
    <div>
      <section
        id="about"
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 dark:bg-slate-800/50 border border-slate-700/50 dark:border-slate-700/50 rounded-lg mb-4 backdrop-blur-sm">
              <Code2 className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-mono font-medium text-slate-300 dark:text-slate-300">
                &gt; about.init()
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white">
              About Me
            </h2>
            <div className="w-20 h-0.5 bg-blue-500 mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Image & Stats */}
            <div>
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-80 h-80 bg-slate-900 border border-slate-700 rounded-2xl mx-auto shadow-2xl flex items-center justify-center text-8xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 filter drop-shadow-lg">
                    👨‍💻
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 rounded-full p-4 shadow-xl">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(({ icon: Icon, label, value, suffix }, index) => (
                  <div
                    key={label}
                    className="text-center p-4 bg-slate-900/50 backdrop-blur-sm rounded-lg shadow-lg border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-pointer"
                  >
                    <Icon className="h-6 w-6 text-blue-400 mx-auto mb-2 cursor-pointer" />
                    <div className="text-2xl font-bold text-white font-mono cursor-pointer">
                      {value}
                      {suffix}
                    </div>
                    <div className="text-xs text-slate-400 font-mono font-medium cursor-pointer">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 font-mono text-white text-center">
                Passionate Developer & Problem Solver
              </h3>

              <div className="space-y-6 text-slate-300 leading-relaxed text-center">
                <p className="text-lg font-mono">
                  <span className="text-slate-500">//</span> I'm a full-stack
                  developer with{" "}
                  <strong className="text-blue-400">
                    4+ years of experience
                  </strong>{" "}
                  building scalable web applications.
                </p>

                <p className="text-lg font-mono">
                  <span className="text-slate-500">//</span> I'm passionate
                  about creating{" "}
                  <strong className="text-blue-400">
                    intuitive user experiences
                  </strong>{" "}
                  and writing clean, maintainable code. When I'm not coding, you
                  can find me contributing to open-source projects, writing
                  technical articles, or exploring new technologies.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8 mb-8">
                <h4 className="text-lg font-semibold mb-4 font-mono text-white">
                  What I Love
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-3 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                    >
                      <Icon className="h-4 w-4 text-blue-400" />
                      <span className="text-sm font-mono font-medium text-slate-300">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold mb-4 font-mono text-white">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Prisma ORM",
                    "Express.js",
                    "MongoDB",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "Shadcn UI",
                    "GitHub",
                    "Vercel",
                    "Netlify",
                    "HTML",
                    "CSS",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50">
              <h4 className="text-2xl font-bold mb-8 text-center font-mono text-white">
                Skills & Expertise
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-mono text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 border border-slate-700">
                      <div
                        className={`h-2 rounded-full ${skill.color} shadow-lg shadow-blue-500/50`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
