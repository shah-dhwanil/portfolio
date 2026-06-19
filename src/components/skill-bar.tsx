import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  return (
    <li className="mb-[15px] last:mb-0 md:mb-[25px]">
      <div className="flex items-center gap-[5px] mb-2">
        <h5 className="text-[13px] font-medium text-foreground">{skill.name}</h5>
        <data
          value={skill.level}
          className="text-[13px] font-light text-muted-foreground ml-auto"
        >
          {skill.level}%
        </data>
      </div>
      <div className="w-full h-2 rounded-[10px] bg-border">
        <div
          className="h-full rounded-[inherit] bg-secondary transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </li>
  );
}
