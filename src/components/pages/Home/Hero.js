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

      {/* Hero content on top */}
      <div className="container hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <Link className="button-primary" to={pages.get('bookings').path}>
          Reserve a table
        </Link>
      </div>
    </section>
  );
};

export default Hero;
