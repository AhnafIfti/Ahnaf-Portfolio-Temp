// src/pages/Education/Education.jsx
import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Icon from "../../components/Icon/Icon";
import { getLogoUrl } from "../../utils/logoLoader";
import { education } from "../../data/content";
import "./Education.css";

function DegreeCard({ item }) {
  const logoUrl = item.logo ? getLogoUrl(item.logo) : null;

  return (
    <article className="edu-card">
      {/* Left: university details */}
      <aside className="edu-card__side">
        <div className="edu-card__logo">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${item.institution} logo`}
              loading="lazy"
            />
          ) : (
            <Icon name="building" size={26} />
          )}
        </div>

        <div>
          <h3 className="edu-card__institution">{item.institution}</h3>
          <p className="edu-card__location">{item.location}</p>
        </div>

        <span className="edu-card__dates">{item.dates}</span>

        {item.grade && (
          <div className="edu-card__grade">
            <span className="edu-card__label">{item.grade.label}</span>
            <span className="edu-card__grade-value">{item.grade.value}</span>
          </div>
        )}
      </aside>

      {/* Right: degree, thesis, units */}
      <div className="edu-card__main">
        <div>
          <span className="edu-card__badge">{item.level}</span>
          <h4 className="edu-card__degree">{item.degree}</h4>
          <p className="edu-card__major">{item.major}</p>
          <p className="edu-card__major">{item.department}</p>
        </div>

        {item.thesis && (
          <div className="edu-thesis">
            <span className="edu-card__label">Thesis</span>
            <p className="edu-thesis__title">{item.thesis.title}</p>
            <p className="edu-thesis__line">
              Supervisor: {item.thesis.supervisor}
            </p>
            <p className="edu-thesis__line">{item.thesis.result}</p>
            <Link to={item.thesis.link} className="edu-thesis__link">
              View research →
            </Link>
          </div>
        )}

        {item.units?.length > 0 && (
          <div>
            <span className="edu-card__label">Key units</span>
            <ul className="edu-card__units">
              {item.units.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Education() {
  return (
    <section className="page-section--tight">
      <div className="container">
        <SectionHeading title="Education" />
        <div className="edu-list">
          {education.map((item) => (
            <DegreeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
