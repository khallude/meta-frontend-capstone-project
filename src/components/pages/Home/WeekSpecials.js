import React from "react";
import { Link } from "react-router-dom";
import './WeekSpecials.css';

// Images
import sandwichImage from './assets/meals/appetizers/sandwich.png';
import roastedChickenImage from './assets/meals/main-course/roasted-chicken.png';
import burgerImage from './assets/meals/main-course/burger.png';
import grillPlatterImage from './assets/meals/main-course/Grill-Platter.png';

const menuItems = [
  {
    name: "Hamburger with Fried Fries",
    image: sandwichImage,
    rating: 4.8,
    price: "$16",
    description:
      "Succulent beef patty, flame-grilled to perfection, nestled between soft buns with fresh lettuce and tomatoes."
  },
  {
    name: "Roasted Chicken",
    image: roastedChickenImage,
    rating: 4.9,
    price: "$8",
    description:
      "A luscious fusion of ripe mangoes blended to creamy perfection, creating a tropical escape in every sip."
  },
  {
    name: "Grilled Chicken Spaghetti",
    image: burgerImage,
    rating: 4.4,
    price: "$14.5",
    description:
      "Tender pasta, zesty tomato sauce, and succulent grilled chicken. A perfect blend of flavors!"
  },
  {
    name: "Vegetable Grill Platter",
    image: grillPlatterImage,
    rating: 3.9,
    price: "$11",
    description:
      "A colorful ensemble of fresh lettuce, cherry tomatoes, cucumbers, and bell peppers, topped with perfectly boiled eggs."
  }
];

const WeekSpecials = () => {
  return (
    <section className="week-specials-section container margin-bottom-v-bg">
      <div className="specials-heading margin-bottom-md">
        <h2>This Week Specials</h2>
        <div className="full-menu">
          <Link to="#" className="btn-text">
            View Full Menu <strong>&rarr;</strong>
          </Link>
        </div>
      </div>

      <div className="week-specials-grid margin-bottom-bg">
        {menuItems.map((item, index) => (
          <div key={index} className="card">
            {/* Image Section */}
            <div className="card__img-box">
              <img className="img" src={item.image} alt={item.name} />
              <span className="card__rating">
                {item.rating} <i className="fa-solid fa-star"></i>
              </span>
            </div>

            {/* Content Section: description + actions */}
            <div className="card__content">
              <div className="card__description">
                <p>{item.description}</p>
              </div>
              <div className="card__actions">
                <span className="heart-box">
                  <i className="fa-regular fa-heart heart-box__icon"></i>
                </span>
                <span className="card__price">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeekSpecials;
