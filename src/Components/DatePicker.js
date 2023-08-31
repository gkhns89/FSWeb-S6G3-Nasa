import React from "react";

const DatePicker = (props) => {
  //Define props
  const { dat, setDat } = props;
  let actualDate = new Date();

  function getDates(date) {
    let datesArray = [];
    for (let i = 0; i < 3; i++) {
      datesArray.push(new Date(actualDate).toISOString().slice(0, 10));
      actualDate.setDate(actualDate.getDate() - 1);
    }

    return setDat(datesArray);
  }

  //Define datachange func on datepicker change
  const dateHandler = (e) => {
    //Set new date for the request and picker
    console.log(e.target.value);
    setDat(getDates(e.target.value));
  };

  return (
    <div>
      {console.log("INPUT OLUŞUYOR")}
      <input
        type="date"
        id="date"
        name="date"
        value={dat[0]}
        onChange={dateHandler}
      />
    </div>
  );
};

export default DatePicker;
