import {
  Alert,
  Box,
  Stack,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useGetInvitesQuery } from "../api/inviteApiSlice";
import { Invite } from "../redux/interfaces/inviteState";
import CheckToggleButton from "./CheckToggleButton";
import NeutralToggleButton from "./NeutralToggleButton";
import CrossToggleButton from "./CrossToggleButton";

const Rsvp = () => {
  let { data, error } = useGetInvitesQuery();

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

  const handleRsvpChange = (invite: Invite, rsvpStatus: boolean) => {
    if (rsvpStatus == null) {
      return;
    }

    // Reservations are now closed

    // const newInvite = {
    //   ...invite,
    //   rsvpStatus,
    // } as Invite;
    //
    // updateInvite(newInvite)
    //   .unwrap()
    //   .catch((error) => {
    //     setErrMessage(error.data.detail);
    //   });
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
          component="h2"
          variant="h2"
          color="primary.contrastText"
          fontFamily="BickleyScriptRegular"
        >
          Château Le Jardin
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
          marginBottom={4}
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
          <Box>
            <Stack>
              <Alert
                severity="warning"
                sx={{
                  backgroundColor: "rgb(22 11 11)",
                  color: "rgb(244 199 199)",
                  margin: 2,
                  fontSize: 20,
                  minWidth: { xs: "90vw", md: "55vw", lg: "45vw" },
                }}
              >
                It is now past the final RSVP date. If you are hoping to change
                your attendance status for any reason, please contact Seanan
                Chabra at (647) 564-2099.
              </Alert>
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              {data?.map((invite: Invite, index: number) => {
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
                    <ToggleButtonGroup
                      value={invite.rsvpStatus}
                      exclusive
                      onChange={(event, value) =>
                        handleRsvpChange(invite, value)
                      }
                      aria-label="rsvp status"
                    >
                      <CheckToggleButton disabled value={true} aria-label="Yes">
                        <CheckIcon />
                      </CheckToggleButton>
                      <NeutralToggleButton
                        disabled
                        value={null}
                        aria-label="Null"
                      >
                        <RemoveIcon />
                      </NeutralToggleButton>
                      <CrossToggleButton disabled value={false} aria-label="No">
                        <CloseIcon />
                      </CrossToggleButton>
                    </ToggleButtonGroup>
                  </Stack>
                );
              })}
            </Stack>
          </Box>
        )}
      </Stack>
      <Stack
        position="fixed"
        width="100%"
        bottom={0}
        left={0}
        right={0}
        justifyContent="center"
        alignItems="flex-end"
      >
        <Typography
          component="h3"
          variant="h3"
          fontFamily="BickleyScriptRegular"
          color="primary.contrastText"
          sx={{ marginRight: { xs: 2, md: 4 } }}
        >
          #ChabraDilDita
        </Typography>
      </Stack>
    </Box>
  );
};

export default Rsvp;
