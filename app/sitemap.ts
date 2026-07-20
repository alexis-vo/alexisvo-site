// app/sitemap.ts
import { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/cv", "/contact", "/blog"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...postRoutes];
}