import "../styles/Proposal.css";
import { Box, Grid, Stack, Typography } from "@mui/material";

interface Image {
  src: string;
  srcBack: string;
  alt: string;
  altBack: string;
}

const Proposal = () => {
  const imagesArray: Image[] = [
    {
      src: "/assets/images/proposal1-min.jpeg",
      alt: "Proposal picture 1",
      srcBack: "/assets/images/proposal1-back-min.jpeg",
      altBack: "Proposal picture 1 back",
    },
    {
      src: "/assets/images/proposal2-min.jpeg",
      alt: "Proposal picture 2",
      srcBack: "/assets/images/proposal2-back-min.jpeg",
      altBack: "Proposal picture 2 back",
    },
    {
      src: "/assets/images/proposal3-min.jpeg",
      alt: "Proposal picture 3",
      srcBack: "/assets/images/proposal3-back-min.jpeg",
      altBack: "Proposal picture 3 back",
    },
    {
      src: "/assets/images/proposal4-min.jpeg",
      alt: "Proposal picture 4",
      srcBack: "/assets/images/proposal4-back-min.jpeg",
      altBack: "Proposal picture 4 back",
    },
    {
      src: "/assets/images/proposal5-min.jpeg",
      alt: "Proposal picture 5",
      srcBack: "/assets/images/proposal5-back-min.jpeg",
      altBack: "Proposal picture 5 back",
    },
    {
      src: "/assets/images/proposal6-min.jpeg",
      alt: "Proposal picture 6",
      srcBack: "/assets/images/proposal6-back-min.jpeg",
      altBack: "Proposal picture 6 back",
    },
  ];
  return (
    <Box
      component="div"
      minHeight="90vh"
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
      marginTop="80px"
    >
      <Typography
        variant="h1"
        component="h1"
        fontFamily="BickleyScriptRegular"
        color="primary.contrastText"
      >
        The Proposal
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        fontFamily="BickleyScriptRegular"
        color="primary.contrastText"
      >
        April 20, 2022
      </Typography>
      <Grid
        container
        columnGap={4}
        rowGap={3}
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        {imagesArray.map((image: Image, index: number) => (
          <Grid
            item
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              perspective: "800px",
            }}
          >
            <Box component="div" className="card">
              <Box component="div" className="card_face card_face-front">
                <Box component="img" src={image.src} alt={image.alt} />
              </Box>
              <Box component="div" className="card_face card_face-back">
                <Box component="img" src={image.srcBack} alt={image.altBack} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
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
          marginTop={4}
          sx={{ marginRight: { xs: 2, md: 4 } }}
        >
          #ChabraDilDita
        </Typography>
      </Stack>
    </Box>
  );
};

export default Proposal;
