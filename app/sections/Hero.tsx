import Image from "next/image";

import { Avatar } from "@/app/components/Avatar";
import { site } from "@/app/data/site";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pt-16 sm:pt-28">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="relative shrink-0">
          <Avatar className="size-20 sm:size-24" rounded="rounded-md" priority />
          <Image
            src="/waving-hand.webp"
            alt=""
            width={64}
            height={64}
            aria-hidden
            className="absolute -bottom-2 -left-5 w-11 origin-bottom-right motion-safe:animate-[wave_2.4s_ease-in-out_infinite] sm:-bottom-3 sm:-left-8 sm:w-14"
          />
        </div>
        <div className="min-w-0">
          <h1 className="font-serif text-3xl leading-none tracking-tight sm:text-[2.55rem]">
            Hello, I&apos;m {site.firstName}.
          </h1>
          <p className="mt-3 text-base leading-7 text-neutral-600 sm:mt-4 sm:text-lg">
            {site.tagline}
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-7 text-base leading-7 text-neutral-700 sm:mt-14 sm:space-y-8 sm:text-lg sm:leading-8">
        {site.intro.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    </section>
  );
}
