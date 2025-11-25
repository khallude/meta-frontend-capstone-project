import { Link } from "react-router-dom";
import heroVideo from "./assets/zeytuni-restaurant.mp4"; // your video file
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero-section margin-bottom-v-bg">
      {/* Background video */}
      <div className="bg-video">
        <video className="bg-video__content" autoPlay loop muted>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
          </section>
  );
};

export default Hero;
