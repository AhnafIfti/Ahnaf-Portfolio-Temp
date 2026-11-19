// src/pages/News/News.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { news } from "../../data/content";
import "./News.css";

// Turns one news "text" list into words + links.
// A string shows as normal text; { label, href } shows as a link.
function NewsText({ parts }) {
  return parts.map((part, i) =>
    typeof part === "string" ? (
      <span key={i}>{part}</span>
    ) : (
      <a key={i} href={part.href} target="_blank" rel="noopener noreferrer">
        {part.label}
      </a>
    ),
  );
}

export default function News() {
  return (
    <section className="page-section--tight">
      <div className="container">
        <SectionHeading title="News" />
        <ul className="news-list">
          {news.map((item) => (
            <li className="news-item" key={item.id}>
              <span className="news-item__date">{item.date}</span>
              <p className="news-item__text">
                <NewsText parts={item.text} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
