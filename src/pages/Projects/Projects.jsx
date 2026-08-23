// src/pages/Projects/Projects.jsx
import { useMemo, useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import { projects, projectCategories } from "../../data/content";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading title="Projects" />
        <ProjectFilter
          categories={projectCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="projects-cta">
          <Button
            href="https://github.com/AhnafIfti?tab=repositories"
            size="sm"
          >
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
