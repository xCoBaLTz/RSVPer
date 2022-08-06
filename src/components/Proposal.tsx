import "../styles/Proposal.css";
import { Grid, Typography } from "@mui/material";

interface Image {
  src: string;
  srcBack: string;
  alt: string;
  altBack: string;
}

const Proposal = () => {
  const imagesArray: Image[] = [
    {
      src: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      srcBack: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      alt: "Proposal picture 1",
      altBack: "Proposal picture 1 back",
    },
    {
      src: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      srcBack: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      alt: "Proposal picture 1",
      altBack: "Proposal picture 1 back",
    },
    {
      src: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      srcBack: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      alt: "Proposal picture 1",
      altBack: "Proposal picture 1 back",
    },
    {
      src: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      srcBack: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      alt: "Proposal picture 1",
      altBack: "Proposal picture 1 back",
    },
    {
      src: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      srcBack: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      alt: "Proposal picture 1",
      altBack: "Proposal picture 1 back",
    },
    {
      src: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      srcBack: "https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg",
      alt: "Proposal picture 1",
      altBack: "Proposal picture 1 back",
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
        variant="h4"
        component="h4"
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
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="card__face card__face--back">
                <img src={image.srcBack} alt={image.altBack} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Proposal;
