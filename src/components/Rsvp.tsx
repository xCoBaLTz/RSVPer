import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  useGetInvitesQuery,
  useUpdateInviteMutation,
} from "../api/inviteApiSlice";
import { Invite } from "../redux/interfaces/inviteState";

const Rsvp = () => {
  let { data, isLoading, isSuccess, isError, error } = useGetInvitesQuery();

  const [updateInvite] = useUpdateInviteMutation();

  const [errMessage, setErrMessage] = useState("");

  const handleRsvpChange = (invite: Invite, status: boolean) => {
    const newInvite = {
      id: invite.id,
      firstName: invite.firstName,
      lastName: invite.lastName,
      rsvpStatus: status,
    } as Invite;

    updateInvite(newInvite)
      .unwrap()
      .catch((error) => {
        setErrMessage(error.data.detail);
      });
  };

  let content;

  if (isLoading) {
    content = <CircularProgress></CircularProgress>;
  } else if (isSuccess) {
    content = data?.map((invite: Invite, index: number) => {
      return (
        <Box component="div">
          <Typography
            key={index}
            variant="h1"
            component="h1"
            color="primary.contrastText"
          >
            {invite.firstName}
          </Typography>
          <Box>
            <Button
              onClick={() => handleRsvpChange(invite, true)}
              sx={{ marginTop: 1 }}
              type="button"
              variant="contained"
              color="secondary"
            >
              Yes
            </Button>
            <Button
              onClick={() => handleRsvpChange(invite, false)}
              sx={{ marginTop: 1 }}
              type="button"
              variant="contained"
              color="secondary"
            >
              No
            </Button>
          </Box>
        </Box>
      );
    });
  } else if (isError) {
    content = (
      <Alert
        severity="error"
        sx={{
          backgroundColor: "rgb(22 11 11)",
          color: "rgb(244 199 199)",
          margin: 2,
          minWidth: { xs: "90vw", md: "55vw", lg: "45vw" },
        }}
        onClose={() => {
          setErrMessage("");
        }}
      >
        {errMessage}
      </Alert>
    );
  }

  return <div className="rsvp">{content}</div>;
};

export default Rsvp;
