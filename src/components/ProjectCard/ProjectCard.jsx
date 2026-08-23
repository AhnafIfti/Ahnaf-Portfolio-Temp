// src/components/ProjectCard/ProjectCard.jsx
import Icon from "../Icon/Icon";
import { techIcons } from "../../data/techIcons";
import { getIconUrl } from "../../utils/iconLoader";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, tech, links } = project;

  return (
    <article className="project-card">
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        {tech?.length > 0 && (
          <ul className="project-card__tech">
            {tech.map((t) => {
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
        )}
        {links?.length > 0 && (
          <div className="project-card__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <Icon name="external" size={14} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
