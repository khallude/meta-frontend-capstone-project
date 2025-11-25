import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'John Turner',
    role: 'Financial Analyst at Quantum Finance',
    image: 'img/customers/john-turner.jpg',
    text: `Zeytuni Restaurant is a culinary gem. From the moment I stepped in, the elegant ambiance caught my attention. The menu's variety impressed me, and every dish I tried was a burst of delightful flavors. The staff's attentiveness and service added a personal touch, making my dining experience memorable. I'll definitely be returning to savor more of Bawazir's exquisite offerings.`
  },
  {
    name: 'Jessica Lee',
    role: 'Software Engineer at Tech Innovations Inc',
    image: 'img/customers/Jessica-lee.jpg',
    text: `My recent visit to Zeytuni Restaurant was an absolute delight. The cozy atmosphere and friendly staff created a welcoming environment. The diverse menu offered a range of delicious options, and each dish surpassed expectations in both presentation and flavor. Zeytuni has become my new favorite spot for an exceptional dining experience.`
  },
  {
    name: 'Daniel Patel',
    role: 'Human Resources Specialist at Global Dynamics Corporation',
    image: 'img/customers/Daniel-patel.jpg',
    text: `I can't speak highly enough of Zeytuni Restaurant. The sophisticated ambiance and courteous staff immediately set a positive tone. The menu's creativity and attention to quality shone through in every dish. The impeccable service made our group feel genuinely valued. Zeytuni has become a go-to destination for anyone seeking a perfect blend of ambiance, flavors, and exceptional service.`
  },
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Manager at BrightScape Solutions',
    image: 'img/customers/Sarah-Mitchell.jpg',
    text: `Zeytuni is a standout restaurant in every aspect. The modern yet cozy setting provided the perfect backdrop for a wonderful evening. The menu's diverse selection catered to all tastes, and each dish was a masterpiece. The attentive service from the staff made our dining experience even more enjoyable. Zeytuni has earned its place as my top choice for a remarkable culinary adventure.`
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group testimonials in pairs
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [groupedTestimonials.length]);

  return (
    <section className="testimonial-section container margin-bottom-v-bg">
      <h2 className="margin-bottom-sm">What people say about us!</h2>

      <div className="carousel">
        <div
          className="slide-row"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {groupedTestimonials.map((group, idx) => (
            <div key={idx} className="slide-row-group">
              {group.map((t, i) => (
                <div key={i} className="slide-row-cols">
                  <div className="customer">
                    <img className="img" src={t.image} alt={t.name} />
                  </div>
                  <blockquote className="customer-text">
                    <p>{t.text}</p>
                    <h3>{t.name}</h3>
                    <p>{t.role}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="indicator">
        {groupedTestimonials.map((_, i) => (
          <span
            key={i}
            className={`indicator-btn ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
