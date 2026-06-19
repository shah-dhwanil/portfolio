import fs from "fs";
import path from "path";
import type {
  Profile,
  About,
  Resume,
  ProjectsData,
  BlogData,
  BlogPost,
  Contact,
  Project,
  Experience,
} from "@/types";

const contentDir = path.join(process.cwd(), "content");

function readJson<T>(fileName: string): T {
  const filePath = path.join(contentDir, fileName);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents) as T;
}

export function getProfile(): Profile {
  return readJson<Profile>("profile.json");
}

export function getAbout(): About {
  return readJson<About>("about.json");
}

export function getResume(): Resume {
  return readJson<Resume>("resume.json");
}

export function getProjects(): ProjectsData {
  return readJson<ProjectsData>("projects.json");
}

export function getProjectBySlug(slug: string): Project | undefined {
  const data = getProjects();
  return data.projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  const data = getProjects();
  return data.projects.map((p) => p.slug);
}

export function getBlog(): BlogData {
  return readJson<BlogData>("blog.json");
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const data = getBlog();
  return data.posts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  const data = getBlog();
  return data.posts.map((p) => p.slug);
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  const data = getResume();
  return data.experience.find((e) => e.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  const data = getResume();
  return data.experience.map((e) => e.slug);
}

export function getContact(): Contact {
  return readJson<Contact>("contact.json");
}
