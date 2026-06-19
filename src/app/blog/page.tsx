import { getBlog } from "@/lib/content";
import { BlogCard } from "@/components/blog-card";

export default function BlogPage() {
  const blog = getBlog();

  return (
    <>
      <header className="mb-[30px]">
        <h2 className="text-[24px] md:text-[32px] font-medium text-foreground capitalize pb-[7px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-secondary after:rounded-[3px] md:after:w-[40px] md:after:h-[5px]">
          Blog
        </h2>
      </header>

      <section className="blog-posts mb-[10px]">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[30px]">
          {blog.posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
