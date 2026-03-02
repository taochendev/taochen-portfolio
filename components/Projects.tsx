import Image from "next/image";

const companyLogos: Record<string, string> = {
  "Creatify AI": "logos/creatify_ai_logo.jpg",
  "HeySam AI": "logos/heysam_logo.jpg",
  "WiFrost Inc": "logos/WiFrost_logo.jpg",
  "Adaptrum Inc": "logos/Adaptrum_logo.jpg",
};

const projects = [
  {
    title: "AI Video Generation Pipeline",
    company: "Creatify AI",
    description:
      "High-throughput pipeline for AI-driven video ads, powering thousands of renders per day for enterprise customers.",
    achievements: [
      "Parallel Python worker execution for optimized GPU/CPU utilization",
      "Stateful orchestration with retry logic, progress tracking, and fail-safe recovery",
      "High-concurrency APIs with Node.js, gRPC, and Kafka",
    ],
    tech: [
      "Python",
      "Node.js",
      "AWS Lambda/ECS",
      "Redis",
      "Kafka",
      "FFMPEG",
      "GPU pipelines",
    ],
  },
  {
    title: "Meeting Chatbot & ML Data Capture",
    company: "HeySam AI",
    description:
      "Automated meeting assistant and ML data pipeline for sales calls, with real-time capture and Slack integration.",
    achievements: [
      "Zoom SDK and Google Meet integration for live call monitoring and structured data extraction",
      "Streaming video/audio capture pipeline for ML training datasets",
      "Slack bot with context-aware RAG-style responses",
    ],
    tech: [
      "TypeScript",
      "Google Calendar API",
      "Slack API",
      "WebRTC",
      "Python",
      "FastAPI",
    ],
  },
  {
    title: "IoT Gateway & Channel Optimization",
    company: "WiFrost Inc",
    description:
      "Multi-vendor cloud provisioning and RF-based ML system for optimal WiFi spectrum channel selection.",
    achievements: [
      "Multi-vendor cloud provisioning and device telemetry streaming",
      "Channel AI—RF-based ML system recommending optimal WiFi spectrum channels",
    ],
    tech: [
      "Golang",
      "Python",
      "Dgraph",
      "MQTT",
      "Prometheus",
      "Kubernetes",
      "Docker",
    ],
  },
  {
    title: "TV White Space Cloud Proxy",
    company: "Adaptrum Inc",
    description:
      "Spectrum query engine and embedded diagnostic system for dynamic channel assignment across national databases.",
    achievements: [
      "Spectrum query engine interfacing with 20+ national TVWS databases",
      "Embedded system for real-time RF metrics and diagnostics",
    ],
    tech: ["Python", "Django", "AWS", "Embedded Linux", "GraphQL"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="section-reveal" data-section-reveal>
        <h2
          id="projects-heading"
          className="mb-12 text-center text-[1.575rem] font-semibold tracking-tight text-foreground sm:text-[1.96875rem]"
        >
          Projects
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-lg border border-white/10 bg-white/[0.02] p-5 shadow-none transition-transform duration-200 hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-black/20 sm:p-6"
            >
              <div className="mb-2 flex items-center gap-3">
                {companyLogos[project.company] && (
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white/5 sm:h-10 sm:w-10">
                    <Image
                      src={companyLogos[project.company]}
                      alt=""
                      fill
                      className="object-contain p-0.5"
                      sizes="40px"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {project.company}
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-foreground-muted">
                {project.description}
              </p>
              <ul className="mb-4 list-disc space-y-1.5 pl-5 text-xs leading-relaxed text-foreground-muted">
                {project.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-foreground-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
