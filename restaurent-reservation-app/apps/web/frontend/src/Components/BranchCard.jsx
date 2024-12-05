import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function BranchCard({ branch, restaurantId }) {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/menu", { state: { branchId: branch.branch_id, restaurantId } });
  };

  return (
    <Card className="text-center mt-2">
      <Card.Body>
        <Card.Title>{branch.branch_name}</Card.Title>
        <Card.Text>
          <strong>Location:</strong> {branch.branch_location} <br />
          <strong>Phone:</strong> {branch.branch_phone_number}
          <br />
          <strong>Restaurant ID:</strong> {restaurantId} {/* Display restaurantId for debugging */}
        </Card.Text>
        <Button variant="success" onClick={handleOrderClick}>
          Order Here
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BranchCard;
