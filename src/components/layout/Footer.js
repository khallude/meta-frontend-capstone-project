import "./Footer.css";
import logo1 from "./assets/logos/flipboard-logo.png";
import logo2 from "./assets/logos/ng-logo.png";
import logo3 from "./assets/logos/cnet-logo.png";
import logo4 from "./assets/logos/techcrunch-logo.png";
import logo5 from "./assets/logos/red-bull-logo.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Footer = () => {
  return (
    <footer className="footer">

      {/* SEAMLESS SCROLLING LOGOS */}
      <div className="marquee">
        <div className="marquee__inner">
          {/* duplicate logos 3x for seamless scroll */}
          {logos.concat(logos).concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt="Brand logo" className="marquee__logo" />
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="container grid grid--4-cols footer__grid">
        {/* Contact */}
        <div className="footer__address-col">
          <p className="footer__heading">Contact us</p>
          <address className="footer__contacts">
            <p className="footer__address">
              52018 khorda kiit-square,<br /> bhubaneswar, law campus
            </p>
            <p>
              <a className="footer__address-link" href="tel:966-201-7379">966-201-7379</a><br />
              <a className="footer__address-link" href="mailto:info@Bawazir.com">info@Zeytuni.com</a>
            </p>
          </address>
        </div>

        {/* Account */}
        <div className="footer__nav-col">
          <p className="footer__heading">Account</p>
          <ul className="footer__nav">
            <li><a className="footer__link" href="#">Create account</a></li>
            <li><a className="footer__link" href="#">Sign in</a></li>
            <li><a className="footer__link" href="#">iOS app</a></li>
            <li><a className="footer__link" href="#">Android app</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer__nav-col">
          <p className="footer__heading">Company</p>
          <ul className="footer__nav">
            <li><a className="footer__link" href="#">About Burger King</a></li>
            <li><a className="footer__link" href="#">For Business</a></li>
            <li><a className="footer__link" href="#">Cooking partners</a></li>
            <li><a className="footer__link" href="#">Careers</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer__nav-col">
          <p className="footer__heading">Resources</p>
          <ul className="footer__nav">
            <li><a className="footer__link" href="#">Recipe directory </a></li>
            <li><a className="footer__link" href="#">Help center</a></li>
            <li><a className="footer__link" href="#">Privacy & terms</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer__social ">
        <div className="footer__social-copyright container" >
        <span className="footer__social-links">
          <a className="footer__social-links-item" href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a className="footer__social-links-item" href="#"><i className="fa-brands fa-tiktok"></i></a>
          <a className="footer__social-links-item" href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a className="footer__social-links-item" href="#"><i className="fa-brands fa-instagram"></i></a>
        </span>

    <p className="footer__copyright-container">
      Copyright &copy; 2025 by Burger King, Inc. All rights reserved.
    </p>
</div>
      </div>


    </footer>
  );
};

export default Footer;
