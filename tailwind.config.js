/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Thêm các cấu hình tùy chỉnh ở đây
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};
