import React from 'react';
import '../Styles/Subscribe.css'; // Adjust the path as necessary for your CSS

// Import the image
import subscribeImage from '../assets/images/subscribe-us.png';

const SubscribeUs = () => {
  return (
    <section className="subscribe-us pb-5 mb-5">
      {/* Use the imported image here */}
      <img className="d-none d-lg-block" src={subscribeImage} alt="Subscribe Us" data-aos="fade-down-right" />
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 d-flex flex-column flex-md-row align-items-lg-center">
            <div className="content" data-aos="fade-right">
              <h5 className="display-6 text-black">Subscribe Us Now</h5>
              <p>
                Get more news and delicious dishes every day from us
              </p>
            </div>
            <div className="subscribe-form d-flex ps-0 ms-0 ps-lg-5 ms-lg-5" data-aos="fade-left">
              <div className="input-form w-100">
                <input className="border-0 px-3 w-100" type="email" placeholder="Email" />
              </div>
              <div className="input-button">
                <a className="text-decoration-none" href="#">
                  <i className="fa fa-paper-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeUs;
