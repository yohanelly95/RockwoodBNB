import Link from "next/link";
import { useState, useEffect } from 'react';
import FromCalendarComponent from '../FromCalendar';
import ToCalendarComponent from '../ToCalendar';
import Popover from './Popover';
import { useRouter } from 'next/router';
import moment from 'moment';
import { encode, decode } from '../../utils';

export default function TripSelector(props) {
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
  const [minRoomsReq, setMinRoomsReq] = useState([]);
  let guestArr = [1,2,3,4,5,6,7,8,9,10];
  let roomsArr = [1,2,3,4,5,6];
  const router = useRouter();


  useEffect(() => {
    if(Object.keys(router.query).length > 0){
      const fromDate = new Date (decode(router.query.from));
      const toDate = new Date(decode(router.query.to));
      const guestCount = decode(router.query.guest);
      const roomCount = decode(router.query.rooms);
      setShowSelectedFromDate(moment(fromDate).format('MMM Do'));
      setShowSelectedToDate(moment(toDate).format('MMM Do'));
      setNumberOfGuest(guestCount);
      setNumberOfRooms(roomCount);
    }
  }, [router]);

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
      setIsGuestPopoverOpen((isGuestPopoverOpen) => !isGuestPopoverOpen);
    } else if(value === 'guest'){
      setIsGuestPopoverOpen(false);
      setIsRoomPopoverOpen(true);
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

  const calculateRooms = (value) => {
    setNumberOfGuest(value);
    let minRoomsRequired = Math.ceil(value/2);
    const minRoomArr = roomsArr.filter((room) => room >= minRoomsRequired);
    setMinRoomsReq(minRoomArr);
    toggleNextPopover('guest');
  }

  const handleGuestSelection = (value) => {
    toggleNextPopover('guest');
    calculateRooms(value);
  }

  const handleRoomSelection = (value) => {
    setIsRoomPopoverOpen(false);
    setNumberOfRooms(value);
  }

  const { isNav } = props;

  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="w-auto h-12 px-8 bg-gray-200 rounded-full flex-row flex">
          <div className="flex flex-col w-min lg:w-40">
            <button
              className="btn-date dropdown relative btn-from-date"
              onClick={toggleFromPopOver}
              disabled={isNav}
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
                <FromCalendarComponent getFromCalendarDate={getFromCalendarDate} toggleNextPopover={toggleNextPopover} initialDate={router.query.from || ''} />
              </Popover>
            )}
          </div>
          <div className="flex flex-col w-min lg:w-40">
            <button
              className="btn-date dropdown relative btn-to-date"
              onClick={toggleToPopOver}
              disabled={isNav}
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
          <div className="flex flex-col w-min lg:w-32">
            <button
              className="btn-guest-room dropdown relative btn-guest"
              onClick={toggleGuestPopover}
              disabled={isNav}
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
                  return <li className="guest-room-list" key={index} onClick={(e) => handleGuestSelection(value)}>{value}</li>
                })}
              </ul>
              </Popover>
            )}
          </div>
          <div className="flex flex-col w-min lg:w-32">
            <button
              className="btn-guest-room dropdown relative btn-rooms"
              onClick={toggleRoomPopover}
              disabled={isNav}
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
                {minRoomsReq.length > 0 ? minRoomsReq.map((value, index) => {
                  return <li className="guest-room-list" key={index} onClick={() => handleRoomSelection(value)}>{value}</li>
                }) :
                roomsArr.map((value, index) => {
                  return <li className="guest-room-list" key={index} onClick={() => handleRoomSelection(value)}>{value}</li>
                })
                }
              </ul>
              </Popover>
            )}
          </div>
        </div>
        <Link  href={{ pathname: '/rooms',  query: { from: encode(fromDateObj), to: encode(toDateObj), guest: encode(numberOfGuest), rooms: encode(numberOfRooms) } }}>
          <a className={`${(fromDateObj && toDateObj && numberOfRooms && numberOfGuest) ? "" : "btn-disabled"} btn-primary ml-4`}>
              <img
                src="arrow-right.svg"
                className="h-8 w-8"
              />
          </a>
        </Link>
      </div>
    </div>
  );
}
