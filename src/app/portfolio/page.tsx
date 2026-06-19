import { getProjects } from "@/lib/content";
import { ProjectFilter } from "@/components/project-filter";

export default function PortfolioPage() {
  const projectsData = getProjects();

  return (
    <>
      <header className="mb-[30px]">
        <h2 className="text-[24px] md:text-[32px] font-medium text-foreground capitalize pb-[7px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-secondary after:rounded-[3px] md:after:w-[40px] md:after:h-[5px]">
          Portfolio
        </h2>
      </header>

      <ProjectFilter
        categories={projectsData.categories}
        projects={projectsData.projects}
      />
    </>
  );
}
