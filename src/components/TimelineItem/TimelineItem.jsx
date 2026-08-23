import Icon from "../Icon/Icon";
import "./TimelineItem.css";

export default function TimelineItem({ date, title, subtitle, description }) {
  return (
    <div className="timeline-item">
      {date && (
        <span className="timeline-item__date">
          <Icon name="calendar" size={16} /> {date}
        </span>
      )}
      <h3 className="timeline-item__title">{title}</h3>
      {subtitle && <p className="timeline-item__subtitle">{subtitle}</p>}
      {description && <p className="timeline-item__desc">{description}</p>}
    </div>
  );
}
