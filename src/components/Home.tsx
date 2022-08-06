import { Carousel } from "react-responsive-carousel";

import "../styles/Home.css";

const Home = () => {
  const imageArray: number[] = [1, 2, 3];
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
      {imageArray.map((value: number) => (
        <div key={value} className={`carousel slide-${value}`}></div>
      ))}
    </Carousel>
  );
};

export default Home;
