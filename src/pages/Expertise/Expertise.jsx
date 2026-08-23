// src/pages/Expertise/Expertise.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ExpertiseCard from "../../components/ExpertiseCard/ExpertiseCard";
import { expertise } from "../../data/content";
import "./Expertise.css";

export default function Expertise() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading title="Expertise" />
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
      </div>
    </section>
  );
}
