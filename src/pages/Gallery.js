import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import SliderG from "../components/SliderG";

function Gallery() {
  const videoIds = ["ILj-KSDqaMc", "1qEZwj_Iacw", "3JN0fMubey8", "P4sJ7gaBbGU", "QF3eOPim5Hk", "7lHew4xXoy0"];
  const playersRef = useRef({});
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);

      window.onYouTubeIframeAPIReady = () => {
        console.log("YouTube API Ready");
        setApiReady(true);
      };
    } else {
      setApiReady(true);
    }

    return () => {
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  useEffect(() => {
    if (apiReady) {
      videoIds.forEach((id) => {
        if (!playersRef.current[id]) {
          playersRef.current[id] = new window.YT.Player(`player-${id}`, {
            events: {
              onStateChange: (event) => handlePlay(event, id),
            },
          });
        }
      });
    }
  }, [apiReady]);

  const handlePlay = (event, id) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      Object.keys(playersRef.current).forEach((videoId) => {
        if (videoId !== id && playersRef.current[videoId]) {
          playersRef.current[videoId].pauseVideo();
        }
      });
    }
  };

  return (
    <>
      <Header />
      <br />
      {/* Slider Section */}
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <SliderG />
      </div>
      <br />
      {/* Video Gallery */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px"
      }}>
        {videoIds.map((id) => (
          <div key={id} style={{ textAlign: "center" }}>
            <iframe
              id={`player-${id}`}
              width="400"
              height="250"
              src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
              title={`YouTube video ${id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            {/* <h3 style={{ marginTop: "10px", color: "#333" }}>Video {id}</h3> */}
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Gallery;
