import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import RestaurentsCards from "../Components/RestaurentsCards";

function Restaurents() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3001/restaurant");
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-4">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="row">
          {restaurants.map((restaurant) => (
           <div key={restaurant.restaurant_id} className="col-md-4 mb-4">
             <RestaurentsCards restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Restaurents;
