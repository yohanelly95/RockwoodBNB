import moment from 'moment';
import { useEffect } from 'react';

const RoomSelection = (props) => {
    const {roomsSelected, roomNumbers, sheetData, handleRoomSelect, fromDate, toDate} = props;
    const roomState = [-1, -1, -1, -1, -1, -1];
    const allBookings = [];

    Object.keys(sheetData).map((obj, index) => {
        allBookings[index] = JSON.parse(sheetData[obj].dates);
    })

    const checkAvailability = (index) => {
        const roomBookings = allBookings[index] || [];
        let numOfBookings = 0;

        roomBookings.map((booking) => {
            if (moment(fromDate).isAfter(booking.to) || moment(toDate).isBefore(booking.from)) numOfBookings;
            else if (moment(fromDate).isSame(booking.to) || moment(toDate).isSame(booking.from)) numOfBookings;
            else numOfBookings++;
        })

        return numOfBookings == 0;
    }

    const renderRoomButtons = roomState.map((state, index) => {
        const isActive = roomsSelected.some((room) => room.index == index);
        state = checkAvailability(index);
        // console.log(state, roomNumbers[index]);
        return(
            <button 
                key={index} 
                onClick={() => handleRoomSelect(roomNumbers[index], index)}
                className={state == -1 ? "btn-loading ml-3" : state && isActive ? "btn-secondary ml-3 btn-active" : state && !isActive ? "btn-secondary ml-3" : "btn-disabled btn-secondary ml-3"}
                disabled={state === ''}
            >
            {`Room ${roomNumbers[index]}`}
            </button>
        )
    });

    return (
        <>
            Select a room : <span>{renderRoomButtons}</span>
        </>
    )
}

export default RoomSelection;