"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { TechPill } from "@/app/components/TechPill";

type Role = {
  id: string;
  title: string;
  meta: string;
  highlights: string[];
  skills: string[];
};

type Company = {
  id: string;
  name: string;
  location: string;
  emoji: string;
  emojiLabel: string;
  roles: Role[];
};

const companies: Company[] = [
  {
    id: "gameeon",
    name: "GameEon Studios",
    location: "Remote",
    emoji: "🎮",
    emojiLabel: "Game studio",
    roles: [
      {
        id: "unity-developer",
        title: "Jr. Unity Developer",
        meta: "02.2026—Present · Remote",
        highlights: [
          "Built a data-driven 3D uterine anatomy viewer in Unity that instantiates and positions medical abnormalities (fibroids, adenomyomas, polyps) in real-world anatomical coordinates using CellSize-based coordinate conversion.",
          "Implemented MeshCollider-based collision with vertex-normal inflation for accurate deformation clearance.",
          "Developed a runtime mesh deformation system that dynamically deforms uterus and endometrium meshes from patient-specific anatomical data loaded via JSON.",
          "Designed an automatic collider sizing system fitting MeshColliders to procedurally scaled GameObjects from real-world patient measurements, replacing a legacy cloth-simulation approach with a more performant and maintainable pure mesh deformation pipeline.",
        ],
        skills: ["C#", "Unity", ".NET", "JSON", "Git"],
      },
    ],
  },
];

function RoleBlock({ role }: { role: Role }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="ml-3 border-l border-dashed border-neutral-200 pt-6 pl-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 rounded text-left focus-visible:outline-2 focus-visible:outline-blue-500"
      >
        <span>
          <span className="flex items-center gap-2 text-sm font-medium">
            {role.title}
          </span>
          <span className="mt-1 block text-sm text-neutral-500">{role.meta}</span>
        </span>
        {open ? (
          <ChevronUp size={16} className="mt-1 shrink-0 text-neutral-400" />
        ) : (
          <ChevronDown size={16} className="mt-1 shrink-0 text-neutral-400" />
        )}
      </button>

      {open && (
        <div className="animate-[fade-in_.25s_ease-out]">
          <ul className="mt-5 space-y-3">
            {role.highlights.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-sm leading-6 text-neutral-600"
              >
                <span
                  aria-hidden
                  className="absolute top-[.65em] left-0 size-1 rounded-full bg-neutral-400"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {role.skills.map((s) => (
              <TechPill key={s} name={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-block scroll-mt-20">
      <h2 className="font-serif text-4xl tracking-tight text-neutral-950">
        Experience
      </h2>

      <div className="mt-16 space-y-14">
        {companies.map((company) => (
          <article key={company.id}>
            <div className="flex items-center gap-3">
              <div className="grid size-6 shrink-0 place-items-center">
                <span className="text-lg" aria-label={company.emojiLabel}>
                  {company.emoji}
                </span>
              </div>
              <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-2">
                <h3 className="text-base">
                  <span className="font-medium text-neutral-950">
                    {company.name}
                  </span>
                </h3>
                <p className="text-sm text-neutral-500">{company.location}</p>
              </div>
            </div>
            {company.roles.map((role) => (
              <RoleBlock key={role.id} role={role} />
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
