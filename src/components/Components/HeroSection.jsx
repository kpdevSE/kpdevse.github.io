import React, { useState, useEffect } from "react";
import {
  Download,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    "Full Stack Web Developer",
    "MERN Stack Specialist",
    "UI/UX Enthusiast",
    "Next.js Developer",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Pause at end of typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kanishka Pasindu Mudithananda-Software Engineer.pdf";
    link.download = "Kanishka Pasindu Mudithananda-Software Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 relative overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Technical Badge */}
            <div className="mb-8 sm:mb-10">
              <div className="items-center gap-2 px-4 py-2 bg-slate-900/50 dark:bg-slate-800/50 border border-slate-700/50 dark:border-slate-700/50 rounded-lg mb-8 backdrop-blur-sm text-center flex justify-center w-[270px] mx-auto">
                <Code2 className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-mono font-medium text-slate-300 dark:text-slate-300">
                  &gt; portfolio.init()
                </span>
              </div>

              {/* Name with technical styling */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white dark:text-white font-mono text-center">
                <span className="inline-block animate-fade-in-up text-slate-400">
                  const name = "
                </span>
                <span className="relative inline-block animate-fade-in-up delay-300 text-white">
                  Kanishka
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 animate-scale-x delay-700"></span>
                </span>
                <span className="inline-block animate-fade-in-up delay-500 text-slate-400">
                  ";
                </span>
              </h1>

              {/* Typewriter role animation */}
              <div className="min-h-[4.5rem] sm:min-h-[5rem] flex items-center justify-center mb-6 sm:mb-8 px-2">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-green-400 animate-fade-in-up delay-500" />
                    <span className="text-slate-500 text-base sm:text-lg font-mono">
                      $
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-2xl md:text-3xl text-slate-300 dark:text-slate-300 font-mono font-medium animate-fade-in-up delay-500 max-w-sm sm:max-w-none">
                    <span className="text-white">{displayedText}</span>
                    <span className="inline-block w-0.5 h-6 sm:h-8 bg-blue-500 ml-1 animate-blink align-middle"></span>
                  </h2>
                </div>
              </div>

              {/* Description with code-like styling */}
              <div
                className={`max-w-2xl mx-auto mb-10 sm:mb-12 transition-all duration-700 delay-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
              >
                <p className="text-base sm:text-lg text-slate-400 dark:text-slate-400 leading-relaxed font-mono">
                  <span className="text-slate-500">//</span>{" "}
                  <span className="text-slate-300">
                    I create beautiful, responsive web applications with modern
                    technologies. Passionate about clean code, user experience,
                    and solving complex problems that make a real difference.
                  </span>
                </p>
              </div>
            </div>

            {/* Action buttons with technical styling */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 transition-all duration-700 delay-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg font-semibold px-8 border border-blue-500/50"
                onClick={downloadResume}
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/50 backdrop-blur-sm rounded-lg font-semibold px-8"
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social links with technical styling */}
            <div
              className={`flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-700 delay-1200 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/kpdevSE",
                  label: "GitHub",
                  color:
                    "hover:text-white hover:border-slate-600 hover:bg-slate-800",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kanishka-pasindu-b976a8252/",
                  label: "LinkedIn",
                  color:
                    "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10",
                },
                {
                  icon: Mail,
                  href: "mailto:kanishkapasindu6@gmail.com",
                  label: "Email",
                  color:
                    "hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10",
                },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 rounded-lg bg-slate-900/50 dark:bg-slate-900/50 border border-slate-700/50 dark:border-slate-700/50 ${color} transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm group animate-fade-in-up`}
                  style={{ animationDelay: `${1400 + index * 100}ms` }}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 text-slate-400 dark:text-slate-400 group-hover:scale-110 transition-all" />
                </a>
              ))}
            </div>

            {/* Scroll indicator with technical styling */}
            <div
              className={`transition-all duration-700 delay-1500 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center text-slate-500 dark:text-slate-500">
                <span className="text-sm mb-2 font-mono font-medium">
                  &gt; scroll.down()
                </span>
                <ArrowDown className="h-5 w-5 animate-bounce text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

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

                @keyframes scale-x {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }

                @keyframes blink {
                    0%, 50% {
                        opacity: 1;
                    }
                    51%, 100% {
                        opacity: 0;
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animate-scale-x {
                    animation: scale-x 0.8s ease-out forwards;
                }

                .animate-blink {
                    animation: blink 1s infinite;
                }

                .delay-300 {
                    animation-delay: 300ms;
                }

                .delay-500 {
                    animation-delay: 500ms;
                }

                .delay-700 {
                    animation-delay: 700ms;
                }

                .delay-1000 {
                    animation-delay: 1000ms;
                }

                .delay-1200 {
                    animation-delay: 1200ms;
                }

                .delay-1400 {
                    animation-delay: 1400ms;
                }

                .delay-1500 {
                    animation-delay: 1500ms;
                }

                .delay-2000 {
                    animation-delay: 2000ms;
                }
            `}</style>
    </div>
  );
}
