const size = {
  phone: "480px",
  tablet: "835px",
  laptop: "1024px",
  desktop: "1200px",
  tv: "1201px",
};

export const device = {
  phone: `(max-width: ${size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(man-width: ${size.desktop})`,
  tv: `(min-width: ${size.tv})`,
};
