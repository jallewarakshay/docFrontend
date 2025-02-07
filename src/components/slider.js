import React from "react";
import '../Styles/Slider.css'

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "1500px", margin: "auto" }} // Limit the width and center the carousel
      >
        <div className="carousel-indicators">
          <button
            type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ outline: "none", boxShadow: "none" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://iili.io/2QLOVun.jpg"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", objectFit: "cover" }} // Restrict the height and make sure image doesn't stretch
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://iili.io/2QLgTKb.jpg"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", objectFit: "cover" }} // Same adjustment for the second image
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://iili.io/2Z10b0x.png"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "400px", objectFit: "cover" }} // Same adjustment for the third image
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
