import React, { useState } from "react";
import Pubgvid from "../GameRegestration/videos/Pubg.mp4";

const Pubg = () => {
  const [isRegistrationLive, setIsRegistrationLive] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [slot, setSlot] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setShowModal(true); // Show modal to confirm
  };

  const handleConfirm = () => {
    // Simulate form submission
    console.log({ name, email, date, time, slot });

    setMessage("Registration Successful! Slot booked.");
    setShowModal(false);

    // Optionally reset form:
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setSlot("");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="pubg-page">
      <video className="background-video" autoPlay muted loop>
        <source src={Pubgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <div className="registration-container">
        <h2>Fortnite Game Registration</h2>
        <p className="status">
          {isRegistrationLive
            ? "Registration is Live!"
            : "Registration is Closed."}
        </p>

        {isRegistrationLive && (
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="slot">Select Slot</label>
              <select
                id="slot"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                required
              >
                <option value="">Choose a slot</option>
                <option value="Morning 9 AM - 11 AM">
                  Morning 9 AM - 11 AM
                </option>
                <option value="Afternoon 1 PM - 3 PM">
                  Afternoon 1 PM - 3 PM
                </option>
                <option value="Evening 5 PM - 7 PM">Evening 5 PM - 7 PM</option>
                <option value="Night 8 PM - 12 PM">Night 8 PM - 12 PM</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit">Register Now</button>
            </div>
          </form>
        )}

        {message && <p className="message">{message}</p>}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Your Details</h3>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            <p>
              <strong>Slot:</strong> {slot}
            </p>

            <div className="modal-buttons">
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pubg;
