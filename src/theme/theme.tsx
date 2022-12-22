import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "brown.200",
        color: "gray.800"
      }
    }
  }
});
export default theme;
