// src/components/ParallaxBanner/ParallaxBanner.jsx
import "./ParallaxBanner.css";

export default function ParallaxBanner({ statement, stats }) {
  return (
    <section className="parallax-banner">
      <div className="parallax-banner__overlay" />
      <div className="container parallax-banner__content">
        <h2 className="parallax-banner__statement">{statement}</h2>
        {stats?.length > 0 && (
          <div className="parallax-banner__stats">
            {stats.map((stat) => (
              <div className="parallax-banner__stat" key={stat.label}>
                <span className="parallax-banner__stat-value">
                  {stat.value}
                </span>
                <span className="parallax-banner__stat-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
