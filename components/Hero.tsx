import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-fade-in flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-16 text-center sm:py-24"
      aria-label="Introduction"
    >
      <div className="w-full space-y-8">
        <div className="mx-auto w-full max-w-5xl">
          <Image
            src="/logos/TaoChen2.png"
            alt="Tao Chen - Senior Full Stack Engineer"
            width={1152}
            height={494}
            className="h-auto w-full rounded-lg object-contain"
            priority
          />
        </div>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
          <Link
            href="#projects"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-white/10 sm:w-auto sm:min-w-[140px]"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-white/10 sm:w-auto sm:min-w-[140px]"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
