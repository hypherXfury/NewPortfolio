import Image from "next/image";

import { site } from "@/app/data/site";

export function Avatar({
  className = "",
  rounded = "rounded-full",
  priority = false,
}: {
  className?: string;
  rounded?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/vaibhav-avatar.webp"
      alt={site.name}
      width={512}
      height={512}
      priority={priority}
      // Pixel art: keep the hard edges instead of letting the browser blur them.
      className={`${rounded} border border-amber-200 bg-amber-50 object-cover [image-rendering:pixelated] ${className}`}
    />
  );
}
