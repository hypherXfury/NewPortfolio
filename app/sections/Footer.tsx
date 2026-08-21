import { site } from "@/app/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-block pb-24 lg:pb-16">
      <p className="font-serif text-lg text-neutral-500">
        Thanks for stopping by,
      </p>
      <p className="mt-2 font-serif text-4xl leading-tight tracking-tight text-neutral-800 select-none sm:text-5xl">
        {site.name}
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-neutral-200 pt-6 text-xs text-neutral-400">
        <span>
          © {year} {site.name}
        </span>
        <span>{site.location}</span>
      </div>
    </footer>
  );
}
