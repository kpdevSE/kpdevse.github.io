import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  ArrowUpRight,
  Globe,
  Calendar,
  MessageCircle,
  Instagram,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "kanishkapasindu6@gmail.com",
      href: "kanishkapasindu6@gmail.com",
      description: "Send me an email",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "104/25,Medemulla,Minuwangoda,Gampaha",
      href: "#",
      description: "Based in the Bay Area",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Calendar,
      label: "Schedule",
      value: "Book a call",
      href: "#",
      description: "Let's discuss your project",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kpdevSE",
      username: "kpdevSE",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kanishka-pasindu-b976a8252/",
      username: "Kanishka Pasindu",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: Instagram,
      label: "Instargram",
      href: "https://www.instagram.com/kanishka_pasindu?igsh=MXVpcHRpcXdtODk%3D&utm_source=qr",
      username: "_kanishka_pasindu_",
      gradient: "from-purple-600 to-indigo-800",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/stephan.wick.54?mibextid=wwXIfr",
      username: "kanishak paisndu",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: Globe,
      label: "ZENTRIX",
      href: "https://zentrix-solution.vercel.app/",
      username: "Company Website",
      gradient: "from-pink-600 to-pink-800",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 dark:bg-slate-950 py-20 px-4 relative overflow-hidden"
    >
      {/* Technical grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 dark:bg-slate-800/50 border border-slate-700/50 dark:border-slate-700/50 rounded-lg backdrop-blur-sm mb-6">
            <Code2 className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-mono font-medium text-slate-300 dark:text-slate-300">
              &gt; contact.init()
            </span>
          </div>
          <h2 className="text-6xl font-bold font-mono text-white mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-0.5 bg-blue-500 mx-auto"></div>
          <p className="text-xl text-slate-300 mt-8 max-w-2xl mx-auto leading-relaxed font-mono">
            <span className="text-slate-500">//</span> Ready to bring your ideas
            to life? I'm always excited to discuss new opportunities and
            creative projects.
          </p>
        </div>

        {/* Contact Methods */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactMethods.map((method, index) => (
            <Card
              key={method.label}
              className={`group cursor-pointer border border-slate-700/50 shadow-lg hover:shadow-2xl hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 bg-slate-900/50 backdrop-blur-sm overflow-hidden ${
                hoveredCard === index ? "scale-105 border-blue-500/50" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative">
                <div
                  className={`w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-transform duration-300`}
                >
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mb-2 group-hover:text-blue-400 transition-all duration-300">
                  {method.label}
                </h3>
                <p className="text-slate-400 mb-2 font-mono text-sm">
                  {method.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold font-mono text-slate-300">
                    {method.value}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-mono text-white mb-4">
              Follow My Journey
            </h3>
            <p className="text-slate-300 font-mono">
              <span className="text-slate-500">//</span> Connect with me on
              social platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <Card
                key={social.label}
                className="group cursor-pointer border border-slate-700/50 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 bg-slate-900/50 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6">
                  <a href={social.href} target="blank">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/50 transition-transform duration-300`}
                      >
                        <social.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold font-mono text-white group-hover:text-blue-400 transition-all duration-300">
                          {social.label}
                        </h4>
                        <p className="text-sm text-slate-400 font-mono">
                          {social.username}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold font-mono text-white mb-4">
                Ready to Start Something Amazing?
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto font-mono">
                <span className="text-slate-500">//</span> Whether it's a new
                project, collaboration, or just a friendly chat about technology
                and design.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-mono"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
