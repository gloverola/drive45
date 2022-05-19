const size = {
  phone: "600px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
  tv: "1400px",
};

export const device = {
  phone: `(max-width: ${size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(man-width: ${size.desktop})`,
  tv: `(min-width: ${size.tv})`,
};
