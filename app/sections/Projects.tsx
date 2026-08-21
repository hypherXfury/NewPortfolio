"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

import { TechPill } from "@/app/components/TechPill";
import { SquareGithubIcon } from "@/icons/brands/Github";

type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  skills: string[];
  demo?: { label: string; href: string };
  source?: string;
};

type Group = {
  id: string;
  title: string;
  projects: Project[];
};

const groups: Group[] = [
  {
    id: "game-projects",
    title: "Game Projects",
    projects: [
      {
        id: "lost-kingdom",
        name: "Lost Kingdom",
        tagline: "2D RPG platformer",
        description:
          "A 2D platformer inspired by Unfair Mario, built around unexpected traps, challenging level design, and unpredictable mechanics. Implements AI-driven enemies, health and stamina systems, and customizable player abilities, with performance tuned across scenes and devices for stable frame rates and efficient memory usage.",
        skills: ["C#", "Unity"],
      },
      {
        id: "save-us",
        name: "Save Us",
        tagline: "2D arcade game",
        description:
          "A fast, simple arcade game where the player rescues tiny creatures. Pixel art assets and animations were created from scratch and wired into Unity's animation system for smooth gameplay visuals.",
        skills: ["C#", "Unity"],
      },
    ],
  },
];

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(true);

  return (
    <article>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 rounded text-left focus-visible:outline-2 focus-visible:outline-blue-500"
      >
        <h4 className="text-xl font-medium">
          {index}. {project.name}{" "}
          <span className="font-normal text-neutral-500">
            ({project.tagline})
          </span>
        </h4>
        {open ? (
          <ChevronUp size={18} className="mt-1.5 shrink-0 text-neutral-400" />
        ) : (
          <ChevronDown size={18} className="mt-1.5 shrink-0 text-neutral-400" />
        )}
      </button>

      {open && (
        <div className="animate-[fade-in_.25s_ease-out]">
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.skills.map((s) => (
              <TechPill key={s} name={s} />
            ))}
          </div>

          {(project.demo || project.source) && (
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              {project.demo && (
                <Link
                  href={project.demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline decoration-neutral-300 underline-offset-4"
                >
                  {project.demo.label}
                </Link>
              )}
              {project.source && (
                <Link
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 underline decoration-neutral-300 underline-offset-4"
                >
                  <SquareGithubIcon className="size-4" />
                  source code
                </Link>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-block scroll-mt-20">
      <h2 className="font-serif text-4xl tracking-tight text-neutral-950">
        Projects
      </h2>

      {groups.map((group) => (
        <div key={group.id} className="mt-20">
          <h3 className="border-b border-dashed border-neutral-200 pb-5 font-serif text-3xl text-neutral-900">
            {group.title}
          </h3>
          <div className="mt-12 space-y-16">
            {group.projects.map((project, i) => (
              <ProjectBlock key={project.id} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
