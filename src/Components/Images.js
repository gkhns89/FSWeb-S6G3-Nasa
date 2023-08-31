import React from "react";

const Images = (props) => {
  const { apod } = props;

  return (
    <div className="block p-2">
      <img
        className="max-h-[190px] max-w-[375px] m-2"
        src={apod.url}
        alt={apod.title}
      />
    </div>
  );
};

export default Images;
