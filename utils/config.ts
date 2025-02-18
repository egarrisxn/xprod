import type { SiteConfig } from "./types";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const siteConfig: SiteConfig = {
  name: "xprod",
  description: "The All-In-One Productivity App!",
  url: baseUrl,
  ogImage: `${baseUrl}/opengraph-image.png`,
  twitterImage: `${baseUrl}/twitter-image.png`,
  socialHandle: "@eg__xo",
  links: {
    twitter: "https://x.com/eg__xo",
    github: "https://github.com/egarrisxn",
    website: "https://egxo.dev",
  },
};
