export const navThemeMap = {
  "#home": {
    navClass: "bg-transparent",
    isDark: false,
    linkColor: "text-[#000000b0] hover:text-black",
    linkActive: "text-black",
  },
  "#about": {
    navClass: "backdrop-blur bg-white/95 shadow-sm border-b border-white/40",
    isDark: false,
    linkColor: "text-[#0E0E2E] hover:text-black",
    linkActive: "text-black",
  },
  "#services": {
    navClass: "backdrop-blur bg-[#f8f8f8]/90 shadow-sm",
    isDark: false,
    linkColor: "text-[#0E0E2E] hover:text-black",
    linkActive: "text-black",
  },
  "#projects": {
    navClass: "backdrop-blur bg-[#f9f5f2]/90 shadow-sm",
    isDark: false,
    linkColor: "text-[#0E0E2E] hover:text-black",
    linkActive: "text-black",
  },
  "#testimonial": {
    navClass: "backdrop-blur bg-white/90 shadow-sm",
    isDark: false,
    linkColor: "text-[#0E0E2E] hover:text-black",
    linkActive: "text-black",
  },
  "#sayhello": {
    navClass: "backdrop-blur bg-[#0E0E2E]/70 shadow-sm",
    isDark: true,
    linkColor: "text-white/85 hover:text-white",
    linkActive: "text-white",
  },
};

export function getThemeForHash(hash) {
  if (!hash) return navThemeMap["#home"];
  return navThemeMap[hash] || {
    navClass: "backdrop-blur bg-white/90 shadow-sm",
    isDark: false,
    linkColor: "text-[#0E0E2E] hover:text-black",
    linkActive: "text-black",
  };
}
