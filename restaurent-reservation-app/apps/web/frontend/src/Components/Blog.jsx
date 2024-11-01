import React from 'react';
import '../Styles/Blog.css'; // Adjust the path as necessary for your CSS

const OurBlog = () => {
  return (
    <section className="our-blog pt-5 my-5">
      <div className="container">
        <div className="row">
          <div className="section-title text-center" data-aos="fade-right">
            <h5>Updated from</h5>
            <h2 className="display-6 fw-bold">Our Featured Blog</h2>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="card" data-aos="fade-up-right">
              <div className="blog-info d-flex py-3">
                <div className="blog-view px-3">
                  <i className="fas fa-eye"></i>
                  <span>18</span>
                </div>
                <div className="blog-comment px-3">
                  <i className="fas fa-comment"></i>
                  <span>18</span>
                </div>
                <div className="blog-author">
                  <p className="mb-0 ps-3">Post By Admin</p>
                </div>
              </div>
              <div className="blog-featured-img">
                <img className="w-100" src="./assets/images/blog-grid-1.jpg" alt="" />
              </div>
              <div className="blog-content px-4 pt-5 pb-4 position-relative">
                <div className="blog-date">
                  <span className="day">12</span>
                  <span className="month">Jun</span>
                </div>
                <h3 className="blog-title">
                  <a href="javascript:void(0)">How To Cook The Spicy Chinese Noodle For Cold Weather</a>
                </h3>
                <p className="blog-description">
                  Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="blog-readmore text-end">
                  <a className="text-black text-decoration-none" href="javascript:void(0)">
                    Read More 
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="card" data-aos="fade-down">
              <div className="blog-info d-flex py-3">
                <div className="blog-view px-3">
                  <i className="fas fa-eye"></i>
                  <span>18</span>
                </div>
                <div className="blog-comment px-3">
                  <i className="fas fa-comment"></i>
                  <span>18</span>
                </div>
                <div className="blog-author">
                  <p className="mb-0 ps-3">Post By Admin</p>
                </div>
              </div>
              <div className="blog-featured-img">
                <img className="w-100" src="./assets/images/blog-grid-1-1.jpg" alt="" />
              </div>
              <div className="blog-content px-4 pt-5 pb-4 position-relative">
                <div className="blog-date">
                  <span className="day">12</span>
                  <span className="month">Jun</span>
                </div>
                <h3 className="blog-title">
                  <a href="javascript:void(0)">How To Cook The Spicy Chinese Noodle For Cold Weather</a>
                </h3>
                <p className="blog-description">
                  Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="blog-readmore text-end">
                  <a className="text-black text-decoration-none" href="javascript:void(0)">
                    Read More 
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="card" data-aos="fade-up-left">
              <div className="blog-info d-flex py-3">
                <div className="blog-view px-3">
                  <i className="fas fa-eye"></i>
                  <span>18</span>
                </div>
                <div className="blog-comment px-3">
                  <i className="fas fa-comment"></i>
                  <span>18</span>
                </div>
                <div className="blog-author">
                  <p className="mb-0 ps-3">Post By Admin</p>
                </div>
              </div>
              <div className="blog-featured-img">
                <img className="w-100" src="./assets/images/blog-grid-1-2.jpg" alt="" />
              </div>
              <div className="blog-content px-4 pt-5 pb-4 position-relative">
                <div className="blog-date">
                  <span className="day">12</span>
                  <span className="month">Jun</span>
                </div>
                <h3 className="blog-title">
                  <a href="javascript:void(0)">How To Cook The Spicy Chinese Noodle For Cold Weather</a>
                </h3>
                <p className="blog-description">
                  Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="blog-readmore text-end">
                  <a className="text-black text-decoration-none" href="javascript:void(0)">
                    Read More 
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
