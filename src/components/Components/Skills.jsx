import React, { useState } from "react";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  Zap,
  Code2,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skills = {
    Frontend: {
      techs: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "ShadCn UI",
        "HTML/CSS",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    Backend: {
      techs: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
    },
    Database: {
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
    },
    DevOps: {
      techs: ["Docker", "GitHub Actions", "Linux"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
    },
  };

  const icons = {
    Frontend: <Code className="h-8 w-8" />,
    Backend: <Server className="h-8 w-8" />,
    Database: <Database className="h-8 w-8" />,
    DevOps: <Wrench className="h-8 w-8" />,
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950">
      <section id="skills" className="py-24 px-4 relative overflow-hidden">
        {/* Technical grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 dark:bg-slate-800/50 border border-slate-700/50 dark:border-slate-700/50 rounded-lg backdrop-blur-sm mb-6">
              <Code2 className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-mono font-medium text-slate-300 dark:text-slate-300">
                &gt; skills.load()
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold font-mono text-white mb-6">
              Skills & Technologies
            </h2>

            <p className="text-xl text-slate-300 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-mono">
              <span className="text-slate-500">//</span> Crafting digital
              experiences with cutting-edge technologies and modern development
              practices
            </p>

            <div className="flex justify-center mt-8">
              <div className="w-24 h-0.5 bg-blue-500"></div>
            </div>
          </div>

          {/* Skills Layout - No Cards */}
          <div className="space-y-12">
            {Object.entries(skills).map(([category, data], index) => (
              <div
                key={category}
                className="group"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg group-hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-blue-400">{icons[category]}</div>
                    <h3 className="text-2xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors">
                      {category}
                    </h3>
                    <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <div className="flex-1 h-px bg-slate-700/50 group-hover:bg-blue-500/50 transition-colors"></div>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {data.techs.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className="group/tech relative"
                      style={{
                        animationDelay: `${index * 50 + techIndex * 30}ms`,
                      }}
                    >
                      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer">
                        {hoveredCategory === category && (
                          <Zap className="h-4 w-4 text-blue-400 flex-shrink-0 group-hover/tech:scale-110 transition-transform" />
                        )}
                        <span className="font-mono text-sm text-slate-300 group-hover/tech:text-blue-400 transition-colors">
                          {tech}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="flex justify-center mt-16">
            <div className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono font-medium text-slate-300">
                &gt; always.learning()
              </span>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
