import { useState, useEffect, useRef } from 'react';
import { DefaultLayout } from '../components';
import CalendarComponent from '../components/calendar';

export default function IndexPage() {

  const [openCalendar, setOpenCalendar] = useState(false);
  const [showSelectedFromDate, setShowSelectedFromDate] = useState('');

  const toggleCalendar = () => {
    setOpenCalendar((openCalendar) => !openCalendar);
  }

  const getCalendarDate = (value) => {
    console.log(value);
    setShowSelectedFromDate(value);
  }
  

  return (
      <DefaultLayout>
        <div className=" container mx-auto flex lg:flex-col">
          <h1 className="p-2 bg-white md:flex-shrink-0">Welcome to Rockwoodbnb</h1>
          <button onClick={toggleCalendar} style={{margin: '100px'}}>Click</button>
          {
            openCalendar &&
            <CalendarComponent
            getCalendarDate={getCalendarDate}
            />
          }
          Date selected <span>{showSelectedFromDate}</span>
        </div> 
      </DefaultLayout>   
  )
}