"use client";

import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";

const codeLines = [
  { text: "const coder = {", type: "keyword" },
  { text: `  name: '${personalData.name}',`, type: "string" },
  {
    text: `  skills: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'Model Evaluation'],`,
    type: "skills",
  },
  { text: "  hardWorker: true,", type: "trait", tooltip: "Always goes the extra mile" },
  { text: "  quickLearner: true,", type: "trait", tooltip: "Learns new skills rapidly" },
  { text: "  problemSolver: true,", type: "trait", tooltip: "Enjoys solving complex challenges" },
  { text: "  teamWorker: true,", type: "trait", tooltip: "Works well in teams" },
  { text: "  hireable: function() {", type: "keyword" },
  { text: "    return (", type: "plain" },
  { text: "      this.hardWorker &&", type: "plain" },
  { text: "      this.quickLearner &&", type: "plain" },
  { text: "      this.problemSolver &&", type: "plain" },
  { text: "      this.teamWorker &&", type: "plain" },
  { text: "      this.skills.length >= 5", type: "plain" },
  { text: ");  };  };", type: "plain" },
  { text: "", type: "plain" },
  { text: "", type: "plain" },
];

export default function HeroSection() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter animation
  useEffect(() => {
    if (lineIndex < codeLines.length) {
      if (charIndex < codeLines[lineIndex].text.length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + codeLines[lineIndex].text[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        setDisplayedLines((prev) => [
          ...prev,
          { ...codeLines[lineIndex], text: currentLine }
        ]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    } else {
      const restart = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex(0);
      }, 15000);
      return () => clearTimeout(restart);
    }
  }, [charIndex, lineIndex]);

  return (
    <section className="relative flex flex-col items-center justify-center py-6 px-4 lg:px-0">
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      {/* Unified box */}
      <div className="max-w-4xl w-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden flex flex-col">
        {/* Noise overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] animate-noise"></div>

        {/* Gradient top border */}
        <div className="flex flex-row">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        {/* Window buttons */}
        <div className="px-4 lg:px-8 py-5">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>

        {/* Top hero content - Slide down */}
        <div className="flex flex-col items-center text-center px-6 pb-8 animate-slideDown">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Hello, This is{" "}
            <span className=" text-pink-500">{personalData.name}</span>, a{" "}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          {/* Social Links */}
          <div className="my-6 flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsGithub size={28} />
            </Link>
            <Link href={personalData.linkedIn} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <BsLinkedin size={28} />
            </Link>
            <Link href={personalData.leetcode} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <SiLeetcode size={28} />
            </Link>
            <Link href={personalData.twitter} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
              <FaTwitterSquare size={28} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-4 py-3 bg-[#0d1224] rounded-full border-none text-sm font-medium uppercase tracking-wider text-white flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-3 text-sm font-medium uppercase tracking-wider text-white"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1b2c68a0] my-4"></div>

        {/* Code typing area */}
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 flex justify-center">
          <code className="font-mono text-xs md:text-sm lg:text-base leading-6 text-center">
            {displayedLines.map((line, i) => {
              const content = (
                <span
                  className={`block ${
                    line.type === "keyword"
                      ? "text-pink-500 animate-glow"
                      : line.type === "string"
                      ? "text-amber-300"
                      : line.type === "skills"
                      ? "text-cyan-400"
                      : line.type === "trait"
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {line.text}
                </span>
              );
              return line.tooltip ? (
                <Tippy key={i} content={line.tooltip} arrow={false}>
                  {content}
                </Tippy>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
            {currentLine && <span className="block text-white">{currentLine}</span>}
            <span className="text-white animate-blink">|</span>
          </code>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes glow {
          0% { text-shadow: 0 0 4px rgba(236,72,153,0.7); }
          100% { text-shadow: none; }
        }
        .animate-glow {
          animation: glow 0.8s ease-in-out;
        }
        @keyframes noise {
          0%, 100% { transform: translate(0,0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(1px, -1px); }
          60% { transform: translate(-0.5px, 0.5px); }
          80% { transform: translate(0.5px, -0.5px); }
        }
        .animate-noise {
          animation: noise 0.9s infinite;
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
