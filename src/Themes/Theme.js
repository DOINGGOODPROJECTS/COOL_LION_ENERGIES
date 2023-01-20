import { createTheme } from "@mui/material";
import Palette from "./Palette";
import { styleOverrides, Typographie } from "./Typographie";
import Breakponts from "./BreakPonts";
import Width from "./Width";

const Theme = createTheme({
  palette: Palette,
  typography: Typographie,
  breakpoints: Breakponts,
  width: Width,
  components: {
    MuiCssBaseline: {
      styleOverrides: styleOverrides,
    },
  },
});

export default Theme;
