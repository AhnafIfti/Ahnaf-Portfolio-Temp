// src/components/SectionHeading/SectionHeading.jsx
import "./SectionHeading.css";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>
        <strong>{title}</strong>
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
