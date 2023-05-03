import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-button': '#ffa600',
        'primary-button-hover': '#E29D36',
        'primary': '#ffa600',
        'primary-hover': '#E29D36',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
