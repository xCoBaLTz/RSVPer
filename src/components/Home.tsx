import { Carousel } from "react-responsive-carousel";

import "../styles/Home.css";

const Home = () => {
  const imageArray: number[] = [1, 2, 3];
  return (
    <Carousel
      infiniteLoop
      autoPlay
      autoFocus
      swipeable
      useKeyboardArrows
      showStatus={false}
      stopOnHover={false}
      showThumbs={false}
    >
      {imageArray.map((value: number) => (
        <div key={value} className={`carousel slide-${value}`}></div>
      ))}
    </Carousel>
  );
};

export default Home;
