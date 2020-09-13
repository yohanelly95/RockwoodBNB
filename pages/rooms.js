import { useState, useEffect, useCallback } from 'react';
import { DefaultLayout } from "../components";
import RoomBilling from '../components/RoomBilling';
import { useRouter } from 'next/router';
import { encode, decode } from '../utils';
import moment from 'moment';
import GetSheetDone from 'get-sheet-done';

const DOCUMENT_ID = "1L2UsWdDm6UU1dS3DZM5rqKDuNxqLOZnZ95OZkUBY-S0";

const Rooms = () => {

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [numberOfGuest, setNumberOfGuest] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');
    const [sheetData, setSheetData] = useState({});
    const [roomsSelected, setRoomsSelected] = useState([]);
    let [roomsSelectedCount, setRoomsSelectedCount] = useState(0);
    const roomData = ["Free Parking", "Balcony", "Geyser", "WiFI", "Television", "Heater"];
    const roomPhotos = ["/assets/img/room1-1.jpg", "/assets/img/room1-2.jpg", "/assets/img/room1-3.jpg"];
    const router = useRouter();
    const memoizedSelectRoomCallback = useCallback(
        (selectedRooms) => {
            setRoomsSelected((roomsSelected) => [...roomsSelected, selectedRooms]);
        },[roomsSelected]);
    const memoizedUnselectRoomCallback  =  useCallback(
        (updatedRooms) => {
            setRoomsSelected(updatedRooms);
        },[roomsSelected]);

    useEffect(() =>{
        GetSheetDone.labeledCols(DOCUMENT_ID).then(sheet => {
            setSheetData(sheet.data);
        });
    },[])

    useEffect(() => {
        if(roomsSelected.length > numberOfRooms){
            let removedArray = roomsSelected[roomsSelected.length - 1];
            removedArray = roomsSelected.filter((room) => room.index != removedArray.index);
            setRoomsSelected(removedArray);
        }
    }, [roomsSelected])

    useEffect(() => {
      if (Object.keys(router.query).length > 0) {
        const fromDateParam = new Date(decode(router.query.from));
        const toDateParam = new Date(decode(router.query.to));
        const guestCount = decode(router.query.guest);
        const roomCount = decode(router.query.rooms);
        setFromDate(moment(fromDateParam).format("MMM Do"));
        setToDate(moment(toDateParam).format("MMM Do"));
        setNumberOfGuest(guestCount);
        setNumberOfRooms(roomCount);
      }
    }, [router]);

    const handleRoomSelect = (roomNumber, index) => {
        let updatedRooms;
        const selectedRooms = {
            roomNumber,
            index
        }
        const isSelected = roomsSelected.some((room) => room.roomNumber == roomNumber);

        if(isSelected){
            updatedRooms = roomsSelected.filter((room) => room.index !== index);
            // setRoomsSelected(updatedRooms);
            memoizedUnselectRoomCallback(updatedRooms);
        }else{
                //Add logic here to check if they have already selected max no of rooms (numberOfRooms) and throw an error/replace previos selection with current
                memoizedSelectRoomCallback(selectedRooms)
        }
    }

    // const handleCount = () => {
    //     setRoomsSelectedCount(++roomsSelectedCount)
    // }


    const renderRoomButtons = Object.keys(sheetData).map((obj, index) => {

        const isActive = roomsSelected.some((room) => room.index == index);
        return(
            <button 
            key={index} 
            onClick={() => handleRoomSelect(sheetData[obj].room, index)}
            className={sheetData[obj].status && isActive ? "btn-secondary ml-3 active-btn" : sheetData[obj].status && !isActive ? "btn-secondary ml-3" : "btn-disabled btn-secondary ml-3"}
            disabled={sheetData[obj].status === ''}
            id={index}>
            {`Room ${sheetData[obj].room}`}
            </button>
        )
    });

    const renderRoomData = roomData.map((roomDataItem, i) => (
        <div key={roomDataItem} className={`w-1/2 h-8 pr-3 flex items-center ${i > 1 ? "mt-4" : ""}`}>
            <div className="w-8 h-8 m-0"><img src={`/assets/icons/${i+1}.svg`}></img></div>
            <p className="ml-2">{roomDataItem}</p>
        </div>
    ))

    // const renderSidebarData = Object.keys(sheetData).map((obj, i) => (
    //     <li key={i}><p>{sheetData[obj].sidebar}</p></li>
    // )) id={`photo${i}`}
    
    const renderRoomPhotos = roomPhotos.map((roomPhoto, i) => (
        <div 
            className={`${i > 0 ? "row-span-1" : "row-span-2 col-span-2"} bg-local bg-cover bg-center rounded`} 
            style={{backgroundImage: 'url(' + roomPhoto + ')'}}>
        </div>
    ))

  return (
    <DefaultLayout
      wrapperClass="container"
      seoTitle="Book rooms | Rockwood BNB"
    >
      <section className="flex flex-row border-b-2 border-gray-200">
        <div className="w-3/4 border-r-2 border-gray-200 pr-6 pb-10">
            <div className="w-full py-6">
                Select a room : <span>{renderRoomButtons}</span>
            </div>
            <div className="">
                <div id="gallery" className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-4">
                    {renderRoomPhotos}
                </div>
                <div className="flex flex-row mt-8">
                    <div className="w-2/3">
                        <p>Located in Manāli, 1.5 km from Hidimba Devi Temple, Rockwood B&B provides accommodation with a shared lounge, free WiFi, a 24-hour front desk, and a shared kitchen. This bed and breakfast features free private parking and room service.</p>
                    </div>
                    <div className="w-1/3 pl-4 flex flex-wrap justify-between">
                        {renderRoomData}
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/4 pl-6">
            <RoomBilling fromDate={fromDate} toDate={toDate} numberOfGuest={numberOfGuest} numberOfRooms={numberOfRooms} sheetData={sheetData} roomsSelected={roomsSelected}/>
        </div>
      </section>
      <section className="mt-8 pb-20">
          <h2>Things to know</h2>
          <div className="flex flex-row mt-6">
            <div className="w-1/3">
                <h3>House Rules</h3>
                <ol className="w-2/3 ml-5 mt-4 list-disc list-outside">
                    <li><p>Check-in: After 12:00 pm</p></li>
                    <li><p>No Smoking</p></li>
                    <li><p>No parties or events</p></li>
                    <li><p>Pets are allowed</p></li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>Additional Rules</h3>
                <ol className="w-2/3 ml-5 mt-4 list-disc list-outside">
                    <li><p>If you are returning home after dark, make sure you have a working flashlift to help you see the path</p></li>
                    <li><p>You are allowed to smoke outside the house, in the balcony</p></li>
                    <li><p>Please leave your shoes on the shoe rack provided</p></li>
                    <li><p>Heaters provided @ Rs 100/night for winters</p></li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>Cancellation Policy</h3>
                <ol className="w-2/3 ml-5 mt-4 list-disc list-outside">
                    <li><p>Check-in: After 12:00 pm</p></li>
                    <li><p>No Smoking</p></li>
                    <li><p>No parties or events</p></li>
                    <li><p>Pets are allowed</p></li>
                </ol>
            </div>
          </div>
      </section> 
    </DefaultLayout>
  );
}

export default Rooms;
