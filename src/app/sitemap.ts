import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mateibargau.vercel.app",
      lastModified: new Date(),
    },
  ];
}
