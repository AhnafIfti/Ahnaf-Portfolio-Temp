// src/containers/Footer/Footer.jsx
import { footer } from "../../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          &copy; {year} {footer.copyrightName}
        </p>
      </div>
    </footer>
  );
}
