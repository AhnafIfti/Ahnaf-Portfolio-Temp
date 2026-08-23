import "./ProjectFilter.css";

export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="project-filter">
      <ul>
        {categories.map((cat) => (
          <li key={cat.key}>
            <button
              type="button"
              className={cat.key === active ? "is-active" : ""}
              onClick={() => onChange(cat.key)}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
