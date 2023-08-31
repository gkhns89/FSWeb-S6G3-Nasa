import React from "react";
import Video from "./Video";
import Images from "./Images";

const Main = (props) => {
  //Define props
  const { dataProp: apod } = props;

  return (
    <div>
      {apod.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.title}</h1>
            <h2> {data.date}</h2>
            <p> {data.explanation} </p>

            {data.media_type === "video" && <Video apod={data} />}
            {data.media_type === "image" && <Images apod={data} />}
          </div>
        );
      })}
    </div>
  );
};
export default Main;
