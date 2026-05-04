import type { Metadata } from "next";
import BlogSubnav from "@/components/BlogSubnav";
import ComponentGalleryGrid from "@/components/ComponentGalleryGrid";
import { UI_REGISTRY } from "@/blogs/data/ui-registry";

export const metadata: Metadata = {
  title: "Components | Bidyut Kundu",
  description:
    "Interactive gallery of React UI components with live previews and source.",
};

export default function ComponentsGalleryPage() {
  return (
    <>
      <div className="mx-auto mb-8 max-w-170 px-4 sm:px-2">
        <BlogSubnav
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/blogs" },
          ]}
          title="All components"
        />
        <p className="max-w-2xl text-[13px] leading-relaxed text-stone-500 dark:text-stone-400">
          Explore the components I’ve built so far — open any card to view the
          source and details.
        </p>
      </div>
      <ComponentGalleryGrid entries={UI_REGISTRY} />
    </>
  );
}
