import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getExperienceBySlug, getAllExperienceSlugs, getResume } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export async function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <>
      <header className="mb-6">
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-4 text-[14px] md:text-[15px]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resume
        </Link>
        <h1 className="text-[18px] md:text-[26px] font-medium text-foreground">
          {experience.title}
        </h1>
        <p className="text-[14px] md:text-[15px] text-muted-foreground mt-1">
          {experience.company} — {experience.period}
        </p>
      </header>

      <div className="text-[14px] md:text-[15px] font-light text-muted-foreground leading-relaxed">
        <MarkdownRenderer content={experience.description} />
      </div>
    </>
  );
}
