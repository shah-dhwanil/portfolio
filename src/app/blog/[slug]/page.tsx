import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors mb-4 text-[14px] md:text-[15px]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="relative w-full h-[250px] md:h-[350px] rounded-[16px] overflow-hidden mb-4">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-[18px] md:text-[26px] font-medium text-foreground">
              {post.title}
            </h1>
            <div className="flex items-center gap-[7px] mt-2">
              <span className="text-[13px] md:text-[14px] text-muted-foreground">
                {post.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <time
                dateTime={post.date}
                className="text-[13px] md:text-[14px] text-muted-foreground"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors px-4 py-2 rounded-[14px] text-[14px] shrink-0"
          >
            <ExternalLink className="h-4 w-4" />
            Read on Medium
          </a>
        </div>
      </header>

      <div className="text-[14px] md:text-[15px] font-light text-muted-foreground leading-relaxed">
        <MarkdownRenderer content={post.body} />
      </div>
    </>
  );
}
