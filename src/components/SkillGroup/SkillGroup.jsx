// src/components/SkillGroup/SkillGroup.jsx
import { getIconUrl } from "../../utils/iconLoader";
import "./SkillGroup.css";

export default function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <div className="skill-group__grid">
        {items.map((item) => {
          const iconUrl = getIconUrl(item.icon);
          return (
            <div
              className="skill-group__item"
              key={item.name}
              title={item.name}
            >
              {iconUrl && <img src={iconUrl} alt={item.name} loading="lazy" />}
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
