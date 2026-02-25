import Image from "next/image";

const companyLogos: Record<string, string> = {
  "Creatify AI": "/logos/creatify_ai_logo.jpg",
  "HeySam AI": "/logos/heysam_logo.jpg",
  "WiFrost Inc": "/logos/WiFrost_logo.jpg",
  "Adaptrum Inc": "/logos/Adaptrum_logo.jpg",
};

const experience = [
  {
    company: "Creatify AI",
    location: "Mountain View, CA",
    title: "Founding AI Full Stack Engineer",
    dates: "06/2024 – 12/2025",
    bullets: [
      "Built AI-driven ad generation tools used by 100+ enterprise customers, supporting thousands of video renders per day.",
      "Reduced end-to-end AI video generation from 40+ minutes to under 5 minutes, improving satisfaction and platform throughput.",
      "Enabled scalable, high-concurrency internal APIs with robust orchestration, automated retries, and idempotent workflows.",
    ],
  },
  {
    company: "HeySam AI",
    location: "San Mateo, CA",
    title: "Senior Software Engineer",
    dates: "08/2023 – 06/2024",
    bullets: [
      "Built an automated meeting assistant for scheduled sales calls, eliminating manual notetaking and increasing sales efficiency.",
      "Powered ML training by capturing and processing real-time video/audio streams for high-quality datasets.",
      "Reduced support load with an AI-driven Slack chatbot providing instant, context-aware responses.",
    ],
  },
  {
    company: "WiFrost Inc",
    location: "Palo Alto, CA",
    title: "Founding Engineer",
    dates: "07/2021 – 07/2023",
    bullets: [
      "Launched multiple B2B SaaS platforms for global ISP customers, enabling large-scale device management across thousands of units.",
      "Improved network reliability and bandwidth efficiency with an AI-driven channel optimization system.",
      "Upgraded low-cost mini-PCs into reliable commercial gateways, reducing hardware costs for enterprise customers.",
    ],
  },
  {
    company: "Adaptrum Inc",
    location: "San Jose, CA",
    title: "Full Stack Software Engineer",
    dates: "08/2018 – 07/2021",
    bullets: [
      "Shipped the company’s first remote diagnostic embedded device, reducing customer support intervention.",
      "Improved spectrum efficiency with a cloud proxy that dynamically assigned channels using 20+ countrywide TVWS databases.",
      "Collaborated with international database providers and vendors for device certifications and cloud integrations.",
    ],
  },
  {
    company: "Adaptrum Inc",
    location: "San Jose, CA",
    title: "Software Engineering Intern",
    dates: "06/2018 – 08/2018",
    bullets: [
      "Reduced firmware defects by 25% through automated QA pipelines.",
      "Leveraged frontend and backend development skills across the stack.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-20 lg:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="section-reveal" data-section-reveal>
        <h2
          id="experience-heading"
          className="mb-12 text-center text-[1.575rem] font-semibold tracking-tight text-foreground sm:text-[1.96875rem]"
        >
          Experience
        </h2>
        <div className="relative space-y-0">
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10 sm:left-4"
          aria-hidden
        />
        {experience.map((role, index) => (
          <div
            key={`${role.company}-${role.title}-${index}`}
            className="group relative flex gap-6 pb-12 last:pb-0 sm:gap-8"
          >
            <div
              className="relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-foreground/20 bg-background sm:mt-2 sm:h-4 sm:w-4"
              aria-hidden
            />
            <div className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4 transition-transform duration-200 hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.04] sm:px-6 sm:py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-3">
                  {companyLogos[role.company] && (
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/5 sm:h-12 sm:w-12">
                      <Image
                        src={companyLogos[role.company]}
                        alt=""
                        fill
                        className="object-contain p-0.5"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {role.company}
                    </h3>
                    <p className="text-sm text-foreground-muted">{role.title}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground-muted">{role.dates}</p>
              </div>
              <p className="mb-3 mt-1 text-xs text-foreground-muted/80">
                {role.location}
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground-muted">
                {role.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
