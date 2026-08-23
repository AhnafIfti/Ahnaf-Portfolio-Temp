// src/components/Button/Button.jsx
import "./Button.css";

/**
 * Generic button/link. Renders an <a> when `href` is given, otherwise a <button>.
 */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  target,
  className = "",
  disabled = false,
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
