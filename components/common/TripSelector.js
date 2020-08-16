import Link from "next/link";
import { useState } from 'react';
import FromCalendarComponent from '../FromCalendar';
import ToCalendarComponent from '../ToCalendar';
import Popover from './Popover';

export default function TripSelector() {
  const [showSelectedFromDate, setShowSelectedFromDate] = useState("");
  const [isFromPopoverOpen, setIsFromPopoverOpen] = useState(false);
  const [showSelectedToDate, setShowSelectedToDate] = useState("");
  const [isToPopoverOpen, setIsToPopoverOpen] = useState(false);

  const toggleFromPopOver = (event) => {
    setIsFromPopoverOpen((isFromPopoverOpen) => !isFromPopoverOpen);
  };

  const getFromCalendarDate = (value) => {
    setShowSelectedFromDate(value);
  };

  const toggleToPopOver = (event) => {
    setIsToPopoverOpen((isToPopoverOpen) => !isToPopoverOpen);
  };

  const getToCalendarDate = (value) => {
    setShowSelectedToDate(value);
  };

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-12 px-8 bg-gray-200 rounded-full flex-row flex">
          <div className="flex flex-col w-40">
            <button
              className="btn-date dropdown relative"
              onClick={toggleFromPopOver}
            >
              { showSelectedFromDate ? showSelectedFromDate : "From" }
            </button>
            {isFromPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-date"]}
                className="date-dropdown"
                togglePopOver={toggleFromPopOver}
                isPopoverOpen={isFromPopoverOpen}
              >
                <FromCalendarComponent getFromCalendarDate={getFromCalendarDate} />
              </Popover>
            )}
          </div>
          <div className="flex flex-col w-40">
            <button
              className="btn-date dropdown relative"
              onClick={toggleToPopOver}
            >
              { showSelectedToDate ? showSelectedToDate : "To" }
            </button>
            {isToPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-date"]}
                className="date-dropdown"
                togglePopOver={toggleToPopOver}
                isPopoverOpen={isToPopoverOpen}
              >
                <ToCalendarComponent getToCalendarDate={getToCalendarDate} />
              </Popover>
            )}
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
