import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { alpha } from "@mui/material";
import { green, red } from "@mui/material/colors";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    color: red[700],
    "&.Mui-checked": {
      color: green[700],
      "& + .MuiSwitch-track": {
        backgroundColor: alpha(green[700], 0.5),
      },
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: alpha(red[700], 0.5),
  },
}));

export default CustomSwitch;
