// src/pages/Publications/Publications.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { publications } from "../../data/content";
import PublicationItem from "../../components/PublicationItem/PublicationItem";

export default function Publications() {
  return (
    <>
      <section className="page-section--tight">
        <div className="container">
          <SectionHeading title="Publications" />
          <div>
            {publications.map((pub) => (
              <PublicationItem
                key={pub.id}
                date={pub.date}
                title={pub.title}
                venue={pub.venue}
                href={pub.href}
                // description={item.detail}
                // logo={item.logo ? getLogoUrl(item.logo) : null}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="page-section--tight">
        <div className="container">
          <SectionHeading title="Research Interest & Experience" />
          <div>
            {publications.map((pub) => (
              <PublicationItem
                key={pub.id}
                // date={pub.date}
                title={pub.title}
                venue={pub.venue}
                href={pub.href}
                // description={item.detail}
                // logo={item.logo ? getLogoUrl(item.logo) : null}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
