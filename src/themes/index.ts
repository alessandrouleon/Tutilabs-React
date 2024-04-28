import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.BACKGROUND_DARK,
      contrastText: COLORS.PRIMARY_BASE,
    },
    secondary: {
      main: COLORS.SECONDARY_DARK,
      contrastText: COLORS.PORPLE_DARK,
    },
    background: {
      default: COLORS.BACKGROUND_DARK,
      paper: COLORS.BACKGROUND_BASE,
    },
  },
});
