// src/pages/Experience/Experience.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import { experience } from "../../data/content";

export default function Experience() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading title="Experience" />
        <div>
          {experience.map((item) => (
            <TimelineItem
              key={item.id}
              date={item.date}
              title={item.company}
              subtitle={item.role}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
