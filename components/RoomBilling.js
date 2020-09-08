import { useState, useEffect, useRef } from 'react';


const RoomBilling = (props) => {

    const { fromDate, toDate, numberOfGuest, numberOfRooms } = props;

    //Total Calc can be done here
    
    return(
        <>
        <h2 className="mt-4">Room 3</h2>
            <div className="w-full mt-6 py-4 px-6 bg-gray-200 rounded-lg flex flex-col flex-grow">
                <div className="">
                    <p className="text-2xl">₹<span>1999</span><span className="text-base"> /night</span></p>
                    <p className="mt-2"><span>{fromDate}</span> to <span>{toDate}</span></p>
                    <p className="mt-6">₹<span>1999</span> x <span>{numberOfRooms}</span><span className="float-right">₹<span>3998</span></span></p>
                    <p className="mt-2">Extra Bedding<span className="float-right">₹<span>750</span></span></p>
                    <p className="mt-4 font-bold">Total<span className="float-right">₹<span>4748</span></span></p>

                </div>
            </div>
        </>
    );
}

export default RoomBilling;