// src/components/PublicationItem/PublicationItem.jsx
import Icon from "../Icon/Icon";
import "./PublicationItem.css";

export default function PublicationItem({ date, title, venue, href, logo }) {
  return (
    <div className="publication-item">
      <div className="publication-item__logo">
        {logo ? (
          <img src={logo} alt={`${title} logo`} loading="lazy" />
        ) : (
          <span className="publication-item__logo-fallback">
            <Icon name="building" size={22} />
          </span>
        )}
      </div>
      <div className="publication-item__content">
        {date && (
          <span className="publication-item__date">
            <Icon name="calendar" size={14} /> {date}
          </span>
        )}
        <h3 className="publication-item__title">{title}</h3>
        {venue && <p className="publication-item__subtitle">{venue}</p>}
        {/* {location && <p className="publication-item__desc">{location}</p>} */}
        {href && (
          <a
            href={href}
            className="btn btn--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Paper <Icon name="external" size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
