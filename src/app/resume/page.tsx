import { getResume } from "@/lib/content";
import { Timeline } from "@/components/timeline";
import { SkillBar } from "@/components/skill-bar";

export default function ResumePage() {
  const resume = getResume();

  const educationItems = resume.education.map((edu) => ({
    title: edu.institution
      ? `${edu.title} — ${edu.institution}`
      : edu.title,
    period: edu.period,
    description: edu.description,
  }));

  const experienceItems = resume.experience.map((exp) => ({
    title: exp.title,
    subtitle: exp.company,
    period: exp.period,
    description: exp.description,
    summary: exp.summary,
    slug: exp.slug,
  }));

  return (
    <>
      <header className="mb-[30px]">
        <h2 className="text-[24px] md:text-[32px] font-medium text-foreground capitalize pb-[7px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-secondary after:rounded-[3px] md:after:w-[40px] md:after:h-[5px]">
          Resume
        </h2>
      </header>

      <Timeline title="Education" items={educationItems} />

      <Timeline
        title="Experience"
        items={experienceItems}
        linkPrefix="/resume"
      />

      <section className="skill mb-[30px]">
        <h3 className="text-[18px] md:text-[24px] font-medium text-foreground mb-5">
          My skills
        </h3>
        <ul className="bg-primary p-5 md:p-[30px] rounded-[14px] shadow-lg">
          {resume.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </ul>
      </section>
    </>
  );
}
