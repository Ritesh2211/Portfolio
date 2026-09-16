// // @flow strict
// import Link from 'next/link';
// import { CgGitFork } from "react-icons/cg";
// import { IoStar } from "react-icons/io5";

// function Footer() {
//   return (
//     <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
//       <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
//         <div className="flex justify-center -z-40">
//           <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
//         </div>
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <p className="text-sm">
//             © Developer Portfolio by <Link target="_blank" href="https://www.linkedin.com/in/ritesh-katwe/" className="text-[#16f2b3]">Ritesh Katwe</Link>
//           </p>
//           <div className="flex items-center gap-5">
//             <Link
//               target="_blank"
//               href="https://github.com/ritesh2211"
//               className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
//             >
//               <IoStar />
//               <span>Star</span>
//             </Link>
//             <Link
//               target="_blank"
//               href="https://github.com/ritesh2211/developer-portfolio/fork"
//               className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
//             >
//               <CgGitFork />
//               <span>Fork</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div >
//   );
// };

// export default Footer;
"use client";

import Link from "next/link";
import {
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import {
  HiArrowRight,
  HiArrowUpRight,
} from "react-icons/hi2";
import { personalData } from "@/utils/data/personal-data";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
  ];

  return (
    <footer
      id="footer"
      className="
        relative
        mt-32
        overflow-hidden
        border-t
        border-[#25213b]
      "
    >
      {/* =========================================
          BACKGROUND GLOWS
      ========================================= */}
      <div
        className="
          absolute
          left-[-150px]
          bottom-[-200px]
          w-[450px]
          h-[450px]
          bg-[#16f2b3]/10
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          right-[-150px]
          top-[-150px]
          w-[450px]
          h-[450px]
          bg-pink-500/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          lg:px-10
          py-20
        "
      >

        {/* =========================================
            TOP FOOTER
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-14
            lg:gap-20
          "
        >

          {/* =======================================
              BRAND
          ======================================= */}
          <div>
            <h2
              className="
                text-3xl
                lg:text-4xl
                font-bold
                text-white
                mb-5
              "
            >
              Ritesh Katwe
            </h2>

            <p
              className="
                text-gray-400
                leading-relaxed
                max-w-md
              "
            >
              Data Engineer focused on building
              reliable data pipelines, financial
              systems, and practical solutions
              that turn complex data into something
              useful.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-7">

              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-[#16f2b3]
                  hover:text-[#16f2b3]
                  hover:bg-[#16f2b3]/10
                  hover:-translate-y-1
                "
              >
                <BsLinkedin
                  size={19}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </Link>

              <Link
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-[#16f2b3]
                  hover:text-[#16f2b3]
                  hover:bg-[#16f2b3]/10
                  hover:-translate-y-1
                "
              >
                <BsGithub
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </Link>

            </div>
          </div>

          {/* =======================================
              NAVIGATION
          ======================================= */}
          <div>
            <h3
              className="
                text-lg
                font-semibold
                text-white
                mb-6
              "
            >
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-y-4">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-gray-400
                    text-sm
                    transition-all
                    duration-300
                    hover:text-[#16f2b3]
                  "
                >
                  <span
                    className="
                      w-0
                      h-[1px]
                      bg-[#16f2b3]
                      transition-all
                      duration-300
                      group-hover:w-4
                    "
                  />

                  {item.name}
                </Link>
              ))}

            </div>
          </div>

          {/* =======================================
              CONTACT
          ======================================= */}
          <div>

            <h3
              className="
                text-lg
                font-semibold
                text-white
                mb-6
              "
            >
              Let&apos;s Connect
            </h3>

            <p
              className="
                text-gray-400
                text-sm
                leading-relaxed
                mb-6
                max-w-sm
              "
            >
              Open to interesting opportunities,
              collaborations, and conversations
              around Data Engineering, AI/ML and
              Software Engineering.
            </p>

            {/* EMAIL */}
            <Link
              href={`mailto:${personalData.email}`}
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[#16f2b3]
                text-sm
                font-medium
                transition-all
                duration-300
                hover:text-white
              "
            >
              {personalData.email}

              <HiArrowUpRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            {/* BACK TO TOP */}
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                group
                mt-7
                flex
                items-center
                gap-2
                text-sm
                text-gray-400
                transition-all
                duration-300
                hover:text-[#16f2b3]
              "
            >
              Back to top

              <HiArrowRight
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}
        <div
          className="
            border-t
            border-white/10
            mt-16
            mb-8
          "
        />

        {/* =========================================
            BOTTOM FOOTER
        ========================================= */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          {/* COPYRIGHT */}
          <p
            className="
              text-gray-500
              text-xs
              text-center
              md:text-left
            "
          >
            © 2026 Ritesh Katwe. All rights reserved.
          </p>

          {/* SKILLS */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-2
              text-gray-500
              text-xs
            "
          >
            <span>Data Engineering</span>
            <span>Python & SQL</span>
            <span>AWS</span>
          </div>

          {/* MADE WITH */}
          <p
            className="
              text-gray-500
              text-xs
            "
          >
            Built with{" "}
            <span className="text-[#16f2b3]">
              curiosity
            </span>{" "}
            & code.
          </p>

        </div>
      </div>

      {/* =========================================
          TOP ACCENT LINE
      ========================================= */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-[#16f2b3]/50
          to-transparent
        "
      />
    </footer>
  );
}