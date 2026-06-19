import Image from "next/image";
import Link from "next/link";
import { Eye, ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li>
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-col sm:flex-row bg-primary rounded-[14px] overflow-hidden shadow-lg group transition-colors min-h-[200px] sm:min-h-[180px]"
      >
        <figure className="relative w-full sm:w-[200px] md:w-[260px] h-[180px] sm:h-auto shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 z-[1] transition-colors duration-300" />
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-[18px] rounded-[12px] opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 z-[1] transition-all duration-300">
            <Eye className="h-5 w-5" strokeWidth={2.5} />
          </div> */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, 260px"
          />
        </figure>

        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between gap-3">
          <div>
            <h3 className="text-[16px] md:text-[18px] font-medium text-foreground capitalize leading-tight mb-1">
              {project.title}
            </h3>
            <p className="text-[13px] font-light text-muted-foreground mb-2">
              {project.comingSoon ? "Coming Soon" : project.categories.join(", ")}
            </p>
            <p className="text-[14px] text-muted-foreground leading-relaxed line-clamp-2">
              {project.excerpt}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-secondary group-hover:underline underline-offset-2 transition-colors">
            View More
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </li>
  );
}
