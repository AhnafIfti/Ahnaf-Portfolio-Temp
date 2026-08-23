// src/containers/Layout/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change so navigating between pages feels natural.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
