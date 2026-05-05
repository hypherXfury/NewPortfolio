import Pen from "@/icons/Pen";

export default function Projects() {
  return (
    <section id="projects" className="">
      <h1 className="text-[14px] mb-3 text-stone-800 dark:text-stone-100">
        Personal Projects
      </h1>
      <div className="flex items-center gap-2.5 text-[14px] border-t pt-3 border-stone-100 dark:border-stone-700 font-serif italic text-stone-400 dark:text-stone-500 leading-relaxed">
        <Pen />
        <span>
          Some things I built because I thought they’d be useful, fun, or worth
          exploring.
        </span>
      </div>
    </section>
  );
}
