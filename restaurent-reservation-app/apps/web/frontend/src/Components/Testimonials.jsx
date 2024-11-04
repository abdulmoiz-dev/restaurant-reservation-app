import React from 'react';
import '../Styles/Testimonials.css'; // Adjust the path as necessary for your CSS

import testi1 from '../assets/images/testi-1.jpg';
import testi2 from '../assets/images/testi-2.jpg';
import testi3 from '../assets/images/testi-3.jpg';
import testi4 from '../assets/images/testi-4.jpg';

const Testimonials = () => {
  return (
    <section className="testimonials py-5 my-5">
      <div className="container py-5">
        <div className="row" data-aos="fade-right">
          <div className="section-title text-center">
            <h5>Testimonial</h5>
            <h2 className="display-5 fw-bold">Our Customer Says</h2>
          </div>
        </div>
        <div className="row">
          <div className="testimonial-slider-wrapper" data-aos="fade-up">
            <div className="slider-content pt-4 pb-4 mx-4">
              {/* Testimonial content */}
            </div>
            <div className="slider-nav-wrapper mx-5">
              <div className="slider-nav">
                <div className="slider-nav-img active">
                  <img src={testi1} alt="" />
                </div>
                <div className="slider-nav-img">
                  <img src={testi2} alt="" />
                </div>
                <div className="slider-nav-img">
                  <img src={testi3} alt="" />
                </div>
                <div className="slider-nav-img">
                  <img src={testi4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
