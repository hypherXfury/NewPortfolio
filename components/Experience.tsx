import At from "@/icons/At";
import Calender from "@/icons/Calender";
import Map from "@/icons/Map";
import Pen from "@/icons/Pen";
import Terminal from "@/icons/Terminal";

interface Achievement {
  title: string;
  tags: string[];
  desc: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Microservices migration after production outage",
    tags: ["Lambda", "API Gateway", "K6"],
    desc: "EC2 buckled under 50K+ concurrent requests. Moved to Lambda + API Gateway microservices, stress-tested with K6. 99.9% uptime, 60% lower cloud spend.",
  },
  {
    title: "Async QR tracking across 10+ distributed nodes",
    tags: ["SQS", "async workers"],
    desc: "Replaced manual tracking with an event-driven pipeline. Scan → SQS worker → alert. 80% fewer errors, 2+ hrs/day saved.",
  },
  {
    title: "OTP auth replaced with Microsoft OAuth 2.0 + MFA",
    tags: ["OAuth 2.0", "JWT", "MFA"],
    desc: "Removed all homegrown credential infrastructure. Short-lived JWTs, MFA enforced company-wide.",
  },
  {
    title: "Query latency: 30s → 2s on multi-million-row table",
    tags: ["PostgreSQL", "Redis"],
    desc: "Composite indexes, table partitioning, Redis cache-aside. Cold storage barely touched anymore.",
  },
  {
    title: "LCP improved 3.5s → 2.1s for low-bandwidth clients",
    tags: ["React", "server cache"],
    desc: "PDF generation moved to background queue. Server-side caching added. Core Web Vitals went green.",
  },
];

const STACK: string[] = [
  "Node.js",
  "Express.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "AWS Lambda",
  "API Gateway",
  "SQS",
  "S3",
  "RDS",
  "CloudWatch",
  "K6",
  "GitHub Actions",
  "CI/CD",
  "Docker",
];

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <h1 className="text-[14px] mb-3 text-stone-800">Experience</h1>
      <div className="flex items-start justify-between gap-4 border-t border-stone-200 py-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 rounded-full bg-linear-to-br from-blue-400 via-blue-400 to-green-400 flex items-center justify-center shrink-0">
              <span className="font-mono text-sm font-medium text-white tracking-tight">
                C
              </span>
            </div>
            <span className="text-[14px] font-medium text-stone-800">
              Conas Consulting Private Ltd.
            </span>
            <span className="inline-flex items-center gap-1.5 bg-green-100 rounded-full p-1 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-[14px] text-stone-400 mb-3">
            <At />
            <span>Software Engineer</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-2.5">
            <div className="flex items-center gap-2.5 text-[14px] text-stone-400">
              <Calender />
              <span>April 2023 – Present ( 3+ YOE )</span>
            </div>
            <div className="flex items-center gap-2.5 text-[14px] text-stone-400">
              <Map />
              <span>Pune, India (On-Site)</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2.5 text-[14px] text-stone-400 mb-4">
          <Terminal />
          <span>Tools I work with</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-1">
          {STACK.map((s) => (
            <span
              key={s}
              className="text-[12px] font-mono text-stone-500 bg-white border border-stone-200 rounded-lg px-2.5 py-1"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2.5 text-[14px] text-stone-400 mt-4">
          <Pen />
          <span>What I&lsquo;ve done</span>
        </div>
        {ACHIEVEMENTS.map((ach, i) => (
          <div
            key={i}
            className={`py-3.5 ml-4 ${
              i < ACHIEVEMENTS.length - 1 ? "border-b border-stone-100" : ""
            }`}
          >
            <ul className="list-disc pl-4">
              <li className="text-[13.5px] text-stone-800 leading-[1.7]">
                <span className="font-medium">{ach.title}:</span>{" "}
                <span className="text-stone-500">{ach.desc}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
