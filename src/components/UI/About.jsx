import React from "react";
import "../../styles/about.css";

// import aboutImg from '../../images/about-us.jpg'

const chooseData = [
  {
    icon: 'ri-wifi-line',
    title: 'First working process',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus sed modi neque facilis ducimus fugiat enim voluptatibus at ab.'
  },
  {
    icon: 'ri-team-line',
    title: 'Dedicated team',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus sed modi neque facilis ducimus fugiat enim voluptatibus at ab.'
  },
  {
    icon: 'ri-customer-service-2-line',
    title: '24/7 Hours support',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus sed modi neque facilis ducimus fugiat enim voluptatibus at ab.'
  },
]
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Save time managing your business wirh</h2>
            <h2 className="highlight">Our best services</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur delectus dicta architecto. Natus, esse cum
              necessitatibus corporis voluptatum reiciendis repellat officia, ut
              inventore vel veritatis voluptates, laboriosam quod magnam ex.
            </p>

          <div className="choose__item-wrapper">
            {
              chooseData.map((item, index)=>(
                <div className="choose__us-item" key={index}>
                <span className="choose__us-icon">
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h4 className="choose__us-title">{item.title}</h4>
                  <p className="description">
                    {item.desc}
                  </p>
                </div>
              </div>
              ))
            }
          </div>
          </div>

          <div className="about__img">
            {/* <img src={aboutImg} alt="" /> */}
            <img src="/images/about-us.jpg" alt='about-img'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
