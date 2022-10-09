import React from "react";
import "../../styles/hero.css";

// import heroDarkImg from  "./images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>we're Creating Perfecct</h2>
              <h2>Digital Product To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              veniam in saepe nobis, ducimus magni id necessitatibus, rerum
              tempore cumque eius consequatur reprehenderit, consequuntur quidem
              itaque labore enim expedita asperiores.
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>

          <div className="hero__img">
            <img src="/images/hero-img.png" alt='hero-img'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
