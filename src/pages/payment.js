import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  // State to store payment details
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  // State to handle form submission success or error
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally integrate with a payment gateway API like Stripe or PayPal
    // This is just a mock submission
    if (
      formData.name &&
      formData.cardNumber &&
      formData.expiryDate &&
      formData.cvv
    ) {
      setStatus("Payment Successful!");
    } else {
      setStatus("Please fill in all fields.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src="https://iili.io/2ZfefwP.png"
        alt=""
        style={{
          display: "block",
          margin: "auto",
        }}
        width="120"
        height="90"
      />

      <h1 style={{ textAlign: "center", color: "#333" }}>Payment Gateway</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Full Name :
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px", position: "relative" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Card Number :
          </label>
          <input
            type="text"
            name="cardNumber"
            placeholder="XXXX-XXXX-XXXX"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="16"
            style={{
              width: "100%",
              padding: "10px 10px 10px 10px", // Space for padding on the left
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {/* SVG Icon at the end of the input */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-credit-card-2-back-fill"
            viewBox="0 0 16 16"
            style={{
              position: "absolute",
              right: "10px", // Position the SVG icon at the right end
              top: "68%",
              transform: "translateY(-50%)", // Center the icon vertically
              pointerEvents: "none", // Ensure the icon doesn't block user interactions
            }}
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5H0zm11.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM0 11v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1z"/>
          </svg>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Expiration Date :
            </label>
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              maxLength="5" // Format MM/YY
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ width: "48%" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              CVV :
            </label>
            <input
              type="text"
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="3"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        <Link
        to="/dashboardPatient"
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Pay Now
        </Link>
      </form>

      {status && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontWeight: "bold",
            color: status === "Payment Successful!" ? "green" : "red",
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
};

export default Payment;