import { useState, useEffect } from 'react';
import { DefaultLayout } from "../components";
import RoomBilling from '../components/RoomBilling';
import { useRouter } from 'next/router';
import { encode, decode } from '../utils';
import moment from 'moment';


const Rooms = () => {

    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [numberOfGuest, setNumberOfGuest] = useState('');
    const [numberOfRooms, setNumberOfRooms] = useState('');


    const router = useRouter();

    useEffect(() => {
        if(Object.keys(router.query).length > 0){
            const fromDateParam = new Date(decode(router.query.from));
            const toDateParam = new Date(decode(router.query.to));
            const guestCount = decode(router.query.guest);
            const roomCount = decode(router.query.rooms);
            setFromDate(moment(fromDateParam).format('MMM Do'));
            setToDate(moment(toDateParam).format('MMM Do'));
            setNumberOfGuest(guestCount);
            setNumberOfRooms(roomCount);
        }
      }, [router]);


  return (
    <DefaultLayout
      wrapperClass="container"
      seoTitle="Book rooms | Rockwood BNB"
    >
      <section className="flex flex-row border-b-2 border-gray-200">
        <div className="w-3/4 border-r-2 border-gray-200 pr-6 pb-10">
            <div className="w-full py-6">
                Select a room : <button className="btn-primary ml-2">Room 1</button>
                <button className="btn-secondary ml-4">Room 1</button>
            </div>
            <div className="">
                <div className="h-64 bg-gray-200 rounded-lg">
                </div>
                <div className="flex flex-row mt-8">
                    <div className="w-2/3 h-64">
                        <p>Located in Manāli, 1.5 km from Hidimba Devi Temple, Rockwood B&B provides accommodation with a shared lounge, free WiFi, a 24-hour front desk, and a shared kitchen. This bed and breakfast features free private parking and room service.</p>
                    </div>
                    <div className="w-1/3 flex flex-wrap">
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/4 pl-6">
            <RoomBilling fromDate={fromDate} toDate={toDate} numberOfGuest={numberOfGuest} numberOfRooms={numberOfRooms}/>
        </div>
      </section>
      <section className="mt-8 pb-20">
          <h2>Things to know</h2>
          <div className="flex flex-row mt-6">
            <div className="w-1/3">
                <h3>House Rules</h3>
                <ol className="w-3/4 ml-5 mt-4 list-disc list-outside">
                    <li>Check-in: After 12:00 pm</li>
                    <li>No Smoking</li>
                    <li>No parties or events</li>
                    <li>Pets are allowed</li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>Additional Rules</h3>
                <ol className="w-3/4 ml-5 mt-4 list-disc list-outside">
                    <li>If you are returning home after dark, make sure you have a working flashlift to help you see the path</li>
                    <li>You are allowed to smoke outside the house, in the balcony</li>
                    <li>Please leave your shoes on the shoe rack provided</li>
                    <li>Heaters provided @ Rs 100/night for winters</li>
                </ol>
            </div>
            <div className="w-1/3">
                <h3>House Rules</h3>
                <ol className="w-3/4 ml-5 mt-4 list-disc list-outside">
                    <li>Check-in: After 12:00 pm</li>
                    <li>No Smoking</li>
                    <li>No parties or events</li>
                    <li>Pets are allowed</li>
                </ol>
            </div>
          </div>
      </section> 
    </DefaultLayout>
  );
}

export default Rooms;
