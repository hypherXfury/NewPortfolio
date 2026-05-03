import Image, { StaticImageData } from "next/image";

import authscale from "@/assets/auth-scale.png";
import codewise from "@/assets/codewise.png";
import nexastruct from "@/assets/nexastruct.png";
import paperdoc from "@/assets/paperdoc.png";
import wcut from "@/assets/wcut.png";
import opensource from "@/assets/opensource-ui.png";

import ArrowUpRight from "@/icons/ArrowUpRight";

interface Project {
  name: string;
  type: string;
  url: string;
  image: StaticImageData;
}

const PROJECTS: Project[] = [
  {
    name: "Authscale",
    type: "Scaffolds Express.js backends with auth and security out of the box.",
    url: "https://authscale.netlify.app",
    image: authscale,
  },
  {
    name: "Codewise AI",
    type: "AI-powered GitHub commit review and feedback platform.",
    url: "https://codewiseai.onrender.com",
    image: codewise,
  },
  {
    name: "OpenSource UI",
    type: "Beautiful spotlight effects and animated typography for React.",
    url: "https://opensourceui.in",
    image: opensource,
  },
  {
    name: "Wcut",
    type: "Fast URL shortener optimized with heavy caching.",
    url: "https://wcut.netlify.app",
    image: wcut,
  },
  {
    name: "Nexastruct",
    type: "Modern construction and engineering landing page redesign.",
    url: "https://nexa-struct.netlify.app",
    image: nexastruct,
  },
  {
    name: "Paperdoc",
    type: "Privacy-focused invoice generator running fully in-browser.",
    url: "https://paperdoc.netlify.app",
    image: paperdoc,
  },
];

const columns = [
  [PROJECTS[0], PROJECTS[1]],
  [PROJECTS[2], PROJECTS[3]],
  [PROJECTS[4], PROJECTS[5]],
];

const ProjectsView = () => {
  return (
    <section id="projects" className="mb-12 flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-2 px-2">
        {columns.map((column, i) => (
          <div key={i} className="flex flex-col gap-2">
            {column.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group overflow-hidden
                  rounded-lg
                  border border-stone-200
                  bg-stone-100
                "
              >
                <Image
                  alt={project.name}
                  src={project.image}
                  className="
                    w-full h-auto
                    transition duration-500
                    group-hover:scale-[1.01]
                  "
                  priority
                  placeholder="blur"
                />

                <div className="flex items-center justify-between p-4">
                  <div>
                    <p className="text-[12px] text-stone-500 mb-1">
                      {project.type}
                    </p>

                    <h3 className="text-[14px] font-medium text-stone-900">
                      {project.name}
                    </h3>
                  </div>

                  <div
                    className="
                      w-9 h-9 rounded-full
                      border border-stone-200
                      flex items-center justify-center
                      bg-white
                    "
                  >
                    <ArrowUpRight className="w-4 h-4 text-stone-700" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsView;
