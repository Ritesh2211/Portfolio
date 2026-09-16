// // @flow strict

// import { skillsData } from "@/utils/data/skills";
// import { skillsImage } from "@/utils/skill-image";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// function Skills() {
//   return (
//     <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex  items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Skills
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="w-full my-12">
//         <Marquee
//           gradient={false}
//           speed={80}
//           pauseOnHover={true}
//           pauseOnClick={true}
//           delay={0}
//           play={true}
//           direction="left"
//         >
//           {skillsData.map((skill, id) => (
//             <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
//               key={id}>
//               <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
//                 <div className="flex -translate-y-[1px] justify-center">
//                   <div className="w-3/4">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center gap-3 p-6">
//                   <div className="h-8 sm:h-10">
//                     <Image
//                       src={skillsImage(skill)?.src}
//                       alt={skill}
//                       width={40}
//                       height={40}
//                       className="h-full w-auto rounded-lg"
//                     />
//                   </div>
//                   <p className="text-white text-sm sm:text-lg">
//                     {skill}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Skills;


"use client";

import { skillsData } from "@/utils/data/skills";
import Marquee from "react-fast-marquee";

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

const skillIcons = {
  Python: FaPython,
  SQL: FaDatabase,
  Java: FaJava,

  PySpark: SiApachespark,
  "Apache Spark": SiApachespark,
  "Apache Airflow": SiApacheairflow,

  ETL: FaProjectDiagram,
  "Data Pipelines": FaProjectDiagram,
  "Data Modeling": FaCubes,
  "Data Warehousing": FaDatabase,
  "Batch Processing": FaCubes,
  "Data Validation": FaCode,
  "Data Quality": FaDatabase,

  AWS: SiAmazonaws,
  "Amazon S3": SiAmazonaws,
  "AWS Lambda": SiAwslambda,
  "AWS EC2": SiAmazonaws,
  "AWS IAM": SiAmazonaws,
  "Amazon RDS": SiAmazonaws,
  CloudWatch: SiAmazonaws,

  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,

  Pandas: SiPandas,
  NumPy: SiNumpy,

  Git: FaGitAlt,
  Linux: FaLinux,
  "REST APIs": FaCode,

  "Scikit-learn": SiScikitlearn,
  "Feature Engineering": FaProjectDiagram,

  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
};

const getSkillIcon = (skill) => {
  return skillIcons[skill] || FaCode;
};

function Skills() {
  return (
    <div
      id="skills"
      className="
        relative
        z-50
        border-t
        my-12
        lg:my-24
        border-[#25213b]
      "
    >
      {/* Background Glow */}
      <div
        className="
          w-[100px]
          h-[100px]
          bg-violet-100
          rounded-full
          absolute
          top-6
          left-[42%]
          translate-x-1/2
          filter
          blur-3xl
          opacity-20
        "
      />

      {/* Top Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div
            className="
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-violet-500
              to-transparent
              w-full
            "
          />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />

          <span
            className="
              bg-[#1a1443]
              w-fit
              text-white
              p-2
              px-5
              text-xl
              rounded-md
            "
          >
            Skills
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => {
            const Icon = getSkillIcon(skill);

            return (
              <div
                key={id}
                className="
                  w-36
                  min-w-fit
                  h-fit
                  flex
                  flex-col
                  items-center
                  justify-center
                  transition-all
                  duration-500
                  m-3
                  sm:m-5
                  rounded-lg
                  group
                  relative
                  hover:scale-[1.15]
                  cursor-pointer
                "
              >
                <div
                  className="
                    h-full
                    w-full
                    rounded-lg
                    border
                    border-[#1f223c]
                    bg-[#11152c]
                    transition-all
                    duration-500
                    group-hover:border-violet-500
                    group-hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]
                  "
                >
                  {/* Top Glow Line */}
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div
                        className="
                          h-[1px]
                          w-full
                          bg-gradient-to-r
                          from-transparent
                          via-violet-500
                          to-transparent
                        "
                      />
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-3
                      p-6
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        h-10
                        w-10
                        flex
                        items-center
                        justify-center
                        text-violet-400
                        transition-all
                        duration-500
                        group-hover:text-[#16f2b3]
                        group-hover:scale-110
                      "
                    >
                      <Icon size={38} />
                    </div>

                    {/* NAME */}
                    <p
                      className="
                        text-white
                        text-sm
                        sm:text-lg
                        text-center
                        transition-colors
                        duration-300
                        group-hover:text-[#16f2b3]
                      "
                    >
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;