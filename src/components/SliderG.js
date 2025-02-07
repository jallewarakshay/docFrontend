  import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/SliderGallery.css';

// Sample data for the gallery
const data = [
  {
    img: 'https://iili.io/2QPbmPI.jpg',
    name: 'Dr. Michael Ryan, Executive Director, WHO Health Emergencies Programme',
    review: 'This is a great service! Highly recommend.',
  },
  {
    img: 'https://iili.io/2QPmrx4.jpg',
    name: 'Dr. Jeremy Farrar, Chief Scientist',
    review: 'Amazing experience, very satisfied with the results.',
  },
  {
    img: 'https://iili.io/2QPpkBV.jpg',
    name: 'Dr. Samira Asma, Assistant Director-General, Data, Analytics and Delivery',
    review: 'A wonderful product, will definitely buy again.',
  },
  {
    img: 'https://iili.io/2Qi9qVR.jpg',
    name: 'Dr. Bruce Aylward, Assistant Director-General, Universal Health Coverage, Life Course',
    review: 'Amazing experience, very satisfied with the results.',
  },
  {
    img: 'https://iili.io/2QijGYg.jpg',
    name: 'Dr Catharina Boehme, Assistant Director-General, External Relations and Governance',
    review: 'Amazing experience, very satisfied with the results.',
  },
  {
    img: ' https://iili.io/2Qiw26P.jpg',
    name: 'Dr Chikwe Ihekweazu, Assistant Director-General for the Division of Health Emergency Intelligence and Surveillance Systems in the Emergencies Programme',
    review: 'Amazing experience, very satisfied with the results.',
  },

];

function SliderG() {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 2, // This ensures 2 slides are shown
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="slick-prev">⮘</button>, // Custom previous arrow
    nextArrow: <button className="slick-next">⮚</button>, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Keep it 2 for larger screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Change to 1 for smaller screens
        },
      },
    ],
  };

  return (
    <>
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div key={index} className="gallery-card">
            <div className="image-container">
              <img src={d.img} alt={d.name} className="gallery-image" />
            </div>
            <div className="content-container">
              <p className="name">{d.name}</p>
              <p className="review">{d.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <hr/>
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <h2 style={{ borderBottom: "3px", paddingBottom: "5px" }}><b style={{color:"black"}}><u>Videos</u></b></h2>
    </div>
    </>
  );
}

export default SliderG;