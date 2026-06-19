"use client";

import { useState, useRef, useEffect } from "react";
import type { Project } from "@/types";
import { ProjectCard } from "./project-card";

interface ProjectFilterProps {
  categories: string[];
  projects: Project[];
}

export function ProjectFilter({ categories, projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  console.log(categories,projects)
  // Close select on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setSelectOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (p) => p.categories.some((c) => c.toLowerCase() === activeCategory)
        );

  return (
    <section className="projects">
      {/* Desktop filter buttons */}
      <ul className="hidden md:flex items-center gap-[25px] pl-[5px] mb-[30px]">
        <li>
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-[15px] md:text-[16px] transition-colors ${
              activeCategory === "all"
                ? "text-secondary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setActiveCategory(cat.toLowerCase())}
              className={`text-[15px] md:text-[16px] transition-colors ${
                activeCategory === cat.toLowerCase()
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile select dropdown */}
      <div className="md:hidden relative mb-[25px]" ref={selectRef}>
        <button
          onClick={() => setSelectOpen(!selectOpen)}
          className={`flex justify-between items-center w-full bg-card text-muted-foreground px-4 py-3 border border-border rounded-[14px] text-[14px] md:text-[15px] font-light ${
            selectOpen ? "active" : ""
          }`}
        >
          <span>
            {activeCategory === "all" ? "Select category" : activeCategory}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${
              selectOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {selectOpen && (
          <ul className="absolute right-0 top-full mt-[6px] w-full bg-card border border-border rounded-[14px] p-[6px] z-10">
            <li>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSelectOpen(false);
                }}
                className="w-full text-left text-muted-foreground px-[10px] py-2 rounded-[8px] text-[14px] md:text-[15px] font-light hover:bg-primary transition-colors"
              >
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => {
                    setActiveCategory(cat.toLowerCase());
                    setSelectOpen(false);
                  }}
                  className="w-full text-left text-muted-foreground px-[10px] py-2 rounded-[8px] text-[14px] md:text-[15px] font-light hover:bg-primary transition-colors"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Project list */}
      <ul className="flex flex-col gap-5 mb-[10px]">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
