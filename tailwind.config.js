/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#4338CA",
        },
        secondary: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
        background: "#F9FAFB",
        surface: "#FFFFFF",
        text: {
          DEFAULT: "#111827",
          muted: "#6B7280",
        },
        border: "#E5E7EB",
        danger: {
          DEFAULT: "#EF4444",
          light: "#F87171",
          dark: "#B91C1C",
        },
      },
    },
  },
  plugins: [],
}