// src/pages/Expertise/Expertise.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ExpertiseCard from "../../components/ExpertiseCard/ExpertiseCard";
import { expertise, proficiencyGroups } from "../../data/content";
import "./Expertise.css";

export default function Expertise() {
  return (
    <section className="page-section--tight">
      <div className="container">
        <SectionHeading title="Expertise" />

        {/* Top: the 3 expertise cards */}
        <div className="expertise-grid">
          {expertise.map((item) => (
            <ExpertiseCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Below: one block per skill group, each with a line above it */}
        {proficiencyGroups.map((group) => (
          <div className="proficiency-group" key={group.id}>
            <hr className="expertise-divider" />
            <h3 className="proficiency-group__title">{group.title}</h3>
            <ul
              className="proficiency-list"
              style={{ "--rows": Math.ceil(group.items.length / 2) }}
            >
              {group.items.map((item) => (
                <li className="proficiency-item" key={item.name}>
                  <span className="proficiency-item__name">{item.name}</span>
                  <div
                    className="proficiency-item__track"
                    role="progressbar"
                    aria-label={item.name}
                    aria-valuenow={item.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="proficiency-item__fill"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
