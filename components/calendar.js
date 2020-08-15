import { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import moment from "moment";

const CalendarComponent = (props) => {
  const [fromDate, setFromDate] = useState("");

  useEffect(() => {
    const { getCalendarDate } = props;
    const showSelectedFromDate =
      fromDate === "" ? "" : moment(fromDate).format("DD/MM/YYYY");
    getCalendarDate(showSelectedFromDate);
  }, [fromDate]);

  return (
    <React.Fragment>
      <Calendar
        onChange={setFromDate}
        value={fromDate}
        minDate={new Date()}
        showNeighboringMonth={false}
        maxDetail="month"
        next2Label={null}
        prev2Label={null}
      />
    </React.Fragment>
  );
};

export default CalendarComponent;
