import { useState } from "react";
import "./BookingForm.css";
import womanEatingImg from "./woman-eating.jpeg"; // put the image in the same folder

const BookingForm = ({ submitData }) => {
  // States for each field
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData({ fullName, email, phone, date, time, guests, message });
    // Optionally reset the form after submit
    setFullName("");
    setEmail("");
    setPhone("");
    setDate(new Date().toISOString().split("T")[0]);
    setTime("");
    setGuests(1);
    setMessage("");
  };

  return (
    <section className="margin-bottom-v-bg container" id="booking-section">
      <h2 className="reservation-heading u-center-text margin-bottom-sm">
        Reserve Your Table
      </h2>

      <div className="book">
        {/* Left image box */}
        <div
          className="book__img-box"
          role="img"
          aria-label="Woman eating food"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.1), rgba(85, 85, 85, 0.1)), url(${womanEatingImg})`,
          }}
        ></div>

        {/* Right form box */}
        <div className="book__text-box">
          <h4 className="margin-bottom-v-sm">Fill out your details below</h4>

          <form className="book__form" onSubmit={handleSubmit}>
            <div className="book__form-group">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                id="full-name"
                placeholder="Amir Aden"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="book__form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="book__form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="123-456-7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="book__form-group">
              <label htmlFor="reservation-date">Reservation Date</label>
              <input
                type="date"
                id="reservation-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="book__form-group">
              <label htmlFor="reservation-time">Reservation Time</label>
              <input
                type="time"
                id="reservation-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>

            <div className="book__form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                min="1"
                max="20"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
            </div>

            <div className="book__form-group">
              <label htmlFor="message">Special Information</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter any special requests or additional information here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="book__form-group">
              <button className="btn--filled" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
