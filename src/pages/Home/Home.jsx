// src/pages/Home/Home.jsx
import Button from "../../components/Button/Button";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { site, socialLinks } from "../../data/content";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1 className="hero__heading">
          <strong className="gradient-text">{site.name}</strong>
          <span className="hero__subtitle">{site.title}</span>
        </h1>
        <p className="hero__tagline">{site.tagline}</p>
        <SocialLinks links={socialLinks} className="hero__socials" />
        <Button href={site.resumeUrl} size="sm">
          My Resume
        </Button>
      </div>
    </section>
  );
}
