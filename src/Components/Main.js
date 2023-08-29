import React from "react";

function Main(props) {
  //Define props
  const { dataProp: apod } = props;

  return (
    <div>
      {/* Get datas from props */}
      {<h1> {apod.title}</h1>}
      {<span> {apod.date}</span>}
      {<p> {apod.explanation}</p>}
      {apod.media_type === "video" && (
        //iFrame settings
        <iframe
          width="560"
          heigth="315"
          src={apod.url}
          title={apod.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; syroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}

      {apod.media_type === "image" && <img src={apod.url} alt={apod.title} />}
    </div>
  );
}
export default Main;
