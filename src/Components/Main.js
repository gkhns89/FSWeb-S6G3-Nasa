import React from "react";
import Video from "./Video";

function Main(props) {
  //Define props
  const { dataProp: apod } = props;

  return (
    <div>
      {/* Get datas from props */}
      {<h1> {apod.title}</h1>}
      {<span> {apod.date}</span>}
      {<p> {apod.explanation}</p>}
      {apod.media_type === "video" && <Video apod={apod} />}

      {apod.media_type === "image" && <img src={apod.url} alt={apod.title} />}
    </div>
  );
}
export default Main;
