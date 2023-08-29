import React from "react";

const Video = (props) => {
  const { apod } = props;

  return (
    <div>
      <iframe
        width="560"
        heigth="315"
        src={apod.url}
        title={apod.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; syroscope"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
