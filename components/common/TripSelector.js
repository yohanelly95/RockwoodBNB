import Link from "next/link";
import { useState } from 'react';
import FromCalendarComponent from '../FromCalendar';
import ToCalendarComponent from '../ToCalendar';
import Popover from './Popover';

export default function TripSelector() {
  const [showSelectedFromDate, setShowSelectedFromDate] = useState("");
  const [fromDateObj, setFromDateObj] = useState('');
  const [isFromPopoverOpen, setIsFromPopoverOpen] = useState(false);
  const [showSelectedToDate, setShowSelectedToDate] = useState("");
  const [isToPopoverOpen, setIsToPopoverOpen] = useState(false);
  const [toDateObj, setToDateObj] = useState('');
  const [isGuestPopoverOpen, setIsGuestPopoverOpen] = useState(false);
  const [numberOfGuest, setNumberOfGuest] = useState('');
  const [isRoomPopoverOpen, setIsRoomPopoverOpen] = useState(false);
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const guestArr = [1,2,3,4,5,6,7,8,9,10];
  const roomsArr = [1,2,3,4,5,6];


  const toggleFromPopOver = (event) => {
    setIsFromPopoverOpen((isFromPopoverOpen) => !isFromPopoverOpen);
  };

  const getFromCalendarDate = (value, dateObj) => {
    setShowSelectedFromDate(value);
    setFromDateObj(dateObj);
  };

  const toggleToPopOver = (event) => {
    setIsToPopoverOpen((isToPopoverOpen) => !isToPopoverOpen);
  };

  const toggleNextPopover = (value) => {
    if(value === 'from'){
      setIsFromPopoverOpen((isFromPopoverOpen) => !isFromPopoverOpen);
      setIsToPopoverOpen((isToPopoverOpen) => !isToPopoverOpen);
    } else if(value === 'to'){
      setIsToPopoverOpen((isToPopoverOpen) => !isToPopoverOpen);
    }
  }

  const getToCalendarDate = (value, dateObj) => {
    setShowSelectedToDate(value);
    setToDateObj(dateObj);
  };

  const toggleGuestPopover = () => {
    setIsGuestPopoverOpen((isGuestPopoverOpen) => !isGuestPopoverOpen);
  }

  const toggleRoomPopover = () => {
    setIsRoomPopoverOpen((isRoomPopoverOpen) => !isRoomPopoverOpen);
  }

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-12 px-8 bg-gray-200 rounded-full flex-row flex">
          <div className="flex flex-col w-40">
            <button
              className="btn-date dropdown relative btn-from-date"
              onClick={toggleFromPopOver}
            >
              { showSelectedFromDate ? showSelectedFromDate : "From" }
              <img src="chevron.svg" className={isFromPopoverOpen ? "chevron chevron-rotate": "chevron"}/>
            </button>
            {isFromPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-from-date"]}
                className="date-dropdown"
                togglePopOver={toggleFromPopOver}
                isPopoverOpen={isFromPopoverOpen}
              >
                <FromCalendarComponent getFromCalendarDate={getFromCalendarDate} toggleNextPopover={toggleNextPopover}/>
              </Popover>
            )}
          </div>
          <div className="flex flex-col w-40">
            <button
              className="btn-date dropdown relative btn-to-date"
              onClick={toggleToPopOver}
            >
              { showSelectedToDate ? showSelectedToDate : "To" }
              <img src="chevron.svg" className={isToPopoverOpen ? "chevron chevron-rotate": "chevron"}/>
            </button>
            {isToPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-to-date"]}
                className="date-dropdown"
                togglePopOver={toggleToPopOver}
                isPopoverOpen={isToPopoverOpen}
              >
                <ToCalendarComponent getToCalendarDate={getToCalendarDate} fromDateObj={fromDateObj || new Date()} toggleNextPopover={toggleNextPopover}/>
              </Popover>
            )}
          </div>
          <div className="flex flex-col w-32">
            <button
              className="btn-guest-room dropdown relative btn-guest"
              onClick={toggleGuestPopover}
            >
              { numberOfGuest ? numberOfGuest : "Guests" }
              <img src="chevron.svg" className={isGuestPopoverOpen ? "chevron chevron-rotate": "chevron"}/>
            </button>
            {isGuestPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-guest"]}
                className="guest-rooms-dropdown"
                togglePopOver={toggleGuestPopover}
                isPopoverOpen={isGuestPopoverOpen}
              >
              <ul>
                {guestArr.map((value, index) => {
                  return <li className="guest-room-list" key={index} onClick={() => setNumberOfGuest(value)}>{value}</li>
                })}
              </ul>
              </Popover>
            )}
          </div>
          <div className="flex flex-col w-32">
            <button
              className="btn-guest-room dropdown relative btn-rooms"
              onClick={toggleRoomPopover}
            >
              { numberOfRooms ? numberOfRooms : "Rooms" }
              <img src="chevron.svg" className={isRoomPopoverOpen ? "chevron chevron-rotate": "chevron"}/>
            </button>
            {isRoomPopoverOpen && (
              <Popover
                popoverSrcClassNames={["btn-rooms"]}
                className="guest-rooms-dropdown"
                togglePopOver={toggleRoomPopover}
                isPopoverOpen={isRoomPopoverOpen}
              >
              <ul>
                {roomsArr.map((value, index) => {
                  return <li className="guest-room-list" key={index} onClick={() => setNumberOfRooms(value)}>{value}</li>
                })}
              </ul>
              </Popover>
            )}
          </div>
        </div>
        <Link href="/rooms">
          <a className="bg-black py-2 px-6 rounded-full ml-4">
            <img
              src="arrow-right.svg"
              className="h-8 w-8"
            ></img>
          </a>
        </Link>
      </div>
    </div>
  );
}
