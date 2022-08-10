import "../styles/Proposal.css";
import { Box, Grid, Typography } from "@mui/material";

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
  ];
  return (
    <div className="proposal">
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontFamily: "BickleyScriptRegular",
          color: "primary.contrastText",
        }}
      >
        The Proposal
      </Typography>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontFamily: "BickleyScriptRegular",
          color: "primary.contrastText",
        }}
      >
        April 20, 2022
      </Typography>
      <Grid
        container
        columnGap={4}
        rowGap={{ xs: 4, lg: 0 }}
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
      >
        {imagesArray.map((image: Image, index: number) => (
          <Grid key={index}>
            <div className="card">
              <div className="card__face card__face--front">
                <Box component="img" src={image.src} alt={image.alt} />
              </div>
              <div className="card__face card__face--back">
                <Box component="img" src={image.srcBack} alt={image.altBack} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Proposal;
