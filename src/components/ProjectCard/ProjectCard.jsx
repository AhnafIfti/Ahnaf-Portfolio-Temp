import Icon from "../Icon/Icon";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, tech, image, links } = project;
  const imageUrl = new URL(`../../assets/images/${image}`, import.meta.url)
    .href;

  return (
    <article className="project-card">
      <div className="project-card__thumb">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        {tech?.length > 0 && (
          <ul className="project-card__tech">
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
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
