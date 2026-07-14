import Image from "next/image";
import Link from "next/link";

import { CopyEmailLink } from "@/app/components/CopyEmailLink";
import { Heading } from "@/app/components/Heading";
import { Paragraph } from "@/app/components/Paragraph";
import { Section } from "@/app/components/Section";
import { SquareGithubIcon } from "@/icons/brands/Github";
import { LinkedinIcon } from "@/icons/brands/LinkedIn";
import { SquareXTwitterIcon } from "@/icons/brands/Twitter";
import { AnnotatedText } from "../components/AnnotatedText ";
import { FilesIcon } from "@/icons/brands/File";
import { GoogleMapsIcon } from "@/icons/brands/Map";
import { useEffect, useState } from "react";
import { ProducthuntIcon } from "@/icons/brands/ProductHunt";

const socialLinkClassName = "flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 underline decoration-neutral-300 underline-offset-4";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const updateTime = () => setTime(formatter.format(new Date()));

    updateTime();
    const interval = setInterval(updateTime, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home">
      <div className="flex items-center justify-start gap-4">
        <div className="group relative shrink-0">
          <Image
            src="/profile-pict.webp"
            alt="Hero"
            width={500}
            height={500}
            className="h-15 w-15 rounded border border-neutral-100"
          />
          <Image
            src="/waving-hand.webp"
            alt=""
            width={500}
            height={500}
            aria-hidden
            className="pointer-events-none absolute -bottom-2 -left-4 size-8 origin-[70%_90%] group-hover:animate-[wave_1.6s_ease-in-out_infinite]"
          />
        </div>
        <div>
          <Heading>Hello, I&apos;m Bidyut.</Heading>
          <div className="mt-2 text-sm text-neutral-600 underline decoration-neutral-300 underline-offset-4">
            <span>Software Engineer/Designer</span>
          </div>
        </div>
      </div>

      <Paragraph>
        I spent the last{" "}
        <AnnotatedText variant="underline" color="text-rose-100">
          3+ years
        </AnnotatedText>{" "}
        building products in startups, shipping features across the stack and
        solving real customer problems.
      </Paragraph>

      <Paragraph>
        These days, I'm building{" "}
        <AnnotatedText
          variant="underline"
          color="text-rose-100"
          className="text-black"
        >
          {" "}
          Opensource UI{" "}
        </AnnotatedText>
        , a free React & Next.js component library where every component is
        designed, built, and{" "}
        <AnnotatedText
          variant="doubleUnderline"
          color="text-neutral-200"
          className="text-black"
        >
          {" "}
          maintained by me.{" "}
        </AnnotatedText>
      </Paragraph>

      {/* <Paragraph>
        Currently looking for a team that values ownership, curiosity, and
        people who enjoy building.
      </Paragraph> */}
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600">
          <GoogleMapsIcon className="size-3 shrink-0" />
          <span >
            Kolkata, India
          </span>
        </span>
        <time
          dateTime={time || undefined}
          className="inline-block w-[9ch] text-xs tabular-nums tracking-tight text-neutral-400"
          aria-label={time ? `Local time ${time} IST` : "Local time"}
        >
          {time ? `${time} IST` : "––:–– IST"}
        </time>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">

        <CopyEmailLink />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="https://x.com/BidyutKundu12"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClassName}
          >
            <SquareXTwitterIcon className="size-4.5 text-neutral-900" />
            Twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/bidyut-kundu-4ba406242"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClassName}
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/bidyut10"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClassName}
          >
            <SquareGithubIcon className="size-4.5 text-neutral-800" />
            GitHub
          </Link>
          <Link
            href="https://www.producthunt.com/@bidyut_kundu"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClassName}
          >
            <ProducthuntIcon className="size-4.5 text-neutral-800" />
            Product Hunt
          </Link>
          <Link
            href="/Software_Engineer-Bidyut_Kundu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
          >
            <FilesIcon className="size-4.5 shrink-0" />
            <span className="underline decoration-neutral-300 underline-offset-4">
              Resume
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
