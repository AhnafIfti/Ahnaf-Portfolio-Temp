// src/pages/Projects/Projects.jsx
import { useMemo, useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectFilter from "../../components/ProjectFilter/ProjectFilter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Button from "../../components/Button/Button";
import {
  projects,
  projectCategories,
  professionalProjects,
} from "../../data/content";
import "./Projects.css";
import { techIcons } from "../../data/techIcons";
import { getIconUrl } from "../../utils/iconLoader";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) =>
      [].concat(p.category).includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <section className="page-section--tight">
      <div className="container">
        <SectionHeading title="Projects" />

        {/* ---- Professional Projects ---- */}
        <div className="projects-section">
          <div className="projects-section__head">
            <h3 className="projects-section__title">Professional Projects</h3>
            <p className="projects-section__subtitle">
              Built in teams at software companies. The code is private.
            </p>
          </div>

          <div className="pro-grid">
            {professionalProjects.map((p) => (
              <article className="pro-card" key={p.id}>
                <div className="pro-card__top">
                  <span className="pro-card__company">{p.company}</span>
                </div>
                <div>
                  <span className="pro-card__dates">{p.dates}</span>
                </div>
                <h4 className="pro-card__title">{p.title}</h4>
                <span className="pro-card__role">{p.role}</span>
                <p className="pro-card__desc">{p.description}</p>
                <ul className="project-card__tech pro-card__stack">
                  {p.stack.map((t) => {
                    const iconPath = techIcons[t];
                    const iconUrl = iconPath ? getIconUrl(iconPath) : null;

                    if (!iconUrl) {
                      return (
                        <li key={t} aria-label={t}>
                          {t}
                        </li>
                      );
                    }

                    return (
                      <li
                        key={t}
                        className="project-card__tech-item--icon"
                        aria-label={t}
                      >
                        <img
                          src={iconUrl}
                          alt=""
                          className="project-card__tech-icon"
                        />
                        <span className="project-card__tech-tooltip">{t}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="pro-card__private">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="4" y="11" width="16" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                  Company project · private code
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ---- Personal Projects ---- */}
        <div className="projects-section">
          <div className="projects-section__head">
            <h3 className="projects-section__title">Personal Projects</h3>
            <p className="projects-section__subtitle">
              Built on my own, with my two thesis projects. Code available on
              GitHub.
            </p>
          </div>

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
      </div>
    </section>
  );
}
