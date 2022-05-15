import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/reuse.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Recycle </h1>
        <Link to="/menu">
          <button>Explore Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;