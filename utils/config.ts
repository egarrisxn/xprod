import type { SiteConfig } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export const siteConfig: SiteConfig = {
  name: "xprod",
  description: "The All-In-One Productivity App!",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image.png`,
  twitterImage: `${siteUrl}/twitter-image.png`,
  socialHandle: "@eg__xo",
  links: {
    twitter: "https://x.com/eg__xo",
    github: "https://github.com/egarrisxn",
    website: "https://egxo.dev",
  },
};
