  // import { projectsData } from '@/utils/data/projects-data';
  // import ProjectCard from './project-card';

  // const Projects = () => {

  //   return (
  //     <div id='projects' className="relative z-50  my-12 lg:my-24">
  //       <div className="sticky top-10">
  //         <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
  //         <div className="flex items-center justify-start relative">
  //           <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
  //             PROJECTS
  //           </span>
  //           <span className="w-full h-[2px] bg-[#1a1443]"></span>
  //         </div>
  //       </div>

  //       <div className="pt-24">
  //         <div className="flex flex-col gap-6">
  //           {projectsData.slice(0, 4).map((project, index) => (
  //             <div
  //               id={`sticky-card-${index + 1}`}
  //               key={index}
  //               className="sticky-card w-full mx-auto max-w-2xl sticky"
  //             >
  //               <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
  //                 <ProjectCard project={project} />
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Data Engineering", "AI/ML", "Web"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === filter
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background */}
      <Image
        src="/section.svg"
        alt="Projects"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>

          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>

          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Where Did My Time Go?
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl">
            A collection of Data Engineering, AI/ML and Full Stack projects
            focused on solving real-world problems through scalable systems,
            automation and modern technologies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setFilter(item);
                setShowAll(false);
              }}
              className={`
                px-5
                py-2
                rounded-full
                text-sm
                font-medium
                transition-all
                duration-300

                ${
                  filter === item
                    ? "bg-[#16f2b3] text-[#0d1224]"
                    : "border border-white/10 text-gray-300 hover:border-[#16f2b3] hover:text-[#16f2b3]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

        {/* Show More */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                px-8
                py-3
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-[#16f2b3]
                text-[#0d1224]
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}