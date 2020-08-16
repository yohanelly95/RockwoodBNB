import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

const ToCalendarComponent = (props) => {

    const [toDate, setToDate] = useState('');

    
    useEffect(() => {
        const { getToCalendarDate } = props;
        const showSelectedToDate = toDate === '' ? "" : moment(toDate).format('DD/MM/YYYY');
        getToCalendarDate(showSelectedToDate);
    }, [toDate]);



    return(
        <React.Fragment>
            <Calendar
                onChange={setToDate}
                value={toDate}
                minDate={new Date()}
                showNeighboringMonth={true}
                maxDetail="month"
                next2Label={null}
                prev2Label={null}
            />
        </React.Fragment>
    )
}

export default ToCalendarComponent;