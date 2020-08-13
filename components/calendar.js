import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';


const CalendarComponent = (props) => {

    const [fromDate, setFromDate] = useState('');

    useEffect(() => {
        const { getCalendarDate } = props;
        const showSelectedFromDate = fromDate === '' ? "" : moment(fromDate).format('DD/MM/YYYY');
        getCalendarDate(showSelectedFromDate);
    }, [fromDate]);


    // const showSelectedFromDate = fromDate === '' ? "" : moment(fromDate).format('DD/MM/YYYY');
    // const { getCalendarDate } = props;
    return(
        <React.Fragment>
            <Calendar
                onChange={setFromDate}
                value={fromDate}
                minDate={new Date()}
                // onClickDay={() => getCalendarDate(showSelectedFromDate)}
                showNeighboringMonth={false}
                maxDetail="month"
            />
        </React.Fragment>
    )
}

export default CalendarComponent;