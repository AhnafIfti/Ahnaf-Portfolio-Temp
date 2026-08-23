// src/components/SkillGroup/SkillGroup.jsx
import "./SkillGroup.css";

export default function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <div className="skill-group__grid">
        {items.map((item) => {
          const iconUrl = new URL(
            `../../assets/icons/${item.icon}`,
            import.meta.url,
          ).href;
          return (
            <div
              className="skill-group__item"
              key={item.name}
              title={item.name}
            >
              <img src={iconUrl} alt={item.name} loading="lazy" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
