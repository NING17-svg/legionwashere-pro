import type { ThemeConfig } from "@/types/theme";

// Visual values derived from this game's own artwork: the Collector hero banner
// (hot magenta #F04090 over plum #501070) and the three in-game screenshots
// (ink black, cream paper, deep indigo night). Body copy stays on a light
// warm paper surface so long answers remain readable.
export const theme: ThemeConfig = {
  mode: "light",
  navigation: "wiki-sidebar",
  tokens: {
    pageBg: "#fbf5f7",
    surface1: "#ffffff",
    surface2: "#f7edf2",
    surface3: "#eedde5",
    surfaceInverse: "#241a2b",
    textPrimary: "#1c1420",
    textMuted: "#5f5568",
    textInverse: "#ffffff",
    textOnAccentPrimary: "#ffffff",
    textLink: "#a80d63",
    focusRing: "#a80d63",
    line: "#e7d8e0",
    lineStrong: "#bda4b3",
    accentPrimary: "#d6207f",
    accentSecondary: "#5c2a6e",
    accentBright: "#f04090",
    statusConfirmed: "#1b7f63",
    statusCaution: "#b3541e",
    statusUnknown: "#6a6272",
  },
  typography: {
    headingFamily:
      '"Futura", "Avenir Next Condensed", "Avenir Next", "Trebuchet MS", system-ui, sans-serif',
    bodyFamily:
      '"Avenir Next", "Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif',
    headingWeight: 800,
  },
  shape: {
    radius: "10px",
    borderWidth: "1px",
    shadow: "0 16px 44px rgba(36, 26, 43, 0.10)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: {
    home: "visual-cover",
    hub: "grouped-list",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "dots", intensity: "low" },
};