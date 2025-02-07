import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        left: "-40px",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
        right: "-40px",
      }}
      onClick={onClick}
    />
  );
};

function CardSlider() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCardIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <hr />
      <br />
      <h2><b style={{color:"black"}}><u>Our Top Doctors</u></b></h2>
      <Slider {...settings}>
        {data.map((d, index) => (
          <div
            key={index}
            style={styles.cardContainer}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                ...styles.card,
                ...(hoveredCardIndex === index ? styles.cardHover : {}),
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src={d.img || "https://via.placeholder.com/150"}
                  alt=""
                  style={styles.image}
                />
                <p style={styles.name}>{d.name}</p>
              </div>
              <div style={styles.content}>
                {d.degree.split("||").map((line, i) => (
                  <p key={i} style={styles.degree}>{line.trim()}</p>
                ))}
                {/* <Link to="/about">
                  <button style={styles.button}>Read More</button>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <br />
    </div>
  );
}

const styles = {
  cardContainer: {
    margin: "0 15px",
  },
  card: {
    backgroundColor: "white",
    height: "380px",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Adds smooth transition
  },
  cardHover: {
    transform: "scale(1.05)", // Slight scale on hover
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", // Deeper shadow on hover
  },
  imageContainer: {
    height: "220px",
    backgroundColor: "#1995AD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  image: {
    height: "130px",
    width: "130px",
    borderRadius: "45%",
    objectFit: "cover",
  },
  content: {
    padding: "25px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin:"15px"
  },
  degree: {
    fontSize: "18px",
    color: "black",
  },
  button: {
    backgroundColor: "#A1D6E2",
    color: "black",
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

const data = [
  { name: "Dr. Harish Dasarwar", img: "https://iili.io/2Q4aBwJ.jpg", degree: "MBBS in Dermatology, Pune || Experience of 5 years" },
  { name: "Dr. Pratham Pawar", img: "https://iili.io/2Q4aBwJ.jpg", degree: "MBBS in Gynecology, Pune || Experience of 4 years" },
  { name: "Dr. Tarun Dhote", img: "https://iili.io/2Q4aBwJ.jpg", degree: "MBBS in General Physician, Pune || Experience of 2 years" },
  { name: "Dr. Abhinav Kawalkar", img: "https://iili.io/2Q4aBwJ.jpg", degree: "MBBS in Proctology, Amravati || Experience of 8 years" },
  { name: "Dr. Pratik Jadhav", img: "https://iili.io/2Q4aBwJ.jpg", degree: "MBBS in Gynecology, Pune || Experience of 10 years" },
  { name: "Dr. Abhishek Koli", img: "https://iili.io/2Q4aBwJ.jpg", degree: "MBBS in General Physician, Pune || Experience of 8 years" },
  { name: "Dr. Avishkar Zolekar", img: "https://iili.io/2Q4aBwJ.jpg", degree: "MBBS in Proctology, Amravati || Experience of 3 years" },
];

export default CardSlider;
