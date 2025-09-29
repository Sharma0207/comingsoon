module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px", // small phones
      sm: "640px", // tablets
      md: "768px", // larger tablets & small laptops
      lg: "1024px", // laptops & desktops
      xl: "1440px", // large desktops
      "2xl": "1536px", // larger desktops
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          background: "var(--bg-primary)",
          text: "var(--text-primary)",
        },
        secondary: {
          background: "var(--bg-main)",
          text: "var(--text-secondary)",
        },
        accent: {
          background: "var(--bg-accent-pink)",
          text: "var(--text-accent)",
        },
        // Text Colors
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          white: "var(--text-white)",
        },
        // Background Colors
        background: {
          main: "var(--bg-main)",
          white: "var(--bg-white)",
          cream: "var(--bg-cream)",
          light: "var(--bg-light)",
          accent: "var(--bg-accent-pink)",
        },
        // Border Colors
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
        },
        // Component-specific colors
        button: {
          text: "var(--button-text-primary)",
          textAlt: "var(--button-text-secondary)",
          border: "var(--button-border)",
        },
        line: {
          primary: "var(--line-bg-primary)",
          secondary: "var(--line-bg-secondary)",
          tertiary: "var(--line-bg-tertiary)",
        },
        link: {
          text: "var(--link-text)",
        },
      },
      keyframes: {
        blink: {
          '0%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.1)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        blink: 'blink 0.25s ease-in-out 1',
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
        "4xl": "var(--font-size-4xl)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "7xl": "var(--font-size-7xl)",
        "8xl": "var(--font-size-8xl)",
        hero: "var(--font-size-hero)",
      },
      fontWeight: {
        light: "var(--font-weight-light)",
        normal: "var(--font-weight-normal)",
        regular: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
        extrabold: "var(--font-weight-extrabold)",
        black: "var(--font-weight-black)",
      },
      lineHeight: {
        xs: "var(--line-height-xs)",
        sm: "var(--line-height-sm)",
        base: "var(--line-height-base)",
        md: "var(--line-height-md)",
        lg: "var(--line-height-lg)",
        xl: "var(--line-height-xl)",
        "2xl": "var(--line-height-2xl)",
        "3xl": "var(--line-height-3xl)",
        hero: "var(--line-height-hero)",
      },
      letterSpacing: {
        tight: "var(--letter-spacing-tight)",
        normal: "var(--letter-spacing-normal)",
        wide: "var(--letter-spacing-wide)",
        wider: "var(--letter-spacing-wider)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
        "4xl": "var(--spacing-4xl)",
        "5xl": "var(--spacing-5xl)",
        "6xl": "var(--spacing-6xl)",
        "7xl": "var(--spacing-7xl)",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      fontFamily: {
        inter: ["Inter", "Helvetica", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
