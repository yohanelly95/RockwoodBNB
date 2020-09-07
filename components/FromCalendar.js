import { useState, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

const FromCalendarComponent = (props) => {

    const [fromDate, setFromDate] = useState('');
    
    
    useEffect(() => {
        const { getFromCalendarDate } = props;
        const showSelectedFromDate = fromDate === '' ? "" : moment(fromDate).format('MMM Do');
        getFromCalendarDate(showSelectedFromDate, fromDate);
        setDate();
    }, [fromDate]);

    const setDate = () =>{
        const { toggleNextPopover } = props;
        if(fromDate){
            toggleNextPopover('from');
        } 
    }


    const { initialDate } = props
    let day, month, year;
    if(initialDate.length > 0){
        const setInitialDate = new Date(initialDate);
        day = setInitialDate.getDate();
        month = setInitialDate.getMonth();
        year = setInitialDate.getFullYear();
    }
    return(
        <React.Fragment>
            <Calendar
                onChange={setFromDate}
                value={fromDate}
                minDate={new Date()}
                showNeighboringMonth={true}
                maxDetail="month"
                next2Label={null}
                prev2Label={null}
            />
        </React.Fragment>
    )
}

export default FromCalendarComponent;