import React from 'react';
import 'aos/dist/aos.css'; // Import AOS styles if you are using AOS animations
import '../Styles/OurServices.css'; // Adjust path to your CSS file if needed

const OurServices = () => {
  return (
    <section className="our-services py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="section-title text-center" data-aos="fade-right">
            <h5>Our Service</h5>
            <h2 className="display-6 fw-bold">What We Focus On</h2>
          </div>
        </div>
        <div className="row pt-5">
          <div
            data-aos="fade-up-right"
            className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column"
          >
            <div className="icon-box">
              <i className="fas fa-utensils fa-2x"></i>
              <span className="number">1</span>
            </div>
            <h4>Reservation</h4>
            <p className="text-center">
              Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod
              incididunt utote labore et
            </p>
          </div>
          <div
            data-aos="fade-down"
            className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column"
          >
            <div className="icon-box">
              <i className="fas fa-wine-glass-alt fa-2x"></i>
              <span className="number">2</span>
            </div>
            <h4>Private Event</h4>
            <p className="text-center">
              Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod
              incididunt utote labore et
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column"
          >
            <div className="icon-box">
              <i className="fas fa-laptop-house fa-2x"></i>
              <span className="number">3</span>
            </div>
            <h4>Online Order</h4>
            <p className="text-center">
              Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod
              incididunt utote labore et
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column"
          >
            <div className="icon-box">
              <i className="fas fa-motorcycle fa-2x"></i>
              <span className="number">4</span>
            </div>
            <h4>Fast Delivery</h4>
            <p className="text-center">
              Lorem ipsum dolor sit amet, tong consecteturto sed eiusmod
              incididunt utote labore et
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
