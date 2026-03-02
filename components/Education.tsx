import Image from "next/image";

const education = [
  {
    school: "San Francisco Bay University",
    degree: "Master of Science in Computer Science",
    dates: "2021 – 2022",
    location: "Fremont, CA",
    logo: "logos/SFBU.png",
  },
  {
    school: "University of Arizona",
    degree: "Bachelor of Science in Computer Science and Mathematics",
    dates: "2014 – 2018",
    location: "Tucson, AZ",
    logo: "logos/UOA.jpeg",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 py-20 lg:py-28"
      aria-labelledby="education-heading"
    >
      <div className="section-reveal" data-section-reveal>
        <h2
          id="education-heading"
          className="mb-12 text-center text-[1.575rem] font-semibold tracking-tight text-foreground sm:text-[1.96875rem]"
        >
          Education
        </h2>
        <div className="space-y-6">
          {education.map((entry) => (
            <article
              key={entry.school}
              className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] shadow-none transition-[border-color,box-shadow,transform] duration-200 hover:scale-[1.03] hover:border-white/20 hover:shadow-lg hover:shadow-black/20 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex shrink-0 justify-center border-b border-white/10 bg-white/[0.02] p-4 sm:border-b-0 sm:border-r sm:border-white/10 sm:p-5">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                  <Image
                    src={entry.logo}
                    alt=""
                    width={64}
                    height={64}
                    priority={false}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
              <div className="flex-1 px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {entry.school}
                  </h3>
                  <p className="text-sm text-foreground-muted">{entry.dates}</p>
                </div>
                <p className="mt-1 text-sm text-foreground-muted">
                  {entry.degree}
                </p>
                <p className="mt-1 text-xs text-foreground-muted/80">
                  {entry.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
