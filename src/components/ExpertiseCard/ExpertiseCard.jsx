// src/components/ExpertiseCard/ExpertiseCard.jsx
import Icon from "../Icon/Icon";
import "./ExpertiseCard.css";

export default function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="expertise-card">
      <span className="expertise-card__icon">
        <Icon name={icon} size={28} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
