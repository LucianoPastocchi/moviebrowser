import React from "react";
import Hero from "../components/Hero";

const About = () => {
  return (
    <div>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              quaerat ad, similique illo atque, accusamus veniam debitis
              obcaecati, earum quos quibusdam saepe optio temporibus excepturi
              est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
