import { extendTheme } from "@chakra-ui/react";
const theme = {
  colors: {
    brand: {
      400: "#2661d7",
    },
    primary: "rebeccapurple",
  },
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
};

export default extendTheme(theme);
