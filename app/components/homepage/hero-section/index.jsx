// "use client";

// import { useEffect, useState } from "react";
// import { personalData } from "@/utils/data/personal-data";
// import Image from "next/image";
// import Link from "next/link";
// import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";

// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaTwitterSquare } from "react-icons/fa";
// import { RiContactsFill } from "react-icons/ri";
// import { SiLeetcode } from "react-icons/si";
// import { MdDownload } from "react-icons/md";

// const codeLines = [
//   { text: "const coder = {", type: "keyword" },
//   { text: `  name: '${personalData.name}',`, type: "string" },
//   {
//     text: `  skills: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'Model Evaluation'],`,
//     type: "skills",
//   },
//   { text: "  hardWorker: true,", type: "trait", tooltip: "Always goes the extra mile" },
//   { text: "  quickLearner: true,", type: "trait", tooltip: "Learns new skills rapidly" },
//   { text: "  problemSolver: true,", type: "trait", tooltip: "Enjoys solving complex challenges" },
//   { text: "  teamWorker: true,", type: "trait", tooltip: "Works well in teams" },
//   { text: "  hireable: function() {", type: "keyword" },
//   { text: "    return (", type: "plain" },
//   { text: "      this.hardWorker &&", type: "plain" },
//   { text: "      this.quickLearner &&", type: "plain" },
//   { text: "      this.problemSolver &&", type: "plain" },
//   { text: "      this.teamWorker &&", type: "plain" },
//   { text: "      this.skills.length >= 5", type: "plain" },
//   { text: ");  };  };", type: "plain" },
//   { text: "", type: "plain" },
//   { text: "", type: "plain" },
// ];

// export default function HeroSection() {
//   const [displayedLines, setDisplayedLines] = useState([]);
//   const [currentLine, setCurrentLine] = useState("");
//   const [lineIndex, setLineIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   // Typewriter animation
//   useEffect(() => {
//     if (lineIndex < codeLines.length) {
//       if (charIndex < codeLines[lineIndex].text.length) {
//         const timeout = setTimeout(() => {
//           setCurrentLine((prev) => prev + codeLines[lineIndex].text[charIndex]);
//           setCharIndex((prev) => prev + 1);
//         }, 40);
//         return () => clearTimeout(timeout);
//       } else {
//         setDisplayedLines((prev) => [
//           ...prev,
//           { ...codeLines[lineIndex], text: currentLine }
//         ]);
//         setCurrentLine("");
//         setCharIndex(0);
//         setLineIndex((prev) => prev + 1);
//       }
//     } else {
//       const restart = setTimeout(() => {
//         setDisplayedLines([]);
//         setCurrentLine("");
//         setCharIndex(0);
//         setLineIndex(0);
//       }, 15000);
//       return () => clearTimeout(restart);
//     }
//   }, [charIndex, lineIndex]);

//   return (
//     <section className="relative flex flex-col items-center justify-center py-6 px-4 lg:px-0">
//       <Image
//         src="/hero.svg"
//         alt="Hero Background"
//         width={1572}
//         height={795}
//         className="absolute -top-[98px] -z-10"
//       />

//       {/* Unified box */}
//       <div className="max-w-4xl w-full from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden flex flex-col">
//         {/* Noise overlay */}
//         <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] animate-noise"></div>

//         {/* Gradient top border */}
//         <div className="flex flex-row">
//           <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//           <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//         </div>

//         {/* Window buttons */}
//         <div className="px-4 lg:px-8 py-5">
//           <div className="flex flex-row space-x-2">
//             <div className="h-3 w-3 rounded-full bg-red-400"></div>
//             <div className="h-3 w-3 rounded-full bg-orange-400"></div>
//             <div className="h-3 w-3 rounded-full bg-green-200"></div>
//           </div>
//         </div>

//         {/* Top hero content - Slide down */}
//         <div className="flex flex-col items-center text-center px-6 pb-8 animate-slideDown">
//           <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
//             Hello, This is{" "}
//             <span className=" text-pink-500">{personalData.name}</span>, a{" "}
//             <span className=" text-[#16f2b3]">{personalData.designation}</span>.
//           </h1>

//           {/* Social Links */}
//           <div className="my-6 flex items-center gap-5">
//             <Link href={personalData.github} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
//               <BsGithub size={28} />
//             </Link>
//             <Link href={personalData.linkedIn} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
//               <BsLinkedin size={28} />
//             </Link>
//             <Link href={personalData.leetcode} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
//               <SiLeetcode size={28} />
//             </Link>
//             <Link href={personalData.twitter} target="_blank" className="transition-all text-pink-500 hover:scale-125 duration-300">
//               <FaTwitterSquare size={28} />
//             </Link>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-wrap justify-center gap-3">
//             <Link
//               href="#contact"
//               className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
//             >
//               <button className="px-4 py-3 bg-[#0d1224] rounded-full border-none text-sm font-medium uppercase tracking-wider text-white flex items-center gap-1 hover:gap-3">
//                 <span>Contact me</span>
//                 <RiContactsFill size={16} />
//               </button>
//             </Link>

//             <Link
//               className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-3 text-sm font-medium uppercase tracking-wider text-white"
//               role="button"
//               target="_blank"
//               href={personalData.resume}
//             >
//               <span>Get Resume</span>
//               <MdDownload size={16} />
//             </Link>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-[#1b2c68a0] my-4"></div>

//         {/* Code typing area */}
//         <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 flex justify-center">
//           <code className="font-mono text-xs md:text-sm lg:text-base leading-6 text-center">
//             {displayedLines.map((line, i) => {
//               const content = (
//                 <span
//                   className={`block ${
//                     line.type === "keyword"
//                       ? "text-pink-500 animate-glow"
//                       : line.type === "string"
//                       ? "text-amber-300"
//                       : line.type === "skills"
//                       ? "text-cyan-400"
//                       : line.type === "trait"
//                       ? "text-white"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   {line.text}
//                 </span>
//               );
//               return line.tooltip ? (
//                 <Tippy key={i} content={line.tooltip} arrow={false}>
//                   {content}
//                 </Tippy>
//               ) : (
//                 <div key={i}>{content}</div>
//               );
//             })}
//             {currentLine && <span className="block text-white">{currentLine}</span>}
//             <span className="text-white animate-blink">|</span>
//           </code>
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes blink {
//           0%, 50%, 100% { opacity: 1; }
//           25%, 75% { opacity: 0; }
//         }
//         .animate-blink {
//           animation: blink 1s infinite;
//         }
//         @keyframes glow {
//           0% { text-shadow: 0 0 4px rgba(236,72,153,0.7); }
//           100% { text-shadow: none; }
//         }
//         .animate-glow {
//           animation: glow 0.8s ease-in-out;
//         }
//         @keyframes noise {
//           0%, 100% { transform: translate(0,0); }
//           20% { transform: translate(-1px, 1px); }
//           40% { transform: translate(1px, -1px); }
//           60% { transform: translate(-0.5px, 0.5px); }
//           80% { transform: translate(0.5px, -0.5px); }
//         }
//         .animate-noise {
//           animation: noise 0.9s infinite;
//         }
//         @keyframes slideDown {
//           0% { opacity: 0; transform: translateY(-20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.6s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// }
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaCode,
  FaProjectDiagram,
  FaCubes,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiApacheairflow,
  SiApachespark,
  SiAmazonaws,
  SiAwslambda,
  SiScikitlearn,
  SiXgboost,
} from "react-icons/si";

import Marquee from "react-fast-marquee";

const skillsData = [
  "Python",
  "SQL",
  "PySpark",
  "Apache Spark",
  "Apache Airflow",
  "ETL",
  "Data Pipelines",
  "AWS",
  "Amazon S3",
  "AWS Lambda",
  "PostgreSQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Linux",
];

const skillIcons = {
  Python: FaPython,
  SQL: FaDatabase,
  Java: FaJava,

  PySpark: SiApachespark,
  "Apache Spark": SiApachespark,
  "Apache Airflow": SiApacheairflow,

  ETL: FaProjectDiagram,
  "Data Pipelines": FaProjectDiagram,

  AWS: SiAmazonaws,
  "Amazon S3": SiAmazonaws,
  "AWS Lambda": SiAwslambda,

  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,

  Pandas: SiPandas,
  NumPy: SiNumpy,

  "Scikit-learn": SiScikitlearn,

  Git: FaGitAlt,
  Linux: FaLinux,

  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,

  "Data Modeling": FaCubes,
  "Data Warehousing": FaDatabase,
  "Feature Engineering": FaProjectDiagram,
};

const getSkillIcon = (skill) => {
  return skillIcons[skill] || FaCode;
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-[90vh]
        lg:min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-4
        sm:px-6
        lg:px-12
        overflow-hidden
        pt-20
        lg:pt-24
        pb-8
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}
      <Image
        src="/hero.svg"
        alt="Background"
        fill
        priority
        className="
          object-cover
          opacity-10
          -z-10
        "
      />

      {/* =========================================
          BACKGROUND GLOWS
      ========================================= */}
      <div
        className="
          absolute
          top-[20%]
          left-[35%]
          w-[300px]
          h-[300px]
          bg-pink-500/10
          blur-[120px]
          rounded-full
          -z-10
        "
      />

      <div
        className="
          absolute
          bottom-[5%]
          right-[15%]
          w-[300px]
          h-[300px]
          bg-[#16f2b3]/10
          blur-[120px]
          rounded-full
          -z-10
        "
      />

      {/* =========================================
          MAIN HERO
      ========================================= */}
      <div
        className="
          max-w-6xl
          mx-auto
          w-full
          flex-1
          flex
          items-center
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
            w-full
          "
        >

          {/* =======================================
              LEFT SIDE
          ======================================= */}
          <div
            className="
              order-2
              lg:order-1
              text-center
              lg:text-left
              relative
              z-20
            "
          >

            {/* EXPERIENCE BADGE */}
            <div
              className="
                relative
                z-20
                inline-flex
                items-center
                rounded-full
                border
                border-pink-500/40
                bg-[#1a0d2e]
                px-4
                py-2
                mb-6
                shadow-[0_0_20px_rgba(236,72,153,0.15)]
              "
            >
              <span
                className="
                  text-xs
                  md:text-sm
                  text-pink-400
                  font-semibold
                  uppercase
                  tracking-wider
                  whitespace-nowrap
                "
              >
                2.1+ YOE in Software Engineering-Data
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="
                text-3xl
                sm:text-2xl
                md:text-2xl
                lg:text-4xl
                font-bold
                leading-tight
                text-white
              "
            >
              Hi, I&apos;m{" "}
              <span className="text-white font-semibold">
                {personalData.name}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                text-gray-400
                text-base
                md:text-lg
                max-w-xl
                leading-relaxed
                mx-auto
                lg:mx-0
              "
            >
              2.1+ years into Software engineering, still curious,
              still building — mostly data pipelines, and whatever interesting
              problem comes next.
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-4
                mt-8
              "
            >
              <Link href="#projects">
                <button
                  className="
                    group
                    px-7
                    py-3
                    rounded-full
                    bg-white
                    text-black
                    font-semibold
                    flex
                    items-center
                    gap-2
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  View My Work

                  <HiArrowRight
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </button>
              </Link>

              <Link
                href={personalData.resume}
                target="_blank"
              >
                <button
                  className="
                    px-7
                    py-3
                    rounded-full
                    border
                    border-white/30
                    text-white
                    font-semibold
                    flex
                    items-center
                    gap-2
                    hover:bg-white/10
                    transition-all
                    duration-300
                  "
                >
                  Hire Me
                  <MdDownload />
                </button>
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div
              className="
                flex
                items-center
                justify-center
                lg:justify-start
                gap-5
                mt-8
              "
            >
              <Link
                href={personalData.github}
                target="_blank"
                className="
                  text-gray-400
                  hover:text-pink-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <BsGithub size={24} />
              </Link>

              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="
                  text-gray-400
                  hover:text-pink-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <BsLinkedin size={24} />
              </Link>

              <Link
                href={personalData.leetcode}
                target="_blank"
                className="
                  text-gray-400
                  hover:text-pink-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <SiLeetcode size={24} />
              </Link>

              <Link
                href={personalData.twitter}
                target="_blank"
                className="
                  text-gray-400
                  hover:text-pink-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                <FaTwitterSquare size={24} />
              </Link>
            </div>
          </div>

          {/* =======================================
              RIGHT SIDE
          ======================================= */}
          <div
            className="
              order-1
              lg:order-2
              flex
              justify-center
              lg:justify-end
            "
          >
            <div className="relative">

              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  -z-10
                  bg-pink-500/20
                  blur-[120px]
                  rounded-full
                "
              />

              {/* IMAGE CARD */}
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#1b2c68a0]
                  bg-[#0d1224]
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-pink-500/50
                  hover:shadow-[0_20px_60px_rgba(236,72,153,0.25)]
                "
              >

                <Image
                  src="/profile.png"
                  alt={personalData.name}
                  width={400}
                  height={230}
                  priority
                  className="
                    object-cover
                    max-w-full
                    h-auto
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* SHINE */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    bg-gradient-to-tr
                    from-transparent
                    via-white/10
                    to-transparent
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    bg-gradient-to-t
                    from-black
                    via-black/70
                    to-transparent
                    p-4
                    md:p-6
                  "
                >
                  <p
                    className="
                      text-[#16f2b3]
                      font-semibold
                      text-sm
                      uppercase
                      tracking-wide
                    "
                  >
                    Available For Work
                  </p>

                  <h3
                    className="
                      text-white
                      text-lg
                      md:text-xl
                      font-bold
                      mt-2
                    "
                  >
                    Let&apos;s collaborate on a project!
                  </h3>

                  <p
                    className="
                      text-gray-300
                      text-sm
                      mt-2
                    "
                  >
                    Building scalable applications &
                    AI solutions.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          HERO SKILLS STRIP
      ========================================= */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-7xl
          mx-auto
          mt-10
          lg:mt-6
        "
      >

        {/* LABEL */}
        <div className="flex items-center justify-center mb-3">
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-gray-500
            "
          >
            Tools I Work With
          </span>
        </div>

        {/* FADE CONTAINER */}
        <div
          className="
            relative
            overflow-hidden
            py-2
          "
        >

          {/* LEFT FADE */}
          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-20
              bg-gradient-to-r
              from-[#0d1224]
              to-transparent
              z-10
              pointer-events-none
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-20
              bg-gradient-to-l
              from-[#0d1224]
              to-transparent
              z-10
              pointer-events-none
            "
          />

          <Marquee
            gradient={false}
            speed={45}
            pauseOnHover={true}
            direction="left"
          >
            {skillsData.map((skill, index) => {
              const Icon = getSkillIcon(skill);

              return (
                <div
                  key={`${skill}-${index}`}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    mx-3
                    sm:mx-4
                    px-4
                    py-2

                    rounded-full

                    border
                    border-[#1f2a50]

                    bg-[#11152c]/70

                    backdrop-blur-sm

                    transition-all
                    duration-300

                    hover:border-[#16f2b3]/50
                    hover:bg-[#16f2b3]/10
                  "
                >
                  <Icon
                    size={17}
                    className="
                      text-violet-400
                      transition-colors
                      duration-300
                      group-hover:text-[#16f2b3]
                    "
                  />

                  <span
                    className="
                      text-xs
                      sm:text-sm
                      text-gray-300
                      whitespace-nowrap
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  >
                    {skill}
                  </span>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}