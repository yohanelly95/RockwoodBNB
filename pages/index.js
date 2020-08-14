import { useState, useEffect, useRef } from 'react';
import { DefaultLayout } from '../components';
import CalendarComponent from '../components/calendar';
import Popover from '../components/common/Popover';


export default function IndexPage() {

  const [openCalendar, setOpenCalendar] = useState(false);
  const [showSelectedFromDate, setShowSelectedFromDate] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const toggleCalendar = () => {
    setOpenCalendar((openCalendar) => !openCalendar);
  }

  const togglePopOver = (event) => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
};

  const getCalendarDate = (value) => {
    console.log(value);
    setShowSelectedFromDate(value);
  }
  

  return (
      <DefaultLayout>
        <div className="container mx-auto flex lg:flex-col">
          <h1 className="p-2 bg-white md:flex-shrink-0">Welcome to Rockwoodbnb</h1>
          <button className="from-date-btn" onClick={togglePopOver} style={{margin: '100px'}}>Click</button>
          {
            isPopoverOpen &&
            <Popover 
              popoverSrcClassNames={['from-date-btn']}
              className="date-dropdown"
              togglePopOver={togglePopOver}
              isPopoverOpen={isPopoverOpen}
            >
              <CalendarComponent
              getCalendarDate={getCalendarDate}
              />
            </Popover>
          }
          Date selected <span>{showSelectedFromDate}</span>
        </div> 
      </DefaultLayout>   
  )
}