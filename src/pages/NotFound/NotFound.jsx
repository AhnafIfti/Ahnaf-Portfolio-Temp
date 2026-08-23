// src/pages/NotFound/NotFound.jsx
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <h1 className="gradient-text">404</h1>
        <p>That page doesn&apos;t exist.</p>
        <Link to="/" className="btn btn-primary btn-sm">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
