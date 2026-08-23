// src/pages/Skills/Skills.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import SkillGroup from "../../components/SkillGroup/SkillGroup";
import { skillGroups } from "../../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading title="Skills" />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup
              key={group.id}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
