const iconModules = import.meta.glob("../assets/icons/**/*.png", {
  eager: true,
  import: "default",
});

const iconUrlMap = {};
Object.entries(iconModules).forEach(([path, url]) => {
  const key = path.replace("../assets/icons/", "");
  iconUrlMap[key] = url;
});

export function getIconUrl(relativePath) {
  return iconUrlMap[relativePath] || null;
}
