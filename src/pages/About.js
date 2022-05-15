import React from "react";
import about from "../assets/about.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Waste Management represents a more in-depth account of the domain and contains conceptual analyses of waste, the activity upon waste, and a holistic view of the goals of waste management. Waste Management Theory is founded on the expectation that waste management is to prevent waste causing harm to human health and the environment. The proper definition of waste is crucial to constructing a sustainable agenda of waste management. It is largely the case that current legislation attends to existing waste. Definitions emerging from this condition may, however, conflict with the goals of waste prevention, because something that already exists cannot be prevented from arising. When material is assigned the label of ‘waste’, it will be treated as such; consequently, despite its explicit wish of waste prevention, implicitly, legislation essentially amasses waste. The inherent philosophical implication of such definitions is that they are not able to facilitate a sustainable waste management system. Therefore, new, dynamic definitions for waste and waste management must be sought, which can explain why waste is created and can offer an intrinsic solution for the problem. A radically new approach, based on an object-oriented modelling language, is presented to define the key concepts of waste management. Keywords: Theory of Waste Management, waste, non-waste, waste management, definition, theory, purpose, structure, state, performance.
        </p>
      </div>
    </div>
  );
}

export default About;