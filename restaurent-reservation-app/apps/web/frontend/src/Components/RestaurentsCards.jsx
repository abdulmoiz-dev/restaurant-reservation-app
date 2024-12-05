import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BranchCard from "./BranchCard"; // Import the BranchCard component

function RestaurentsCards({ restaurant }) {
  const [showBranches, setShowBranches] = useState(false);
  const [branches, setBranches] = useState([]);

  const handleViewDetails = async () => {
    if (showBranches) {
      // If branches are already shown, hide them
      setShowBranches(false);
    } else {
      // Fetch branch details and show them
      console.log("View Details clicked for restaurant:", restaurant.restaurant_id); // Debug
      try {
        const response = await fetch(`http://localhost:3001/branches/${restaurant.restaurant_id}`);
        const data = await response.json();

        if (response.ok) {
          setBranches(data);
          setShowBranches(true);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Failed to fetch branches:", err);
      }
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{restaurant.name}</Card.Title>
          <Card.Text>
            <strong>Location:</strong> {restaurant.location} <br />
            <strong>Phone:</strong> {restaurant.phone_number} <br />
            <strong>Hours:</strong> {restaurant.opening_hours} <br />
            <strong>Cuisine:</strong> {restaurant.cuisine_type}
          </Card.Text>
          <Button variant="primary" onClick={handleViewDetails}>
            {showBranches ? "Hide Branches" : "View Branches"}
          </Button>
        </Card.Body>
      </Card>

      {/* Show Branch Details */}
      {showBranches && (
        <div className="mt-4">
          {branches.map((branch) => (
            <BranchCard key={branch.branch_id} branch={branch} restaurantId={restaurant.restaurant_id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurentsCards;
