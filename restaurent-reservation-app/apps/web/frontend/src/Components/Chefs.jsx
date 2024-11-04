import React from 'react';
import '../Styles/Chefs.css';

// Import images directly
import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';
import team4 from '../assets/images/team-4.png';

const chefs = [
  {
    name: "Teresa Doe",
    position: "Head Chef",
    image: team1,
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "John Smith",
    position: "Sous Chef",
    image: team2,
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Emma Brown",
    position: "Pastry Chef",
    image: team3,
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "James Wilson",
    position: "Line Chef",
    image: team4,
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    linkedin: "https://www.linkedin.com",
  },
];

const OurChefs = () => {
  return (
    <section className="our-chefs py-5">
      <div className="container">
        <div className="row" data-aos="fade-right">
          <div className="section-title text-center">
            <h5>Meet Our</h5>
            <h2 className="display-6 fw-bold">Awesome Master Chefs</h2>
          </div>
        </div>

        <div className="row our-chef-slider-wrapper py-5" data-aos="fade-left">
          {chefs.map((chef, index) => (
            <div className="col-lg-4" key={index}>
              <div className="our-chef-slider d-flex flex-column align-items-center gap-4">
                <img width="200px" src={chef.image} alt={chef.name} />
                <div className="chef-slider-content">
                  <h5 className="text-center d-block">{chef.name}</h5>
                  <p className="text-center mb-0">{chef.position}</p>
                  <div className="d-flex justify-content-center">
                    <hr className="w-25 my-2" />
                  </div>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li className="mx-2">
                      <a href={chef.facebook} target="_blank" rel="noopener noreferrer" className="text-white">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href={chef.instagram} target="_blank" rel="noopener noreferrer" className="text-white">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href={chef.twitter} target="_blank" rel="noopener noreferrer" className="text-white">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href={chef.linkedin} target="_blank" rel="noopener noreferrer" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurChefs;
