// // @flow strict

// import { personalData } from "@/utils/data/personal-data";
// import Image from "next/image";


// function AboutSection() {
//   return (
//     <div id="about" className="my-12 lg:my-16 relative">
//       <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           ABOUT ME
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//         <div className="order-2 lg:order-1">
//           <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
//             Who I am?
//           </p>
//           <p className="text-gray-200 text-sm lg:text-lg">
//             {personalData.description}
//           </p>
//         </div>
//         <div className="flex justify-center order-1 lg:order-2">
//           <Image
//             src={personalData.profile}
//             width={280}
//             height={280}
//             alt="Ritesh Katwe"
//             className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

// @flow strict

// @flow strict

import GlowCard from "../../helper/glow-card";
import Image from "next/image";

function AboutSection() {
  const skills = {
    software: [
      "Python",
      "SQL",
      "Java",
      "JavaScript",
      "React",
      "Spring Boot",
      "Node.js",
      "REST APIs",
    ],

    data: [
      "PySpark",
      "Airflow",
      "AWS",
      "Databricks",
      "Snowflake",
      "ETL",
      "Data Warehousing",
    ],

    ml: [
      "Scikit-Learn",
      "TensorFlow",
      "Feature Engineering",
      "Model Deployment",
      "Pandas",
    ],
  };

  const SkillChip = ({ text }) => {
    return (
      <span
        className="
          px-4
          py-2
          rounded-full
          border
          border-[#2a3b7a]
          bg-[#111827]/50
          text-sm
          text-white
          transition-all
          duration-300
          hover:border-[#16f2b3]
          hover:-translate-y-1
          hover:shadow-[0_0_20px_rgba(22,242,179,0.15)]
        "
      >
        {text}
      </span>
    );
  };

  return (
    <section
      id="about"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Heading (same as Experience) */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About Me
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              My Background
            </h2>

            <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
              <p>
    <strong className="text-white">What I do?</strong> Data Engineering, Python, SQL, AWS, AI/ML — basically making data do useful things.
  </p>

  <p>
    <strong className="text-white">What am I building?</strong> ETL pipelines, financial data systems, ML solutions, and random projects that start with “this would be cool.”
  </p>

  <p>
    <strong className="text-white">What am I passionate about?</strong> Learning new stuff, solving problems, and turning ideas into things that actually work.
  </p>

  <p>
    <strong className="text-white">When I&apos;m not coding?</strong> Gym, gaming, music, overthinking, or pretending I&apos;ll stop scrolling after one more reel.
  </p>

  <p>
    <strong className="text-white">My coding philosophy?</strong> Make it work → make it right → make it fast → then spend way too long making it look good.
  </p>

  <p>
    <strong className="text-white">My weakness?</strong> “It&apos;s just a small project.” — famous last words.
  </p>

  <p>
    <strong className="text-white">What&apos;s next?</strong> Keep building, keep breaking things, keep learning, and become ridiculously good at this.
  </p>
              
            </div>
          </div>

          {/* RIGHT SIDE */}
          <GlowCard identifier="about-skills">
            <div className="p-3 relative">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />

              <div className="relative z-10 p-5">
                <h3 className="text-3xl font-bold text-white mb-10">
                  Skills & Expertise
                </h3>

                <div className="mb-10">
                  <h4 className="text-gray-400 uppercase text-sm mb-4">
                    Software & Full Stack Development
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.software.map((skill) => (
                      <SkillChip key={skill} text={skill} />
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-gray-400 uppercase text-sm mb-4">
                    Data Engineering & Cloud
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.data.map((skill) => (
                      <SkillChip key={skill} text={skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 uppercase text-sm mb-4">
                    Machine Learning & AI
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.ml.map((skill) => (
                      <SkillChip key={skill} text={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;