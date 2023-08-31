import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "./DatePicker";
import Main from "./Main";

const Header = () => {
  //Define states for post and errors
  const [apod, setApod] = useState({});
  const [error, setError] = useState();

  let actualDate = new Date();
  let dArr = [];
  function firstDate() {
    for (let i = 0; i < 3; i++) {
      dArr.push(new Date(actualDate).toISOString().slice(0, 10));
      actualDate.setDate(actualDate.getDate() - 1);
    }
    return dArr;
  }
  dArr = firstDate();

  const [dat, setDat] = useState(dArr);
  //Axios for post request
  useEffect(() => {
    console.log("koda girdi");
    let p = [];
    for (let x = 0; x < dat.length; x++) {
      axios
        .get("https://api.nasa.gov/planetary/apod", {
          params: {
            api_key: "IBkuaVVK2PfjydQStePjz9NI5C2q1qCr3aqWzYKX",
            date: dat[x],
          },
        })
        .then(function (response) {
          console.log(response.data);
          p.push(response.data);
          console.log("ARRAY", p);
          setError(null);
        })
        .catch(function (error) {
          console.log(error.message);
          setError(error.message);
        })
        .finally(function () {});
    }
    setApod(p);
    console.log("YENİ APOD", apod);
    //Effects on date change
  }, [dat]);

  return (
    <div>
      <div>
        <div>
          <h3>CHOOSE YOUR ASTRONOMY PICTURE | VIDEO OF THE DAY</h3>
          <p>discover the cosmos everday</p>
        </div>
      </div>
      <div>
        <span role="img" aria-label="go!">
          {console.log("DATEPICKER ÖNCESİ", dat[0])}

          {Object.keys(apod) && Object.keys(apod).length === 0 ? (
            <p>...Yükleniyor!!!</p>
          ) : (
            <Main dataProp={apod} />
          )}

          {error && <p> Network Error : {error}</p>}
        </span>
      </div>
    </div>
  );
};

export default Header;
