export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",      
        surface: "#FFFFFF",         
        borderSoft: "#E5E7EB",

        textPrimary: "#0F172A",     
        textSecondary: "#475569",   
        textMuted: "#94A3B8",

        accent: "#6366F1",        
        accentSoft: "#EEF2FF",
      },

      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        pill: "9999px",
      },

      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.06)",
        hover: "0 12px 40px rgba(0, 0, 0, 0.08)",
        insetSoft: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },

      spacing: {
        section: "6rem",
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};
