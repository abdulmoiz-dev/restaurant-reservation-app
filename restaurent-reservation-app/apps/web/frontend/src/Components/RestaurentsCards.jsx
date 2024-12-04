import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RestaurentsCards({ restaurant }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          <strong>Location:</strong> {restaurant.location} <br />
          <strong>Phone:</strong> {restaurant.phone_number} <br />
          <strong>Hours:</strong> {restaurant.opening_hours} <br />
          <strong>Cuisine:</strong> {restaurant.cuisine_type}
        </Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default RestaurentsCards;
