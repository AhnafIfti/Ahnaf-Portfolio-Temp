// src/pages/Publications/Publications.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { publications } from "../../data/content";
import "./Publications.css";

export default function Publications() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading title="Publications" />
        <div>
          {publications.map((pub) => (
            <div className="publication-item" key={pub.id}>
              <h3>{pub.title}</h3>
              <p>{pub.venue}</p>
              <a href={pub.href} target="_blank" rel="noopener noreferrer">
                Read Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
