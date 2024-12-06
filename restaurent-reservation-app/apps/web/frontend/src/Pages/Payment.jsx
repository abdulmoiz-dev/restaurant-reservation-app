import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentAmount, setPaymentAmount] = useState(0);

  useEffect(() => {
    if (location.state && location.state.price) {
      setPaymentAmount(location.state.price);
    }
  }, [location.state]);

  const handlePayment = async () => {
    console.log("Processing payment of $" + paymentAmount);

    setTimeout(async () => {
      const success = true; // Simulating payment success
      if (success) {
        alert("Payment Successful!");

        // Prepare data to send to the API
        const reservationData = {
          customer_id: 1, // Replace with actual customer ID
          table_id: 1, // Replace with actual table ID
          reservation_time: new Date().toISOString(), // Current timestamp
          status: "confirmed",
          notification_sent: 1, // Assume notification is sent
          price: paymentAmount,
        };

        // Send data to the API
        try {
          const response = await fetch("http://localhost:3001/reservation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(reservationData),
          });

          if (response.ok) {
            console.log("Reservation added successfully");
            navigate("/success"); // Redirect to a success page
          } else {
            console.error("Failed to add reservation");
          }
        } catch (err) {
          console.error("Error sending reservation data", err);
        }
      } else {
        alert("Payment Failed. Please try again.");
      }
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div style={{ padding: "20px" }}>
        <h2>Payment Page</h2>
        <p>Total Amount: ${paymentAmount}</p>

        {/* Payment Methods */}
        <h4>Select Payment Method:</h4>
        <select>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>

        {/* Payment Button */}
        <div style={{ marginTop: "20px" }}>
          <button onClick={handlePayment} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
