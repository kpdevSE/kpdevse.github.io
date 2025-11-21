import { useState } from "react";
import {
  MessageCircle,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  X,
  Share2,
} from "lucide-react";

export default function FloatingSocialButtons() {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate circular positions for 6 buttons
  const radius = 120; // Distance from center (increased for better visibility)
  const angles = [0, 60, 120, 180, 240, 300]; // 6 buttons evenly spaced (360/6 = 60 degrees each)

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/94715644565",
      color: "bg-green-600 hover:bg-green-700 border-green-500",
      angle: angles[0], // 0° - Right
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kpdevSE",
      color: "bg-slate-800 hover:bg-slate-700 border-slate-600",
      angle: angles[1], // 60° - Top-right
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kanishka-pasindu-b976a8252/",
      color: "bg-blue-600 hover:bg-blue-700 border-blue-500",
      angle: angles[2], // 120° - Top-left
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/kanishka_pasindu?igsh=MXVpcHRpcXdtODk%3D&utm_source=qr",
      color:
        "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-purple-500",
      angle: angles[3], // 180° - Left
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/stephan.wick.54?mibextid=wwXIfr",
      color: "bg-blue-600 hover:bg-blue-700 border-blue-500",
      angle: angles[4], // 240° - Bottom-left
    },
    {
      icon: Globe,
      label: "Zentrix",
      href: "https://zentrix-solution.vercel.app/",
      color: "bg-pink-600 hover:bg-pink-700 border-pink-500",
      angle: angles[5], // 300° - Bottom-right
    },
  ];

  // Convert angle to translate values
  const getPosition = (angle) => {
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    return {
      x: Math.round(x),
      y: Math.round(y),
    };
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Social Media Buttons - Centered on screen in a circle */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        {socialLinks.map((social, index) => {
          const pos = getPosition(social.angle);
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute w-14 h-14 ${
                social.color
              } border-2 text-white rounded-xl shadow-lg shadow-black/20 flex items-center justify-center cursor-pointer group pointer-events-auto transition-all duration-500 ease-out ${
                isOpen
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-0 rotate-180"
              }`}
              style={{
                transform: isOpen
                  ? `translate(${pos.x}px, ${pos.y}px) scale(1)`
                  : "translate(0, 0) scale(0)",
                transitionDelay: isOpen
                  ? `${index * 80}ms`
                  : `${(socialLinks.length - index - 1) * 50}ms`,
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="sr-only">{social.label}</span>
              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-3 py-1.5 bg-slate-900/95 backdrop-blur-sm text-white text-xs font-mono rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-slate-700 shadow-xl z-50">
                &gt; {social.label.toLowerCase()}
                <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-900"></span>
              </span>
            </a>
          );
        })}
      </div>

      {/* Main Toggle Button - Fixed bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-xl shadow-xl transition-all duration-300 ease-out flex items-center justify-center group border-2 ${
            isOpen
              ? "bg-slate-900 hover:bg-slate-800 border-blue-500/50 shadow-blue-500/20"
              : "bg-blue-600 hover:bg-blue-700 border-blue-500 shadow-blue-500/30"
          }`}
          aria-label="Toggle social media links"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          ) : (
            <Share2 className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
          )}
        </button>
      </div>
    </>
  );
}
