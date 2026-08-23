// src/pages/Education/Education.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import { education } from "../../data/content";

export default function Education() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading title="Education" />
        <div>
          {education.map((item) => (
            <TimelineItem
              key={item.id}
              date={item.date}
              title={item.title}
              subtitle={item.institution}
              description={item.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
