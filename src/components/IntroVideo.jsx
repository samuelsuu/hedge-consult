import React, { useState } from 'react';

const IntroVideo = ({ onVideoEnd }) => {
  const [videoClass, setVideoClass] = useState("");

  const handleVideoEnd = () => {
    setVideoClass("fade-out"); // Fade out the video after it ends
    onVideoEnd(); // Notify parent to change the page
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center ${videoClass}`}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        onEnded={handleVideoEnd} // Trigger the function when video ends
      >
        <source src="https://www.shutterstock.com/shutterstock/videos/3593537755/preview/stock-footage-real-estate-agent-is-gesturing-with-a-pen-while-showing-a-contract-to-a-client-they-are-discussing.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroVideo;
