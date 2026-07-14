"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { AwsIcon } from "@/icons/brands/Aws";
import { AwsLambdaIcon } from "@/icons/brands/AwsLambda";
import { AwsSqsIcon } from "@/icons/brands/AwsSqs";
import { DockerIcon } from "@/icons/brands/Docker";
import { ExpressIcon } from "@/icons/brands/Express";
import { NextjsIcon } from "@/icons/brands/NextJs";
import { NodejsAltIcon } from "@/icons/brands/NodeJs";
import { PostgresIcon } from "@/icons/brands/Postgres";
import { ReactjsIcon } from "@/icons/brands/ReactJs";
import { RedisIcon } from "@/icons/brands/Redis";
import { TailwindIcon } from "@/icons/brands/TailwindCSS";
import { TypescriptIcon } from "@/icons/brands/Typescript";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { VercelIcon } from "@/icons/brands/Vercel";
import { SquareGithubIcon } from "@/icons/brands/Github";
import { MongodbIcon } from "@/icons/brands/Mongodb";
import { PosthogIcon } from "@/icons/brands/Posthog";
import { AwsS3Icon } from "@/icons/brands/AwsS3";

type Skill = {
  name: string;
  icon: ReactNode;
};

type Role = {
  id: string;
  title: string;
  employment: string;
  range: string;
  duration: string;
  location: string;
  image: string;
  highlights: string[];
  skills: Skill[];
};

const conasSkills: Skill[] = [
  { name: "TypeScript", icon: <TypescriptIcon className="size-3.5" /> },
  { name: "Node.js", icon: <NodejsAltIcon className="size-3.5" /> },
  { name: "Express.js", icon: <ExpressIcon className="size-3.5" /> },
  { name: "React.js", icon: <ReactjsIcon className="size-3.5" /> },
  { name: "Next.js", icon: <NextjsIcon className="size-3.5" /> },
  { name: "Tailwind CSS", icon: <TailwindIcon className="size-3.5" /> },
  { name: "PostgreSQL", icon: <PostgresIcon className="size-3.5" /> },
  { name: "Redis", icon: <RedisIcon className="size-3.5" /> },
  { name: "AWS", icon: <AwsIcon className="size-3.5" /> },
  { name: "Lambda", icon: <AwsLambdaIcon className="size-3.5" /> },
  { name: "SQS", icon: <AwsSqsIcon className="size-3.5" /> },
  { name: "S3", icon: <AwsS3Icon className="size-3.5" /> },
  { name: "Docker", icon: <DockerIcon className="size-3.5" /> },
];

const roles: Role[] = [
  {
    id: "software-developer",
    title: "Software Developer",
    employment: "Full-time",
    range: "05.2025—06.2026",
    duration: "1 yr 2 mos",
    location: "Remote",
    image: "/may.webp",
    highlights: [
      "Migrated to Lambda microservices after a 50K+ request outage — 99.9% uptime, 60% lower cloud spend.",
      "Built async QR tracking across 10+ nodes via SQS — 80% fewer errors, 2+ hrs/day saved.",
      "Replaced OTP auth with Microsoft OAuth 2.0 + MFA company-wide.",
      "Cut query latency 30s → 2s and LCP 3.5s → 2.1s with indexing, Redis, and background jobs.",
    ],
    skills: conasSkills,
  },
  {
    id: "associate",
    title: "Associate Software Developer",
    employment: "Full-time",
    range: "04.2023—05.2025",
    duration: "2 yrs 2 mos",
    location: "On-site",
    image: "/april.webp",
    highlights: [
      "Shipped full-stack features across React, Node.js, and PostgreSQL for production client systems.",
      "Owned API integrations, auth flows, and day-to-day debugging in an on-site engineering team.",
    ],
    skills: conasSkills.slice(0, 8),
  },
];

function TimelineNode({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 flex size-5 shrink-0 items-center justify-center">
      {children}
    </div>
  );
}

function LetterMark({ letter }: { letter: "C" | "O" }) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4 shrink-0">
      <circle cx="8" cy="8" r="8" fill="black" />
      {letter === "O" ? (
        <circle
          cx="8"
          cy="8"
          r="3.15"
          fill="none"
          stroke="white"
          strokeWidth="1.7"
        />
      ) : (
        <path
          d="M10.7 5.15A3.35 3.35 0 1 0 10.7 10.85"
          fill="none"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function RoleBlock({
  role,
  open,
  onToggle,
  isLast,
}: {
  role: Role;
  open: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  // Branch center: pt-6 (24px) + half of size-4 node (8px) = 32px
  const branchTop = "top-8";

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
        className={cn("absolute left-0 h-px w-4 bg-neutral-200", branchTop)}
      />

      <div className="ml-4 flex h-4 shrink-0 items-center">
        <TimelineNode>
          <Image
            src={role.image}
            alt=""
            width={500}
            height={500}
            className="size-4 object-contain"
          />
        </TimelineNode>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h4 className="font-sans text-sm font-medium leading-4 tracking-tight text-black">
              {role.title}
            </h4>
          </div>

          <button
            type="button"
            onClick={onToggle}
            className="inline-flex size-4 shrink-0 items-center justify-center text-neutral-500 transition-colors hover:text-neutral-900"
            aria-expanded={open}
            aria-label={
              open ? `Collapse ${role.title}` : `Expand ${role.title}`
            }
          >
            {open ? (
              <ChevronUp size={14} strokeWidth={2} />
            ) : (
              <ChevronDown size={14} strokeWidth={2} />
            )}
          </button>
        </div>

        <p className="mt-1 text-sm text-neutral-500">
          {role.employment}{" "}
          <span className="text-neutral-300">|</span> {role.range}{" "}
          <span className="text-neutral-300">|</span> {role.duration}
          <span className="text-neutral-300"> · </span>
          {role.location}
        </p>

        {open && (
          <>
            <ul className="mt-4 space-y-2.5">
              {role.highlights.map((item) => (
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

            <div className="mt-5 flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700"
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </li>
  );
}

export function CompanyExperienceCard() {
  const [openId, setOpenId] = useState<string | null>(roles[0].id);

  return (
    <article className="mt-16">
      {/* Root: company */}
      <div className="flex items-center gap-3">
        <TimelineNode>
          <LetterMark letter="C" />
        </TimelineNode>

        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3">
          <h3 className="font-sans text-base font-medium tracking-tight text-neutral-950">
            Conas Consulting Private Ltd.
          </h3>
          <p className="inline-flex items-center gap-2 text-sm text-neutral-500">
            Pune, India
          </p>
        </div>
      </div>

      {/* Children: roles branch off the company spine */}
      <ul className="ml-2">
        {roles.map((role, index) => (
          <RoleBlock
            key={role.id}
            role={role}
            isLast={index === roles.length - 1}
            open={openId === role.id}
            onToggle={() =>
              setOpenId((current) => (current === role.id ? null : role.id))
            }
          />
        ))}
      </ul>
    </article>
  );
}

export function OpensourceExperienceCard() {
  const [open, setOpen] = useState(true);

  const projectSkills: Skill[] = [
    { name: "TypeScript", icon: <TypescriptIcon className="size-3.5" /> },
    { name: "Posthog", icon: <PosthogIcon className="size-3.5" /> },
    { name: "Next.js", icon: <NextjsIcon className="size-3.5" /> },
    { name: "Tailwind CSS", icon: <TailwindIcon className="size-3.5" /> },
    { name: "GitHub", icon: <SquareGithubIcon className="size-3.5" /> },
    { name: "MongoDb", icon: <MongodbIcon className="size-3.5" /> },
    { name: "Vercel", icon: <VercelIcon className="size-3.5" /> },
  ];

  const highlights = [
    "Explore 151 polished React and Next.js components, organized across 39 categories.",
    "Pick what you need, copy the code, and make it yours — shipping in public while looking for the next team role.",
  ];

  return (
    <article className="mt-16">
      {/* Root: project */}
      <div className="flex items-center gap-3">
        <TimelineNode>
          <LetterMark letter="O" />
        </TimelineNode>

        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-3">
          <h3 className="font-sans text-base font-medium tracking-tight text-neutral-950">
            Opensource UI
          </h3>
          <p className="inline-flex items-center gap-2 text-sm text-neutral-500">
            Personal project
            <span
              className="size-2 animate-pulse rounded-full bg-emerald-500"
              title="Active"
              aria-hidden
            />
          </p>
        </div>
      </div>

      {/* Child: role branched from project root */}
      <ul className="ml-2">
        <li className="relative flex items-start gap-2.5 pt-6">
          <span aria-hidden className="absolute top-0 left-0 h-8 w-px bg-neutral-200" />
          <span
            aria-hidden
            className="absolute top-8 left-0 h-px w-4 bg-neutral-200"
          />

          <div className="ml-4 flex h-4 shrink-0 items-center">
            <TimelineNode>
              <Image
                src="/may.webp"
                alt=""
                width={500}
                height={500}
                className="size-4 object-contain"
              />
            </TimelineNode>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <h4 className="font-sans text-sm font-medium leading-4 tracking-tight text-black">
                Creator & Maintainer
              </h4>
              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex size-4 shrink-0 items-center justify-center text-neutral-500 transition-colors hover:text-neutral-900"
                aria-expanded={open}
                aria-label={
                  open
                    ? "Collapse Opensource UI details"
                    : "Expand Opensource UI details"
                }
              >
                {open ? (
                  <ChevronUp size={14} strokeWidth={2} />
                ) : (
                  <ChevronDown size={14} strokeWidth={2} />
                )}
              </button>
            </div>

            <p className="mt-1 text-sm text-neutral-500">
              Open source <span className="text-neutral-300">|</span> 2026 —
              Present <span className="text-neutral-300">·</span> Independent
            </p>

            {open && (
              <>
                <ul className="mt-4 space-y-2.5">
                  {highlights.map((item) => (
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

                <div className="mt-5 flex flex-wrap gap-2">
                  {projectSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </li>
      </ul>
    </article>
  );
}
