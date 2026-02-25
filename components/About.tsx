export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-20 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="section-reveal" data-section-reveal>
        <h2
          id="about-heading"
          className="mb-12 text-center text-[1.575rem] font-semibold tracking-tight text-foreground sm:text-[1.96875rem]"
        >
          About
        </h2>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 shadow-lg shadow-black/10 transition-transform duration-200 hover:scale-[1.03] sm:p-8 md:p-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-foreground-muted sm:text-lg">
                I am a Senior Full Stack Engineer with 7 years of experience
                building scalable web applications and AI-powered products. I
                focus on React, Next.js, TypeScript, and Node.js across the
                stack, and have shipped reliable features for fast-moving teams
                from polished UI work to backend services and production
                pipelines.
              </p>
              <p className="text-base leading-relaxed text-foreground-muted sm:text-lg">
                I am experienced on AWS, Azure, and GCP, with a strong record of
                designing efficient APIs, improving system performance, and
                delivering at scale.
              </p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="mb-4 text-sm font-medium text-foreground">
                Core strengths
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base text-foreground-muted">
                <li>AI pipelines and ML training data systems</li>
                <li>Distributed systems and high-concurrency APIs</li>
                <li>Scalable APIs and cloud infrastructure</li>
                <li>End-to-end ownership from design to production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
