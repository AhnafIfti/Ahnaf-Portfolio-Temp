// src/utils/logoLoader.js

// Eagerly import every logo image under src/assets/logos/ at build time,
// same reliable pattern as iconLoader.js — no runtime path-guessing.
const logoModules = import.meta.glob(
  "../assets/logos/**/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
    import: "default",
  },
);

const logoUrlMap = {};
Object.entries(logoModules).forEach(([path, url]) => {
  const key = path.replace("../assets/logos/", "");
  logoUrlMap[key] = url;
});

export function getLogoUrl(filename) {
  return logoUrlMap[filename] || null;
}
