import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

const ToCalendarComponent = (props) => {

    const [toDate, setToDate] = useState('');


    const toggleCallback = (value) => {
        const { toggleNextPopover, getToCalendarDate } = props;
        const showSelectedToDate = value === '' ? "" : moment(value).format('MMM Do');
        getToCalendarDate(showSelectedToDate, value);
        toggleNextPopover('to');
    }


    const { fromDateObj } = props; //get minDate
    return(
        <React.Fragment>
            <Calendar
                onChange={setToDate}
                value={toDate}
                minDate={new Date(fromDateObj)}
                showNeighboringMonth={true}
                maxDetail="month"
                next2Label={null}
                prev2Label={null}
                defaultValue={new Date(fromDateObj)}
                selectRange={true}
                allowPartialRange={true}
                onClickDay={toggleCallback}
            />
        </React.Fragment>
    )
}

export default ToCalendarComponent;