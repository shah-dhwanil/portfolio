import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <header className="mb-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-4 text-[14px] md:text-[15px]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="relative w-full h-[250px] md:h-[350px] rounded-[16px] overflow-hidden mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[18px] md:text-[26px] font-medium text-foreground">
              {project.title}
            </h1>
            <p className="text-[14px] md:text-[15px] text-muted-foreground mt-1">
              {project.categories.join(", ")}
            </p>
          </div>

          {project.url && project.url !== "#" && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors px-4 py-2 rounded-[14px] text-[14px] shrink-0"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </header>

      <div className="text-[14px] md:text-[15px] font-light text-muted-foreground leading-relaxed">
        <MarkdownRenderer content={project.description} />
      </div>
    </>
  );
}
