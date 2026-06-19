import { BookOpen, ArrowRight } from "lucide-react";
import { MarkdownRenderer } from "./markdown-renderer";

interface TimelineItem {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  summary?: string;
  slug?: string;
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
  linkPrefix?: string;
}

export function Timeline({ title, items, linkPrefix }: TimelineProps) {
  return (
    <section className="mb-[30px]">
      <div className="flex items-center gap-4 mb-[25px]">
        <div className="bg-primary w-[30px] h-[30px] md:w-[48px] md:h-[48px] rounded-[8px] md:rounded-[12px] flex items-center justify-center shrink-0">
          <BookOpen className="h-4 w-4 md:h-[18px] md:w-[18px] text-primary-foreground" />
        </div>
        <h3 className="text-[18px] md:text-[24px] font-medium text-foreground">
          {title}
        </h3>
      </div>

      <ol className="ml-[45px] md:ml-[65px] text-[14px] md:text-[15px]">
        {items.map((item, index) => (
          <li
            key={index}
            className="relative pb-[20px] last:pb-0
              before:content-[''] before:absolute before:top-[-25px] before:left-[-30px] before:md:left-[-40px]
              before:w-[1px] before:h-[calc(100%+50px)] before:bg-border
              last:before:hidden
              after:content-[''] after:absolute after:top-[5px] after:left-[-33px] after:md:left-[-43px]
              after:h-[6px] after:w-[6px] after:md:h-[8px] after:md:w-[8px]
              after:bg-secondary after:rounded-full after:shadow-[0_0_0_4px_#2a2a2a]"
          >
            <div>
              <h4 className="text-[15px] md:text-[16px] font-medium text-foreground leading-tight mb-[7px]">
                {linkPrefix && item.slug ? (
                  <a
                    href={`${linkPrefix}/${item.slug}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {item.title}
                  </a>
                ) : item.subtitle ? (
                  <>
                    {item.title} —{" "}
                    <span className="font-normal">{item.subtitle}</span>
                  </>
                ) : (
                  item.title
                )}
                {item.subtitle && linkPrefix && item.slug && (
                  <span className="font-normal"> — {item.subtitle}</span>
                )}
              </h4>
              <span className="text-[13px] md:text-[14px] text-secondary font-normal block mb-[7px]">
                {item.period}
              </span>
              <div className="text-[14px] md:text-[15px] font-light text-muted-foreground leading-relaxed">
                {item.summary ? (
                  <p>{item.summary}</p>
                ) : (
                  <MarkdownRenderer content={item.description} />
                )}
              </div>
              {linkPrefix && item.slug && (
                <a
                  href={`${linkPrefix}/${item.slug}`}
                  className="inline-flex items-center gap-1.5 mt-3 text-[13px] md:text-[14px] text-secondary hover:text-foreground transition-colors font-medium"
                >
                  View More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
