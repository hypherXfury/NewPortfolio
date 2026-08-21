import { TechPill } from "@/app/components/TechPill";

const categories: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["C", "C++", "Java", "C#"] },
  { title: "Engines", items: ["Unity", "Unreal Engine"] },
  { title: "Frameworks", items: [".NET"] },
  {
    title: "Graphics & Systems",
    items: [
      "3D Mathematics",
      "Mesh Deformation",
      "MeshColliders",
      "Runtime Animation",
      "JSON",
    ],
  },
  { title: "Tools", items: ["Git", "GitHub"] },
  {
    title: "Others",
    items: ["Problem Solving", "Competitive Programming"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="section-block scroll-mt-20">
      <h2 className="font-serif text-4xl tracking-tight text-neutral-950">
        Tech Stack
      </h2>

      <div className="mt-12 divide-y divide-dashed divide-neutral-200 border-y border-dashed border-neutral-200">
        {categories.map(({ title, items }) => (
          <div key={title} className="py-7">
            <h3 className="text-base font-medium">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <TechPill key={item} name={item} className="px-3 py-1.5 text-sm" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
