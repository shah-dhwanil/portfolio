import Image from "next/image";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <li className="blog-post-item">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-primary rounded-[16px] shadow-lg h-full group"
      >
        <figure className="w-full h-[200px] rounded-[12px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </figure>

        <div className="p-[15px] md:p-[25px]">
          <div className="flex items-center gap-[7px] mb-[10px]">
            <span className="text-[14px] md:text-[15px] font-light text-muted-foreground">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <time
              dateTime={post.date}
              className="text-[14px] md:text-[15px] font-light text-muted-foreground"
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>

          <h3 className="text-[16px] md:text-[18px] font-medium text-foreground mb-[10px] leading-snug group-hover:text-secondary transition-colors">
            {post.title}
          </h3>

          <p className="text-[14px] md:text-[15px] font-light text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </a>
    </li>
  );
}
