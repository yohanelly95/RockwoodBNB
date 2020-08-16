import Link from "next/link";
import { useState } from 'react';
import FromCalendarComponent from '../FromCalendar';
import ToCalendarComponent from '../ToCalendar';
import Popover from './Popover';

export default function TripSelector() {
  const [showSelectedFromDate, setShowSelectedFromDate] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopOver = (event) => {
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  };

  const getFromCalendarDate = (value) => {
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
          </div>
          {/* <div className="flex flex-col w-40">
            <button
              className="btn-date dropdown relative"
              onClick={togglePopOver}
            >
              { showSelectedFromDate ? showSelectedFromDate : "To" }
            </button>
            {isPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-date"]}
                className="date-dropdown"
                togglePopOver={togglePopOver}
                isPopoverOpen={isPopoverOpen}
              >
                <CalendarComponent getCalendarDate={getCalendarDate} />
              </Popover>
            )}
          </div> */}
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
