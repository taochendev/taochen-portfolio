export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="section-reveal" data-section-reveal>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-transform duration-200 hover:scale-[1.03] sm:p-8">
        <h2
          id="contact-heading"
          className="mb-8 text-center text-[1.575rem] font-semibold tracking-tight text-foreground sm:text-[1.96875rem]"
        >
          Contact
        </h2>
        <div className="flex flex-col gap-6">
          <p className="whitespace-nowrap text-base text-foreground-muted">
            Open to new opportunities and collaborations. Reach out—I’d love to hear from you.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="mailto:tao.chen.dev@gmail.com"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-white/10"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/terrytaochen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/taochendev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-transparent px-5 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
