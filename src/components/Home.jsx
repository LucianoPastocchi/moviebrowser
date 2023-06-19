import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              perspiciatis tenetur quibusdam quia, ut, optio, necessitatibus
              nisi aut recusandae fuga quisquam soluta rerum aliquid
              perferendis. Hic dolor vitae labore distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
