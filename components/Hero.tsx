import { useEffect, useState } from "react";
import bidyut from "@/public/bidyut-profile.png";
import Check from "@/icons/Check";
import Copy from "@/icons/Copy";
import Image from "next/image";
import Clock from "@/icons/Clock";
import Map from "@/icons/Map";
import Mail from "@/icons/Mail";
import Twitter from "@/icons/Twitter";
import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";
import File from "@/icons/File";

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors cursor-pointer"
      title="Copy email"
    >
      {copied ? <Check className="text-green-600" /> : <Copy />}
    </button>
  );
}

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const kolkataTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(kolkataTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="#" className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 flex items-center justify-center shrink-0">
          <Image src={bidyut} alt="Bidyut" className="rounded-full" />
        </div>
        <div>
          <h1 className="text-[14px] text-stone-800 dark:text-stone-100">
            Bidyut Kundu
          </h1>
          <span className="text-[14px] text-stone-500 dark:text-stone-400">
            Software Engineer ( Open To Work )
          </span>
          <p className="text-[14px] font-serif italic text-stone-400 dark:text-stone-500 leading-relaxed">
            &ldquo;The best systems are the ones you don&lsquo;t notice — they
            just work, quietly, at any scale.&ldquo;
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 mb-3">
        <Clock />
        <span>{time}</span>
      </div>
      <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 mb-3">
        <Map />
        <span>Kolkata, India</span>
      </div>
      <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 flex-wrap mb-3">
        <Mail />
        <a
          href="mailto:bidyut.kundu.dev@gmail.com"
          className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
        >
          bidyut.kundu.dev@gmail.com
        </a>
        <CopyEmailButton email="bidyut.kundu.dev@gmail.com" />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 mb-3">
          <Twitter />
          <a
            href="https://x.com/BidyutKundu12"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
          >
            Twitter/X
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 mb-3">
          <Github />
          <a
            href="https://github.com/bidyut10"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
          >
            Github
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 mb-3">
          <LinkedIn />
          <a
            href="https://www.linkedin.com/in/bidyut-kundu-4ba406242"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-2.5 text-[14px] text-stone-400 dark:text-stone-500 mb-3">
          {/* <div className="w-3 h-3 rounded-full bg-stone-400 dark:bg-stone-600 flex items-center justify-center shrink-0">
            <span className="text-[9px] font-medium text-white tracking-tight">
              R
            </span>
          </div> */}
          <File/>
          <a
            href="/Software-engineer_Bidyut-Kundu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-800 dark:hover:text-stone-200 transition-colors cursor-pointer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
