export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  paragraphs: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "lambda-cold-starts-and-you",
    title: "Lambda cold starts and what actually fixed ours",
    date: "2026-04-12",
    readTime: "6 min",
    excerpt:
      "Moving a hot path off synchronous Lambda invocation, keeping pools warm where it mattered, and measuring with real traffic instead of guesses.",
    paragraphs: [
      "Cold starts are often framed as a Lambda problem, but in practice they are a placement and packaging problem: how big is the bundle, how often does a new execution environment spin up, and does your traffic pattern force constant churn?",
      "We reduced tail latency by splitting the synchronous API from long-running work, trimming dependencies in the entry bundle, and using provisioned concurrency only on the routes that paid for themselves.",
      "The lesson that stuck: optimize from traces and percentiles, not from blog defaults. What helped us may be noise in your workload — always chart p95 and p99 next to cost.",
    ],
  },
  {
    slug: "postgres-indexes-without-drama",
    title: "PostgreSQL indexes without the guess-and-check spiral",
    date: "2026-03-28",
    readTime: "8 min",
    excerpt:
      "A short workflow for composite indexes, partial indexes, and verifying plans before they land in production.",
    paragraphs: [
      "The fastest way to waste an index is to add it because a query felt slow. We start from EXPLAIN (ANALYZE, BUFFERS) output and write down the exact predicates and sort keys the planner is fighting.",
      "Composite column order matters more than people expect: equality filters first, then range, then columns used only for ORDER BY when you can cover them without exploding write amplification.",
      "Partial indexes pay off when a query always filters on the same sentinel — for example WHERE deleted_at IS NULL — and the table is wide enough that excluding rows from the index keeps it small and cache-friendly.",
    ],
  },
  {
    slug: "redis-cache-aside-notes",
    title: "Cache-aside with Redis: stale reads and stampedes",
    date: "2026-03-02",
    readTime: "5 min",
    excerpt:
      "Patterns that keep Redis useful under load: TTL jitter, key versioning, and a sane story when the cache is empty.",
    paragraphs: [
      "Cache-aside is simple until a popular key expires and every thread tries to recompute it at once. TTL jitter spreads expirations; a short per-key mutex (or single-flight in the app layer) caps thundering herds.",
      "When you deploy schema changes, version the cache keys so you never deserialize old shapes into new code paths. The one-time miss storm is cheaper than subtle corruption.",
      "We document an explicit fallback: if Redis is down, the service must degrade with bounded timeouts — not hang every upstream caller.",
    ],
  },
  {
    slug: "oauth2-rollout-checklist",
    title: "Rolling out OAuth 2.0 without breaking every deep link",
    date: "2026-02-10",
    readTime: "7 min",
    excerpt:
      "Migrations from OTP or custom auth to OAuth need a compatibility window, clear session semantics, and a rollback lever.",
    paragraphs: [
      "Users do not experience your architecture — they experience redirects, cookies, and clocks. We staged the rollout behind a feature flag and kept legacy sessions valid until idle expiry, rather than forcing a hard logout day zero.",
      "Short-lived access tokens plus refresh rotation reduced the blast radius of a leaked token. We logged refresh reuse to detect replay attempts early.",
      "The boring parts mattered most: callback URL allowlists, consistent clock skew handling, and support playbooks for “stuck on consent screen” cases.",
    ],
  },
  {
    slug: "frontend-performance-budgets",
    title: "Frontend performance budgets that teams actually follow",
    date: "2026-01-22",
    readTime: "6 min",
    excerpt:
      "Tying LCP and JS bundle caps to release gates, and reviewing budgets when routes change — not every sprint.",
    paragraphs: [
      "Budgets fail when they are aspirational numbers in a wiki. We attached them to CI: bundle size regressions block merges unless explicitly waived with a ticket owner.",
      "The homepage and auth flows got stricter caps than internal admin tools. Different surfaces, different risk — the budget should reflect user impact.",
      "When a route regressed, we fixed root causes (blocking fonts, render waterfalls) instead of shaving bytes at random until the graph turned green.",
    ],
  },
  {
    slug: "sqs-workers-at-least-once",
    title: "SQS workers and the art of idempotent handlers",
    date: "2025-12-08",
    readTime: "5 min",
    excerpt:
      "At-least-once delivery means duplicates are normal. Design handlers so a retry is harmless.",
    paragraphs: [
      "We store a deterministic idempotency key derived from the message body (or upstream event id) and short-circuit if work already completed.",
      "Visibility timeouts should reflect real processing time plus headroom; too low causes duplicate deliveries, too high delays recovery when a worker dies mid-flight.",
      "Dead-letter queues are not a graveyard — they need alerts, replay tooling, and owners, or you will only notice problems from angry users.",
    ],
  },
  {
    slug: "typescript-at-the-boundary",
    title: "TypeScript at the boundary: validating external JSON",
    date: "2025-11-19",
    readTime: "6 min",
    excerpt:
      "Runtime validation at API edges catches the cases types alone cannot — and keeps error messages operator-friendly.",
    paragraphs: [
      "We validate inbound webhooks and third-party payloads with small schemas and map failures to structured logs instead of stack traces in customer-facing paths.",
      "Types describe what we expect; parsers describe what we accept. Keeping those aligned reduced an entire class of production-only mismatches.",
      "When validation fails, include a correlation id and a redacted payload fingerprint so support can trace without leaking secrets.",
    ],
  },
  {
    slug: "docker-images-for-node-services",
    title: "Smaller Node.js Docker images without sacrificing debuggability",
    date: "2025-10-30",
    readTime: "4 min",
    excerpt:
      "Multi-stage builds, distroless or slim bases, and keeping dev-only tools out of the runtime layer.",
    paragraphs: [
      "Multi-stage builds let us install devDependencies for tests and prune them before the final image. The runtime stage only contains production modules and a non-root user.",
      "Switching base images cut download time during deploys; the bigger win was fewer CVE surfaces and faster cold starts on small tasks.",
      "We still ship a minimal shell where teams need emergency `kubectl exec` — but default images stay lean.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return BLOG_POSTS.map((p) => p.slug);
}
