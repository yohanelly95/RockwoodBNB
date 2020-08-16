import Link from "next/link";
import { useState } from 'react';
import CalendarComponent from '../calendar';
import Popover from './Popover';
import DateRangeInput from '../DateRangeInput';


export default function TripSelector() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [showSelectedFromDate, setShowSelectedFromDate] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const toggleCalendar = () => {
    setOpenCalendar((openCalendar) => !openCalendar);
  };

  const togglePopOver = (event) => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  };

  const getCalendarDate = (value) => {
    console.log(value);
    setShowSelectedFromDate(value);
  };
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-12 px-8 bg-gray-200 rounded-full flex-row flex">
          <div className="flex flex-col w-40">
            <button
              className="btn-date dropdown relative"
              onClick={togglePopOver}
            >
              { showSelectedFromDate ? showSelectedFromDate : "From" }
            </button>
            {isPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-date"]}
                className="date-dropdown"
                togglePopOver={togglePopOver}
                isPopoverOpen={isPopoverOpen}
              >
                <FromCalendarComponent getFromCalendarDate={getFromCalendarDate} />
              </Popover>
            )}
            <DateRangeInput/>
          </div>
        </div>
        <Link href="/rooms">
          <a className="bg-black py-2 px-6 rounded-full ml-4">
            <img
              src="../../assets/icons/arrow-right.svg"
              className="h-8 w-8"
            ></img>
          </a>
        </Link>
      </div>
    </div>
  );
}
