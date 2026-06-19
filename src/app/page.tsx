import { getAbout } from "@/lib/content";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { ServiceCard } from "@/components/service-card";

export default function AboutPage() {
  const about = getAbout();

  return (
    <>
      <header className="mb-[15px]">
        <h2 className="text-[24px] md:text-[32px] font-medium text-foreground capitalize pb-[7px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-secondary after:rounded-[3px] md:after:w-[40px] md:after:h-[5px]">
          About me
        </h2>
      </header>

      <section className="about-text mb-[35px]">
        <div className="text-[14px] md:text-[15px] font-light text-muted-foreground leading-relaxed space-y-[15px]">
          <MarkdownRenderer content={about.bio} />
        </div>
      </section>

      <section className="service mb-[35px]">
        <h3 className="text-[18px] md:text-[24px] font-medium text-foreground mb-5">
          What I&apos;m doing
        </h3>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {about.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ul>
      </section>
    </>
  );
}
