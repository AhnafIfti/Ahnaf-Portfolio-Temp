// src/components/AboutSummary/AboutSummary.jsx
import "./AboutSummary.css";

export default function AboutSummary({ image, alt, text }) {
  const imageUrl = new URL(`../../assets/images/${image}`, import.meta.url)
    .href;

  return (
    <section className="about-summary">
      <div className="container about-summary__inner">
        <div className="about-summary__photo">
          <img src={imageUrl} alt={alt} loading="lazy" />
        </div>
        <div className="about-summary__text">
          <h2>What I Do</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}
