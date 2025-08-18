// @flow strict

import { experiences } from "@/utils/data/experience";
import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
  {/* Title with icon */}
<p className="flex items-center gap-2 text-xl sm:text-2xl font-bold uppercase mb-2 border-b border-white/20 pb-1">
  <BriefcaseIcon className="w-5 h-5 text-yellow-400" />
  {experience.title}
</p>

{/* Company with icon */}
<p className="flex items-center gap-2 text-base sm:text-lg font-semibold mb-2 border-b border-white/10 pb-1">
  <BuildingOfficeIcon className="w-5 h-5 text-blue-400" />
  {experience.company}
</p>

{/* Description with icon */}
<p className="flex items-center gap-2 text-sm sm:text-base text-gray-300 mb-2 border-b border-white/10 pb-1 leading-relaxed">
  <DocumentTextIcon className="w-5 h-5 text-green-400" />
  {experience.description}
</p>

{/* Technologies with icon */}
<p className="flex items-center gap-2 text-sm sm:text-base italic tracking-wide text-gray-400">
  <WrenchScrewdriverIcon className="w-5 h-5 text-purple-400" />
  {experience.technologies}
</p>

                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;