// src/pages/Contact/Contact.jsx
import {
  FaGithub,
  FaLinkedin,
  FaGitlab,
  FaResearchgate,
  FaKaggle,
} from "react-icons/fa";
import { SiGooglescholar, SiGmail } from "react-icons/si";
import Icon from "../../components/Icon/Icon";
import { contact } from "../../data/content";
import "./Contact.css";
import "../../components/SocialLinks/SocialLinks.css";

// Matches the "icon" name in content.js to a logo
const accountIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gitlab: FaGitlab,
  scholar: SiGooglescholar,
  researchgate: FaResearchgate,
  kaggle: FaKaggle,
};

export default function Contact() {
  const details = [
    {
      label: "Email",
      icon: "mail",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: "Phone",
      icon: "phone",
      value: contact.phoneDisplay,
      href: `tel:${contact.phone}`,
    },
    { label: "Location", icon: "pin", value: contact.location },
  ];

  return (
    <section className="page-section--tight">
      <div className="container contact">
        {/* Left: headline + Gmail button */}
        <div className="contact__intro">
          <span className="contact__eyebrow">Contact me</span>
          <h1 className="contact__headline">
            Let’s build something{" "}
            <span className="contact__highlight">smart</span> together.
          </h1>
          <a
            className="contact__gmail"
            href={contact.gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__gmail-icon">
              <SiGmail size={16} aria-hidden="true" />
            </span>
            Email me on Gmail
          </a>
        </div>

        {/* Right: details card */}
        <div className="contact__card">
          <ul className="contact__details">
            {details.map((d) => (
              <li key={d.label} className="contact__detail">
                <span className="contact__detail-icon">
                  <Icon name={d.icon} size={18} />
                </span>
                <div className="contact__detail-text">
                  <span className="contact__label">{d.label}</span>
                  {d.href ? (
                    <a href={d.href}>{d.value}</a>
                  ) : (
                    <span>{d.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <hr className="contact__divider" />

          <span className="contact__label">Find me on</span>
          <ul className="social-links contact__socials">
            {contact.accounts.map((acc) => {
              const Logo = accountIcons[acc.icon];
              return (
                <li key={acc.name}>
                  <a
                    className="social-links__item"
                    href={acc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={acc.name}
                    title={acc.name}
                  >
                    {Logo && <Logo size={20} aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
