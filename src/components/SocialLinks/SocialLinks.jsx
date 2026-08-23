// src/components/SocialLinks/SocialLinks.jsx
import Icon from "../Icon/Icon";
import "./SocialLinks.css";

export default function SocialLinks({ links, className = "" }) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="social-links__item"
          >
            <Icon name={link.icon} size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
