import React from "react";

const DatePicker = (props) => {
  //Define props
  const { date, setDate } = props;

  //Define datachange func on datepicker change
  const dateHandler = (e) => {
    //Set new date for the request and picker
    setDate(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={dateHandler}
      />
    </div>
  );
};

export default DatePicker;
