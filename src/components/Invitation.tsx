import { Box, Stack, Typography } from "@mui/material";

const Invitation = () => {
  return (
    <Box
      component="div"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      marginTop="80px"
    >
      <Typography
        variant="h1"
        component="h1"
        color="primary.contrastText"
        fontFamily="BickleyScriptRegular"
      >
        You're
      </Typography>
      <Typography
        variant="h1"
        component="h1"
        color="primary.contrastText"
        fontFamily="BickleyScriptRegular"
        sx={(theme) => ({
          paddingTop: { xs: 0, sm: theme.typography.fontSize },
          paddingLeft: { xs: 2, sm: 0 },
        })}
      >
        Invited!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: { xs: 0, sm: 2 },
          paddingRight: { xs: 0, md: 10, lg: 40 },
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/737038045?h=f1f5e8e2d5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;playsinline=0"
          width="412"
          height="732"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Engagement Invitation"
        ></iframe>
      </Box>
      <Stack
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
          sx={{ marginTop: { xs: 4, md: 0 }, marginRight: { xs: 2, md: 4 } }}
        >
          #ChabraDilDita
        </Typography>
      </Stack>
    </Box>
  );
};

export default Invitation;
