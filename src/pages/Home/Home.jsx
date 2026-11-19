// src/pages/Home/Home.jsx
import Button from "../../components/Button/Button";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import RotatingText from "../../components/RotatingText/RotatingText";
import ParallaxBanner from "../../components/ParallaxBanner/ParallaxBanner";
import AboutSummary from "../../components/AboutSummary/AboutSummary";
import { site, socialLinks, roles, parallaxSection } from "../../data/content";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <h1 className="hero__heading">
            <strong className="hero-text">{site.name}</strong>
            <span className="hero__subtitle">
              <RotatingText words={roles} />
            </span>
          </h1>
          <p className="hero__tagline">{site.tagline}</p>
          <SocialLinks links={socialLinks} className="hero__socials" />
          <Button href={site.resumeUrl} size="sm">
            My Resume
          </Button>
        </div>
      </section>
      <ParallaxBanner
        statement={parallaxSection.statement}
        stats={parallaxSection.stats}
      />
      <AboutSummary
        image="about-photo.jpg"
        alt={site.name}
        text={site.whatIDo}
      />
    </>
  );
}
