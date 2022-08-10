import { Box, Link, Stack, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box component="div" marginTop="80px">
      <Stack
        minHeight="60vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          component="h3"
          variant="h3"
          color="primary.contrastText"
          fontFamily="BickleyScriptRegular"
          textAlign="center"
        >
          If you need any help to RSVP, please feel free to reach out to us!
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              paddingRight: { xs: 0, sm: 5, md: 10, lg: 20 },
            }}
          >
            <Typography
              marginTop={6}
              component="h3"
              variant="h3"
              color="primary.contrastText"
              fontFamily="BickleyScriptRegular"
            >
              Father of the Bride
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              color="primary.contrastText"
            >
              Chander Gurdita
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              color="primary.contrastText"
            >
              <Link
                href="tel:416-837-2939"
                color="primary.contrastText"
                underline="hover"
              >
                (416) 837-2939
              </Link>
            </Typography>
          </Stack>

          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography
              marginTop={6}
              component="h3"
              variant="h3"
              color="primary.contrastText"
              fontFamily="BickleyScriptRegular"
            >
              The Couple
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              color="primary.contrastText"
            >
              Seanan & Sonia
            </Typography>
            <Typography
              component="h4"
              variant="h4"
              color="primary.contrastText"
            >
              <Link
                href="mailto:seananandsonia@gmail.com"
                target="_blank"
                color="primary.contrastText"
                underline="none"
              >
                seananandsonia@gmail.com
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
