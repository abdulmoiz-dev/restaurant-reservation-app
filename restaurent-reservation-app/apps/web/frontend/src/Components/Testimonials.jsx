import React from 'react';
import '../Styles/Testimonials.css'; // Adjust the path as necessary for your CSS

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
              <div>
                <div className="testi-content">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vel ipsa dolore sunt vitae, culpa, dolor reiciendis facilis sed blanditiis repellat incidunt impedit iusto? Odio veniam beatae veritatis adipisci a!</p>
                </div>
                <div className="testi-info">
                  <span className="name">Timothy Doe</span>
                  <span className="position">Customer</span>
                </div>
              </div>
              <div>
                <div className="testi-content">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vel ipsa dolore sunt vitae, culpa, dolor reiciendis facilis sed blanditiis repellat incidunt impedit iusto? Odio veniam beatae veritatis adipisci a!</p>
                </div>
                <div className="testi-info">
                  <span className="name">Sarah Ruiz</span>
                  <span className="position">Director</span>
                </div>
              </div>
              <div>
                <div className="testi-content">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vel ipsa dolore sunt vitae, culpa, dolor reiciendis facilis sed blanditiis repellat incidunt impedit iusto? Odio veniam beatae veritatis adipisci a!</p>
                </div>
                <div className="testi-info">
                  <span className="name">Tracey Lewis</span>
                  <span className="position">Designer</span>
                </div>
              </div>
              <div>
                <div className="testi-content">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto vel ipsa dolore sunt vitae, culpa, dolor reiciendis facilis sed blanditiis repellat incidunt impedit iusto? Odio veniam beatae veritatis adipisci a!</p>
                </div>
                <div className="testi-info">
                  <span className="name">Jamie Erickson</span>
                  <span className="position">Manager</span>
                </div>
              </div>
            </div>
            <div className="slider-nav-wrapper mx-5">
              <div className="slider-nav">
                <div className="slider-nav-img active">
                  <img src="./assets/images/testi-1.jpg" alt="" />
                </div>
                <div className="slider-nav-img">
                  <img src="./assets/images/testi-2.jpg" alt="" />
                </div>
                <div className="slider-nav-img">
                  <img src="./assets/images/testi-3.jpg" alt="" />
                </div>
                <div className="slider-nav-img">
                  <img src="./assets/images/testi-4.jpg" alt="" />
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
