// src/pages/Publications/Publications.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
// import TimelineItem from "../../components/TimelineItem/TimelineItem";
// import { getLogoUrl } from "../../utils/logoLoader";
import {
  publications,
  researchStatement,
  researchInterests,
  researchExperience,
} from "../../data/content";
import "./Publications.css";

// One interest card ("What I work on" or "Where I want to go next")
function InterestCard({ item, future = false }) {
  return (
    <li className={`interest-card${future ? " interest-card--next" : ""}`}>
      <span className="interest-card__dot" aria-hidden="true" />
      <div className="interest-card__body">
        <span className="interest-card__title">{item.title}</span>
        <span className="interest-card__text">{item.text}</span>
        {item.evidence && (
          <span className="interest-card__evidence">
            Evidence: {item.evidence}
          </span>
        )}
      </div>
    </li>
  );
}

// One research card (used for both theses)
function ResearchCard({ item }) {
  return (
    <article className="research-card">
      <aside className="research-card__side">
        <span
          className={`research-card__badge${
            item.badgeOutline ? " research-card__badge--outline" : ""
          }`}
        >
          {item.badge}
        </span>

        <dl className="research-card__meta">
          {item.meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>
                {Array.isArray(m.value)
                  ? m.value.map((a, i) => (
                      <span key={a.name}>
                        {a.me ? <strong>{a.name}</strong> : a.name}
                        {i < m.value.length - 1 && ", "}
                      </span>
                    ))
                  : m.value}
              </dd>
            </div>
          ))}
        </dl>

        {item.links?.length > 0 && (
          <div className="research-card__links">
            {item.links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`research-card__btn${
                  i > 0 ? " research-card__btn--outline" : ""
                }`}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </aside>

      <div className="research-card__main">
        <h4 className="research-card__title">{item.title}</h4>
        <p className="research-card__summary">{item.summary}</p>

        {item.contributions?.length > 0 && (
          <div>
            <span className="research-card__label">What I did</span>
            <ul className="research-card__list">
              {item.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {item.stats?.length > 0 && (
          <div className="research-card__stats">
            {item.stats.map((s) => (
              <div key={s.label} className="research-card__stat">
                <span className="research-card__stat-value">{s.value}</span>
                <span className="research-card__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {item.methods?.length > 0 && (
          <ul className="research-card__methods">
            {item.methods.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Publications() {
  return (
    <>
      {/* Section 1: Publications (unchanged) */}
      <section className="page-section--tight">
        <div className="container">
          <SectionHeading title="Publications" />
          <div className="research-cards">
            {publications.map((pub) => (
              <ResearchCard key={pub.id} item={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Research Interest and Experience */}
      <section className="page-section--tight research-section">
        <div className="container">
          <SectionHeading title="Research Interest and Experience" />

          <p className="research-statement">{researchStatement}</p>

          {/* Interests */}
          <h3 className="research-subtitle">Research Interests</h3>
          <div className="interests">
            <div className="interests__col">
              <span className="interests__label">Core interests</span>
              <ul className="interests__list">
                {researchInterests.current.map((item) => (
                  <InterestCard key={item.title} item={item} />
                ))}
              </ul>
            </div>
            <div className="interests__col interests__col--next">
              <span className="interests__label interests__label--muted">
                New directions
              </span>
              <ul className="interests__list">
                {researchInterests.next.map((item) => (
                  <InterestCard key={item.title} item={item} future />
                ))}
              </ul>
            </div>
          </div>

          <hr className="research-divider" />

          {/* Experience */}
          <h3 className="research-subtitle">Research Experience</h3>
          <div className="research-cards">
            {researchExperience.map((item) => (
              <ResearchCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
