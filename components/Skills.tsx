import Image from "next/image";

/* Map skill label to skillicons.dev icon id (https://skillicons.dev/icons?i=id) */
const skillIconMap: Record<string, string> = {
  "React.js": "react",
  "Next.js": "nextjs",
  "Tailwind CSS": "tailwind",
  TypeScript: "ts",
  JavaScript: "js",
  "Vite.js": "vite",
  "React Native": "react",
  Flutter: "flutter",
  "Vue.js": "vue",
  "Node.js": "nodejs",
  Flask: "flask",
  Django: "django",
  GraphQL: "graphql",
  "Apache Kafka": "kafka",
  MongoDB: "mongodb",
  AWS: "aws",
  Azure: "azure",
  GCP: "gcp",
  Docker: "docker",
  Kubernetes: "kubernetes",
  "GitLab CI": "gitlab",
  Prometheus: "prometheus",
  Grafana: "grafana",
  "Digital Ocean": "digitalocean",
};

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "Vite.js",
      "React Native",
      "Flutter",
      "Vue.js",
      "OAuth 2",
      "PWA",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Flask",
      "Django",
      "RESTful",
      "GraphQL",
      "gRPC",
      "Apache Kafka",
      "MongoDB",
      "Dgraph",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "GitLab CI",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "Fluentd",
      "Digital Ocean",
    ],
  },
  {
    label: "AI & Data Systems",
    skills: [
      "Fine-tuning & RAG",
      "ML pipelines",
      "WebRTC",
      "Web Scraping & Automation",
    ],
  },
  {
    label: "General",
    skills: [
      "Microservices",
      "Container Orchestration",
      "DevOps Automation",
      "IoT Connectivity",
      "Embedded Systems",
      "Computer Networks",
      "Third-Party Integrations",
      "Refactoring large codebases",
    ],
  },
  {
    label: "Soft skills",
    skills: [
      "Startup experience",
      "Creative thinker",
      "Self starter",
      "Cross-timezone collaboration",
      "Agile development",
    ],
  },
];

function SkillIcon({ skill }: { skill: string }) {
  const iconId = skillIconMap[skill];
  if (!iconId) return null;
  return (
    <Image
      src={`https://skillicons.dev/icons?i=${iconId}`}
      alt=""
      width={24}
      height={24}
      className="shrink-0"
      unoptimized
    />
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 lg:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="section-reveal" data-section-reveal>
        <h2
          id="skills-heading"
          className="mb-12 text-center text-[1.575rem] font-semibold tracking-tight text-foreground sm:text-[1.96875rem]"
        >
          Skills
        </h2>
        <div className="flex flex-col gap-10">
          {skillGroups.map((group) => (
            <div key={group.label} className="space-y-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-transform duration-200 hover:scale-[1.03] sm:px-5 sm:py-4">
                <h3 className="text-sm font-medium text-foreground">
                  {group.label}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-foreground-muted"
                    >
                      <SkillIcon skill={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
