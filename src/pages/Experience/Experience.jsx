// src/pages/Experience/Experience.jsx
import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Icon from "../../components/Icon/Icon";
import { getLogoUrl } from "../../utils/logoLoader";
import { getIconUrl } from "../../utils/iconLoader";
import { techIcons } from "../../data/techIcons";
import { experience } from "../../data/content";
import "../../components/ProjectCard/ProjectCard.css"; // reuse the tech icon pills
import "./Experience.css";

// Tech pill: icon with tooltip if we have one, otherwise a text pill
function TechPill({ name }) {
  const iconPath = techIcons[name];
  const iconUrl = iconPath ? getIconUrl(iconPath) : null;

  if (!iconUrl) {
    return <li aria-label={name}>{name}</li>;
  }

  return (
    <li className="project-card__tech-item--icon" aria-label={name}>
      <img src={iconUrl} alt="" className="project-card__tech-icon" />
      <span className="project-card__tech-tooltip">{name}</span>
    </li>
  );
}

function JobCard({ job }) {
  const logoUrl = job.logo ? getLogoUrl(job.logo) : null;

  return (
    <article className="job-card">
      {/* Left: company details */}
      <aside className="job-card__side">
        <div className="job-card__logo">
          {logoUrl ? (
            <img src={logoUrl} alt={`${job.company} logo`} loading="lazy" />
          ) : (
            <Icon name="building" size={26} />
          )}
        </div>

        <div>
          <h3 className="job-card__company">{job.company}</h3>
          <p className="job-card__location">{job.location}</p>
          <p className="job-card__location">{job.subtitle}</p>
        </div>

        <span className="job-card__dates">{job.dates}</span>

        {job.projects?.length > 0 && (
          <div className="job-card__projects">
            <span className="job-card__label">Projects</span>
            {job.projects.map((p) => (
              <Link key={p} to="/projects">
                {p} →
              </Link>
            ))}
          </div>
        )}
      </aside>

      {/* Right: roles, bullet points, tech */}
      <div className="job-card__main">
        {job.roles.map((role) => (
          <div className="job-role" key={role.title}>
            <span className="job-role__dot" aria-hidden="true" />
            <div className="job-role__head">
              <h4 className="job-role__title">{role.title}</h4>
              <span className="job-role__dates">{role.dates}</span>
            </div>
            {role.department && (
              <p className="job-role__department">{role.department}</p>
            )}
            <ul className="job-role__points">
              {role.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}

        {job.stack?.length > 0 && (
          <ul className="project-card__tech job-card__stack">
            {job.stack.map((t) => (
              <TechPill key={t} name={t} />
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="page-section--tight">
      <div className="container">
        <SectionHeading title="Experience" />
        <div className="job-list">
          {experience.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
