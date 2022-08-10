import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      color: "#fff",
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      color: "#fff",
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      color: "#fff",
      borderColor: "#fff",
    },
  },
});

export default CustomTextField;
