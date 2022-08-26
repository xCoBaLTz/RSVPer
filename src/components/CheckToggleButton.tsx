import * as React from "react";
import { styled } from "@mui/material/styles";
import { alpha, ToggleButton } from "@mui/material";
import { green } from "@mui/material/colors";

const CheckToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  "&.MuiToggleButton-root": {
    "&:hover, &.Mui-focusVisible": {
      backgroundColor: alpha(green[800], 0.5),
    },
  },
  "&.MuiToggleButton-root.Mui-selected": {
    color: theme.palette.primary.contrastText,
    backgroundColor: alpha(green[800], 0.5),
  },
}));

export default CheckToggleButton;
