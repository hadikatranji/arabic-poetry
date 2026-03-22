import { MetadataRoute } from "next";
import { SAMPLE_POETS } from "@/lib/sample-poets";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shi3r.com";

  const poetPages = SAMPLE_POETS.map((poet) => ({
    url: `${baseUrl}/poets/${poet.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/musajalah`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/poets`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/poems`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memorize`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...poetPages,
  ];
}
