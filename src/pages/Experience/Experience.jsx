// src/pages/Experience/Experience.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import { getLogoUrl } from "../../utils/logoLoader";
import { experience } from "../../data/content";

export default function Experience() {
  return (
    <section className="page-section--tight">
      <div className="container">
        <SectionHeading title="Experience" />
        <div>
          {experience.map((item) => (
            <TimelineItem
              key={item.id}
              date={item.date}
              title={item.company}
              subtitle={item.role}
              location={item.location}
              description={item.description}
              logo={item.logo ? getLogoUrl(item.logo) : null}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
