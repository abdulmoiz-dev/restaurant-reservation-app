import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "../Components/Header";

// Menu component for displaying menu items and making reservations
function Menu() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the navigate function
  const { restaurantId } = location.state || {}; // Get restaurantId passed via state
  const [menuItems, setMenuItems] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState(null); // To store selected branchId
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reservationStatus, setReservationStatus] = useState(null);
  
  // Fetch menu items and branches when the component mounts
  useEffect(() => {
    if (!restaurantId) {
      setError("Restaurant ID is missing.");
      setLoading(false);
      return;
    }

    const fetchMenuAndBranches = async () => {
      try {
        const menuResponse = await fetch(`http://localhost:3001/menu/${restaurantId}`);
        const menuData = await menuResponse.json();
        
        if (menuResponse.ok) {
          setMenuItems(menuData);
        } else {
          setError(menuData.message || "Failed to load menu.");
        }

        const branchesResponse = await fetch(`http://localhost:3001/branches/${restaurantId}`);
        const branchesData = await branchesResponse.json();

        if (branchesResponse.ok) {
          setBranches(branchesData);
        } else {
          setError(branchesData.message || "Failed to load branches.");
        }

      } catch (err) {
        setError("Error fetching menu or branches.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuAndBranches();
  }, [restaurantId]);

  // Handle reservation submission
  const handleMakeReservation = async (item) => {
    if (!selectedBranchId) {
      return alert("Please select a branch.");
    }
  
    const reservationData = {
      restaurantId,
      branchId: selectedBranchId, // Use selected branchId
      price: item.price,
    };
  
    try {
      const response = await fetch("http://localhost:3001/restauranttable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setReservationStatus({ success: true, message: "Table reserved successfully!" });
        // Redirect to the payment page and pass the price as state
        navigate("/payment", { state: { price: item.price } });
      } else {
        setReservationStatus({ success: false, message: data.message || "Failed to reserve table." });
      }
    } catch (err) {
      setReservationStatus({ success: false, message: "Error making reservation." });
    }
  };
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <Header />
      <h1>Menu</h1>

      {/* Branch Selection */}
      <div>
        <h3>Select Branch</h3>
        <select onChange={(e) => setSelectedBranchId(e.target.value)} value={selectedBranchId}>
          <option value="">Select a branch</option>
          {branches.map((branch) => (
            <option key={branch.branch_id} value={branch.branch_id}>
              {branch.branch_name} - {branch.branch_location}
            </option>
          ))}
        </select>
      </div>

      {menuItems.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {menuItems.map((item) => {
            return (
              <Card key={item.menu_id} style={{ width: "18rem" }} className="mb-3">
                <Card.Body>
                  <Card.Title>{item.item_name}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong> {item.description} <br />
                    <strong>Price:</strong> ${item.price}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleMakeReservation(item)}>
                    Make Reservation
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      ) : (
        <p>No menu items found.</p>
      )}

      {/* Reservation Status Message */}
      {reservationStatus && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: reservationStatus.success ? "#d4edda" : "#f8d7da",
            color: reservationStatus.success ? "#155724" : "#721c24",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <strong>{reservationStatus.message}</strong>
        </div>
      )}
    </div>
  );
}

export default Menu;
