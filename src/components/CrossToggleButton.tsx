import * as React from "react";
import { styled } from "@mui/material/styles";
import { alpha, ToggleButton } from "@mui/material";
import { red } from "@mui/material/colors";

const CrossToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  "&.MuiToggleButton-root": {
    "&:hover": {
      backgroundColor: alpha(red[800], 0.5),
    },
  },
  "&.MuiToggleButton-root.Mui-selected": {
    color: theme.palette.primary.contrastText,
    backgroundColor: alpha(red[800], 0.5),
  },
}));

export default CrossToggleButton;
