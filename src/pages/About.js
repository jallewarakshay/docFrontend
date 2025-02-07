import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const About = () => {
  // Reusable styles
  const centerStyle = { display: "flex", justifyContent: "center", alignItems: "center" };
  const imageStyle = { width: "310px", height: "300px" };

  return (
    <>
      <Header />

      <div className="container">
        {/* Hero Section */}
        <section className="row my-5">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img 
              src="https://iili.io/2QM4ies.jpg" 
              alt="Round Image" 
              style={{ width: "400px", height: "354px", borderRadius: "50%" }} 
            />
          </div>
          <div className="col-8 d-flex align-items-center">
            <div>
              <h1><b style={{color:"black"}}>India's Largest Digital Healthcare Platform  bringing quality healthcare services home</b></h1>
              <h6>
                We aim to bridge the gap between patients and healthcare professionals by providing a seamless digital consultation experience.
                Whether you need medical advice, prescription refills, or follow-up consultations, our platform ensures you receive quality healthcare anytime, anywhere.
                We aim to bridge the gap between patients and healthcare professionals by providing a seamless digital consultation experience.
              </h6>
            </div>
          </div>
        </section>

        <hr />

        {/* Section Title */}
        <section className="text-center my-5">
          <h1><b><u style={{color:"black"}}>We Put The Care in HealthCare</u></b></h1>
        </section>

        {/* Features Section */}
        <section className="row text-center">
          {["2QMZ7CG.png", "2QMtLib.png", "2QMpgEu.png"].map((img, index) => (
            <div key={index} className="col-md-4 d-flex justify-content-center mb-4">
              <img src={`https://iili.io/${img}`} alt="Feature" style={imageStyle} />
            </div>
          ))}
        </section>

        {/* Feature Titles */}
        <section className="row text-center" >
          {["Lab Test", "Easy Connect", "Video Conferencing"].map((title, index) => (
            <div key={index} className="col-md-4">
              <h3 style={{color:"black"}}><b>{title}</b></h3>
            </div>
          ))}
        </section>

        <hr />

        {/* Steps for Consultation */}
        <section className="text-center my-5">
          <h1><u><b style={{color:"black"}}>Easy Steps For Consultation</b></u></h1>
          <div className="d-flex justify-content-center">
            <img 
              src="https://iili.io/2QiVIb2.png" 
              alt="Flowchart" 
              style={{ width: '70%', height: 'auto', objectFit: 'cover' }} 
            />
          </div>
        </section>

        <hr />

        {/* Team Section */}
        <section className="d-flex justify-content-center align-items-center p-4" style={{ borderRadius: "10px" }}>
          <img 
            src="https://iili.io/2QLnxJs.webp" 
            alt="DocTalk Team" 
            style={{ 
              width: "300px", 
              borderRadius: "10px", 
              marginRight: "20px",
              boxShadow: "10px 10px 20px rgba(131, 63, 63, 0.2)" 
            }} 
          />
          <div>
            <h2 className="fw-bold" style={{color:"black"}}><b>The DocTalk Team</b></h2>
            <p style={{ maxWidth: "400px", fontSize: "14px", lineHeight: "1.5" }}>
              Medical, Technology & Business Domain Experts coming together as One Team to build 
              One Healthcare Platform that solves complex healthcare problems of billions of people via 
              an innovative mobile app, anchored on the vision of Founders Prasad and Ashutosh.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
