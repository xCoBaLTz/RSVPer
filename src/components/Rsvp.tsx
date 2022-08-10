import { Alert, Box, FormControlLabel, Stack, Typography } from "@mui/material";
import { useState } from "react";
import {
  useGetInvitesQuery,
  useUpdateInviteMutation,
} from "../api/inviteApiSlice";
import { Invite } from "../redux/interfaces/inviteState";
import CustomSwitch from "./CustomSwitch";

const Rsvp = () => {
  let { data, error } = useGetInvitesQuery();
  const [updateInvite] = useUpdateInviteMutation();

  const [errMessage, setErrMessage] = useState("");

  if (error) {
    let errMsg;
    if ("status" in error) {
      errMsg = "error" in error ? error.error : JSON.stringify(error.data);
    } else {
      errMsg = error.message;
    }
    setErrMessage(errMsg || "");
  }

  const handleRsvpChange = (invite: Invite) => {
    const newInvite = {
      ...invite,
      rsvpStatus: !invite.rsvpStatus,
    } as Invite;

    updateInvite(newInvite)
      .unwrap()
      .catch((error) => {
        setErrMessage(error.data.detail);
      });
  };

  return (
    <Box component="div" marginTop="80px">
      <Stack
        minHeight="60vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          component="h1"
          variant="h1"
          color="primary.contrastText"
          fontFamily="BickleyScriptRegular"
        >
          Engagement Party
        </Typography>
        <Typography
          component="h3"
          variant="h3"
          color="primary.contrastText"
          fontFamily="BickleyScriptRegular"
        >
          November 11, 2022
        </Typography>
        <Typography
          marginBottom={8}
          component="h3"
          variant="h3"
          color="primary.contrastText"
          fontFamily="BickleyScriptRegular"
        >
          Six O' Clock
        </Typography>

        {errMessage ? (
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
        ) : (
          data?.map((invite: Invite, index: number) => {
            return (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                sx={{
                  width: { xs: "70vw", md: "60vm", lg: "45vw" },
                }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  color="primary.contrastText"
                  paddingRight={2}
                  flexGrow={1}
                >
                  {invite.firstName} {invite.lastName}
                </Typography>
                <FormControlLabel
                  sx={{ color: "primary.contrastText" }}
                  control={
                    <CustomSwitch
                      checked={invite.rsvpStatus}
                      onChange={() => handleRsvpChange(invite)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label={invite.rsvpStatus ? "Yes" : "No"}
                />
              </Stack>
            );
          })
        )}
        <Typography
          marginTop={4}
          component="h4"
          variant="h4"
          color="primary.contrastText"
          fontFamily="BickleyScriptRegular"
        >
          Kindly submit your response by September 5, 2022
        </Typography>
      </Stack>
    </Box>
  );
};

export default Rsvp;
