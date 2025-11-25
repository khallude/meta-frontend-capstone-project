import './OurStory.css';
import chefImage from './assets/head-chef.png';
import clientImage from './assets/satisfied-client.png';
import customer1 from './assets/customers/customer1.jpg';
import customer2 from './assets/customers/customer2.jpg';
import customer3 from './assets/customers/customer3.jpg';
import customer4 from './assets/customers/customer4.jpg';
import customer5 from './assets/customers/customer5.jpg';
import customer6 from './assets/customers/customer6.jpg';

const AboutHome = () => {
  return (
    <section className="about-section margin-bottom-v-bg container">
      <div className="about grid grid--3-cols">

        <figure className="about__img-box-1">
          <img src={chefImage} alt="Head Chef" className="img" />
          <figcaption className="img__caption">
            <span>Muhammad Amin</span> Head chef
          </figcaption>
        </figure>

        <div className="about__text">
          <h1 className="primary-heading">Make Your Life Better</h1>
          <p className="paragraph margin-bottom-sm">
            We are driven by a singular mission: to make your life better. Our commitment to
            excellence extends beyond the plate, as we strive to provide an atmosphere that
            nourishes not just your body, but your soul. At <span>Zeytuni</span>, every dish
            is crafted with passion, every detail meticulously curated to enhance your dining
            experience. Join us, and let us be the catalyst for making your life better, one
            extraordinary meal at a time.
          </p>

          <div className="margin-bottom-md">
            <a href="#" className="btn--outline">Read More &darr;</a>
          </div>

          <div className="delivered">
            <div className="delivered__images">
              <img src={customer1} alt="Customer photo" />
              <img src={customer2} alt="Customer photo" />
              <img src={customer3} alt="Customer photo" />
              <img src={customer4} alt="Customer photo" />
              <img src={customer5} alt="Customer photo" />
              <img src={customer6} alt="Customer photo" />
            </div>
            <p className="delivered__text">
              <span>175,000+</span> meals delivered last year!
            </p>
          </div>
        </div>

        <figure className="about__img-box-2">
          <img src={clientImage} alt="Satisfied Client" className="img" />
          <figcaption className="img__caption">
            <span>Maria Adil</span> Satisfied Client
          </figcaption>
        </figure>

      </div>
    </section>
  );
};

export default AboutHome;
