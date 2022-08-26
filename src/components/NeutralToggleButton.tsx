import * as React from "react";
import { styled } from "@mui/material/styles";
import { ToggleButton } from "@mui/material";

const NeutralToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  "&.MuiToggleButton-root.Mui-selected": {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
  },
}));

export default NeutralToggleButton;
