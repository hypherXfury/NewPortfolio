import { type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { Section } from "@/app/components/Section";
import { AnnotatedText } from "@/app/components/AnnotatedText ";
import { ExpressIcon } from "@/icons/brands/Express";
import { JwtIcon } from "@/icons/brands/Jwt";
import { MongodbIcon } from "@/icons/brands/Mongodb";
import { NextjsIcon } from "@/icons/brands/NextJs";
import { NodejsAltIcon } from "@/icons/brands/NodeJs";
import { PassportIcon } from "@/icons/brands/PassportJs";
import { ReactjsIcon } from "@/icons/brands/ReactJs";
import { RedisIcon } from "@/icons/brands/Redis";
import { SquareGithubIcon } from "@/icons/brands/Github";
import { TailwindIcon } from "@/icons/brands/TailwindCSS";
import { TypescriptIcon } from "@/icons/brands/Typescript";
import { VercelIcon } from "@/icons/brands/Vercel";
import { PosthogIcon } from "@/icons/brands/Posthog";
import { NpmIcon } from "@/icons/brands/Npm";
import { NetlifyIcon } from "@/icons/brands/Netlify";
import { RenderIcon } from "@/icons/brands/Render";
import { GoogleBardIcon } from "@/icons/brands/GoogleBard";
import { JavascriptIcon } from "@/icons/brands/Javascript";
import { FilesIcon } from "@/icons/brands/File";

type Skill = {
  name: string;
  icon: ReactNode;
};

type Project = {
  id: string;
  name: string;
  tagline: string;
  meta: string;
  image: string;
  highlights: string[];
  skills: Skill[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    id: "opensource-ui",
    name: "Opensource UI",
    tagline: "React & Next.js component library",
    meta: "Open source · 2026 — Present",
    image: "/letter-o.webp",
    highlights: [
      "Explore 151 polished React and Next.js components, organized across 39 categories.",
      "Pick what you need, copy the code, and make it yours.",
    ],
    skills: [
      { name: "TypeScript", icon: <TypescriptIcon className="size-3.5" /> },
      { name: "Next.js", icon: <NextjsIcon className="size-3.5" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="size-3.5" /> },
      { name: "MongoDB", icon: <MongodbIcon className="size-3.5" /> },
      { name: "Vercel", icon: <VercelIcon className="size-3.5" /> },
      { name: "Posthog", icon: <PosthogIcon className="size-3.5" /> },
    ],
    github: "https://github.com/bidyut10/appui",
    demo: "https://opensourceui.in",
  },
  {
    id: "authscale",
    name: "Authscale",
    tagline: "Secure backend starter CLI for Node.js",
    meta: "CLI · Node.js",
    image: "/programmer.webp",
    highlights: [
      "Creates ready-to-use Express.js backends with authentication and security features, avoiding repetitive setup work.",
      "Saves development time and reduces chances of missing basic security configurations.",
    ],
    skills: [
      { name: "JavaScript", icon: <JavascriptIcon className="size-3.5" /> },
      { name: "Node.js", icon: <NodejsAltIcon className="size-3.5" /> },
      { name: "Express.js", icon: <ExpressIcon className="size-3.5" /> },
      { name: "MongoDB", icon: <MongodbIcon className="size-3.5" /> },
      { name: "React.js", icon: <ReactjsIcon className="size-3.5" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="size-3.5" /> },
      { name: "JWT", icon: <JwtIcon className="size-3.5" /> },
      { name: "NPM", icon: <NpmIcon className="size-3.5" /> },
    ],
    github: "https://github.com/bidyut10/authscale",
    demo: "https://authscale.netlify.app",
  },
  {
    id: "codewise",
    name: "Codewise",
    tagline: "AI code review system",
    meta: "AI · GitHub integration",
    image: "/computer.webp",
    highlights: [
      "Analyses GitHub commits using Google Gemini to generate code review feedback, reducing manual review effort.",
      "Helps developers review changes faster and keeps feedback more consistent across different code bases.",
    ],
    skills: [
      { name: "MongoDB", icon: <MongodbIcon className="size-3.5" /> },
      { name: "Express.js", icon: <ExpressIcon className="size-3.5" /> },
      { name: "React.js", icon: <ReactjsIcon className="size-3.5" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="size-3.5" /> },
      { name: "Node.js", icon: <NodejsAltIcon className="size-3.5" /> },
      { name: "Passport.js", icon: <PassportIcon className="size-3.5" /> },
      { name: "Google Gemini", icon: <GoogleBardIcon className="size-3.5" /> }, 
      { name: "Render", icon: <RenderIcon className="size-3.5" /> },
    ],
    github: "https://github.com/bidyut10/code-reviewer",
    demo: "https://codewiseai.onrender.com",
  },
  {
    id: "wcut",
    name: "Wcut",
    tagline: "Scalable URL shortener",
    meta: "Backend · Caching",
    image: "/calander.webp",
    highlights: [
      "Converts long URLs into short links and handles redirection efficiently, reducing repeated database queries using in-memory caching.",
      "Keeps redirects fast and stable during frequent access by avoiding unnecessary database calls.",
    ],
    skills: [
      { name: "JavaScript", icon: <JavascriptIcon className="size-3.5" /> },
      { name: "Node.js", icon: <NodejsAltIcon className="size-3.5" /> },
      { name: "MongoDB", icon: <MongodbIcon className="size-3.5" /> },
      { name: "Express.js", icon: <ExpressIcon className="size-3.5" /> },
      { name: "React.js", icon: <ReactjsIcon className="size-3.5" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="size-3.5" /> },
      { name: "Redis", icon: <RedisIcon className="size-3.5" /> },
      { name: "Render", icon: <RenderIcon className="size-3.5" /> },
    ],
    github: "https://github.com/bidyut10/urlShortner",
    demo: "https://wcut.netlify.app",
  },
  {
    id: "paperdoc",
    name: "Paperdoc",
    tagline: "Invoice and Receipt generator",
    meta: "Invoice · Receipt",
    image: "/calander.webp",
    highlights: [
      "Generates professional invoices and receipts with customizable templates and payment options.",
      "Streamlines billing and payment processing for businesses and freelancers.",
    ],
    skills: [
      { name: "Node.js", icon: <NodejsAltIcon className="size-3.5" /> },
      { name: "React.js", icon: <ReactjsIcon className="size-3.5" /> },
      { name: "Tailwind CSS", icon: <TailwindIcon className="size-3.5" /> },
      { name: "Netlify", icon: <NetlifyIcon className="size-3.5" /> },
    ],
    github: "https://github.com/bidyut10/corporate-inv",
    demo: "https://paperdoc.netlify.app",
  },
];

function TimelineNode({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 flex size-5 shrink-0 items-center justify-center">
      {children}
    </div>
  );
}

function ProjectLinks({ github, demo }: { github: string; demo: string }) {
  return (
    <div className="mt-6 mb-10 flex flex-wrap items-center gap-x-5 gap-y-2">
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
      >
        <SquareGithubIcon className="size-3.5 text-neutral-800" />
        GitHub link
      </Link>
      <Link
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
      >
        <Image
          src="/internet.webp"
          alt="Demo"
          width={12}
          height={12}
          className="size-3.5 object-cover"
        />
        Website link
      </Link>
    </div>
  );
}

function ProjectBlock({
  project,
  isLast,
}: {
  project: Project;
  isLast: boolean;
}) {
  return (
    <li className="relative flex items-start gap-2.5 pt-6">
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-0 w-px bg-neutral-200",
          isLast ? "h-8" : "bottom-0",
        )}
      />
      <span
        aria-hidden
        className="absolute top-8 left-0 h-px w-4 bg-neutral-200"
      />

      <div className="ml-4 flex h-4 shrink-0 items-center">
        <TimelineNode>
        <FilesIcon className="size-4 shrink-0" />
        </TimelineNode>
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="inline-flex items-center gap-2 font-sans text-sm font-medium leading-4 tracking-tight text-black">
          {project.name}         
          <p className="text-sm font-medium text-neutral-600">
          ( {project.tagline} )
        </p>
        </h4>


        <p className="mt-1 text-sm text-neutral-500">{project.meta}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-100 bg-neutral-50/50 px-2.5 py-1 text-xs font-medium text-neutral-700"
            >
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2.5">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="relative pl-4 text-sm leading-relaxed text-neutral-600"
            >
              <span
                aria-hidden
                className="absolute top-[0.55em] left-0 size-1.5 rounded-full bg-neutral-300"
              />
              {item}
            </li>
          ))}
        </ul>

        <ProjectLinks github={project.github} demo={project.demo} />
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="my-20">
      <AnnotatedText variant="doubleUnderline" color="text-neutral-200">
        <h2 className="font-serif text-3xl text-neutral-900">Selected Projects</h2>
      </AnnotatedText>

      <article className="mt-16">
        <div className="flex items-center gap-3">
          <TimelineNode>
          <FilesIcon className="size-4 shrink-0" />
          </TimelineNode>

          <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3">
            <h3 className="font-sans text-base font-medium tracking-tight text-neutral-950">
              Things I&apos;ve built
            </h3>
            <p className="text-sm text-neutral-500">Side projects & tools</p>
          </div>
        </div>

        <ul className="ml-2">
          {projects.map((project, index) => (
            <ProjectBlock
              key={project.id}
              project={project}
              isLast={index === projects.length - 1}
            />
          ))}
        </ul>
      </article>
    </Section>
  );
}
