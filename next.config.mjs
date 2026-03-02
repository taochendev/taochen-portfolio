/** @type {import('next').NextConfig} */

// GitHub Pages: https://taochendev.github.io/taochen-portfolio/
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/taochen-portfolio" : "";
const assetPrefix = isGitHubPages ? "/taochen-portfolio/" : "";

const nextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: isGitHubPages, // required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
