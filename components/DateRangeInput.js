import { Component } from "react";
import { DateRangePicker } from "react-dates";

class DateRangeInput extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  render() {
    return (
      <DateRangePicker
        transitionDuration={1}
        startDateId="startDate"
        endDateId="endDate"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) => {
          this.setState({ startDate, endDate });
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => {
          this.setState({ focusedInput });
        }}
      />
    );
  }
}

export default DateRangeInput;
