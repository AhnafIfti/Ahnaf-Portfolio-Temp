// src/components/TimelineItem/TimelineItem.jsx
import Icon from "../Icon/Icon";
import "./TimelineItem.css";

export default function TimelineItem({
  date,
  title,
  subtitle,
  description,
  logo,
  location,
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__logo">
        {logo ? (
          <img src={logo} alt={`${title} logo`} loading="lazy" />
        ) : (
          <span className="timeline-item__logo-fallback">
            <Icon name="building" size={22} />
          </span>
        )}
      </div>
      <div className="timeline-item__content">
        {date && (
          <span className="timeline-item__date">
            <Icon name="calendar" size={14} /> {date}
          </span>
        )}
        <h3 className="timeline-item__title">{title}</h3>
        {subtitle && <p className="timeline-item__subtitle">{subtitle}</p>}
        {location && <p className="timeline-item__desc">{location}</p>}
        {description && <p className="timeline-item__desc">{description}</p>}
      </div>
    </div>
  );
}
