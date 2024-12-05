import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "../Components/Header";

// CartSummary component to show total price
function CartSummary({ cartTotal }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#f8f9fa",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        width: "auto",
        textAlign: "center",
        zIndex: 10,
      }}
    >
      {/* Ensure cartTotal is a valid number */}
      <h4>Total: ${isNaN(cartTotal) ? 0.00 : cartTotal.toFixed(2)}</h4>
      <Button variant="success" disabled={cartTotal === 0}>
        Make Reservation
      </Button>
    </div>
  );
}

function Menu() {
  const location = useLocation();
  const { restaurantId } = location.state || {}; // Get restaurantId passed via state
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!restaurantId) {
      setError("Restaurant ID is missing.");
      setLoading(false);
      return;
    }

    // Fetch menu items from the backend
    const fetchMenu = async () => {
      try {
        const response = await fetch(`http://localhost:3001/menu/${restaurantId}`);
        const data = await response.json();

        if (response.ok) {
          setMenuItems(data);
        } else {
          setError(data.message || "Failed to load menu.");
        }
      } catch (err) {
        setError("Error fetching menu data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Calculate total amount
  const cartTotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Header />
      <h1>Menu</h1>
      {menuItems.length > 0 ? (
        <div>
          {menuItems.map((item) => (
            <Card key={item.menu_id} style={{ width: "18rem" }} className="mb-3">
              <Card.Body>
                <Card.Title>{item.item_name}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> {item.description} <br />
                  <strong>Price:</strong> ${item.price}
                </Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <p>No menu items found.</p>
      )}

      {/* Cart Summary at the bottom */}
      <CartSummary cartTotal={cartTotal} />
    </div>
  );
}

export default Menu;
