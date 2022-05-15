import React from "react";
import recycle from "../assets/recycle.jpeg";
import "../styles/Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${recycle})` }}></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <Link to="/menu">
          <button type="submit"> Send Message</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Contact;