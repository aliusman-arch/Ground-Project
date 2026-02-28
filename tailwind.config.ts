import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo[600],
        secondary: colors.zinc[900],
      },
    },
  },
  plugins: [],
};

export default config;
