import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://matei-bargau.vercel.app",
      lastModified: new Date(),
    },
  ];
}
