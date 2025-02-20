import { createTheme, virtualColor } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "primary",
  defaultRadius: "sm",
  cursorType: "pointer",
  autoContrast: true,
  white: "#fff",
  black: "#000",
  breakpoints: {
    xs: "30em",
    sm: "48em",
    md: "64em",
    lg: "74em",
    xl: "90em",
    xxl: "92em",
  },
  colors: {
    primary: virtualColor({
      name: "primary",
      dark: "main",
      light: "secondary",
    }),

    main: [
      "#191D23", // 0
      "#0D0F11", // 1
      "#262C36", // 2
      "#2f3133", // 3
      "#262C36",
      "#262C36",
      "#262C36",
      "#262C36",
      "#262C36",
      "#262C36",
    ],
    secondary: [
      "#2DAAF9", // 0 chủ đạo xanh
      "#B8C0CC", // 1
      "#10302c", // 2
      "#0e2825", // 3
      "#2DAAF9",
      "#2DAAF9",
      "#2DAAF9",
      "#2DAAF9",
      "#2DAAF9",
      "#2DAAF9",
    ],
  },
});
