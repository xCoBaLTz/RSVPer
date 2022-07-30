import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <Carousel
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      stopOnHover={false}
      swipeable={true}
      showThumbs={false}
      useKeyboardArrows={true}
    >
      <div className="carousel slide-1"></div>
      <div className="carousel slide-2"></div>
      <div className="carousel slide-3"></div>
    </Carousel>
  );
};

export default Home;
