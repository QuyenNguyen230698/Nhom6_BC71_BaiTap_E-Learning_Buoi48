/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // có thể thêm themes tùy chọn ở đây
    ],
    themes: false, // tắt themes mặc định
    darkTheme: false, // tắt dark theme
    base: true, // sử dụng các style cơ bản
    styled: true, // sử dụng các style được định nghĩa sẵn
    utils: true, // sử dụng các utility classes
    prefix: "", // prefix cho các class
    logs: false, // tắt logging
    themeRoot: ":root", // root element cho theme
    rtl: false, // tắt right-to-left
    checkbox: {
      size: "1rem", // kích thước checkbox
      animation: true, // hiệu ứng animation khi click
      color: "currentColor", // màu của checkbox
    },
  },
}

