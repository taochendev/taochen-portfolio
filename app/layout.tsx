import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://taochen.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tao Chen",
    template: "%s | Tao Chen",
  },
  description:
    "Senior Full Stack Engineer with 7+ years building scalable AI systems and high-performance web platforms. React, Next.js, TypeScript, Node.js, and AI infrastructure.",
  keywords: [
    "Senior Full Stack Engineer",
    "Full Stack Developer",
    "AI engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AI infrastructure",
    "San Jose",
  ],
  authors: [{ name: "Tao Chen", url: siteUrl }],
  creator: "Tao Chen",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Tao Chen",
    title: "Tao Chen | Senior Full Stack Engineer — AI & Web",
    description:
      "Senior Full Stack Engineer with 7+ years building scalable AI systems and high-performance web platforms. React, Next.js, TypeScript, Node.js.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tao Chen | Senior Full Stack Engineer — AI & Web",
    description:
      "Senior Full Stack Engineer. Scalable AI systems, React, Next.js, TypeScript, Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <AnimatedBackground />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
          <nav
            className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className="flex items-center gap-2 text-[1.18125rem] font-medium text-foreground transition-colors duration-200 hover:text-foreground-muted"
            >
              <Image
                src="logos/personal_logo.png"
                alt=""
                width={36}
                height={36}
                className="shrink-0 rounded-sm"
                priority={false}
              />
              Tao Chen
            </Link>
            <ul className="flex items-center gap-6 sm:gap-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="main-content" className="flex-1">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        <footer className="border-t border-white/10 py-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <Image
                src="logos/personal_logo.png"
                alt=""
                width={28}
                height={28}
                className="shrink-0 rounded-sm object-contain"
                priority={false}
              />
              <span className="text-sm text-foreground-muted">
                © {new Date().getFullYear()} Tao Chen
              </span>
            </div>
            <a
              href="mailto:tao.chen.dev@gmail.com"
              className="text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground"
            >
              tao.chen.dev@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
