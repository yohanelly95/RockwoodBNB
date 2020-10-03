import moment from 'moment';

const RoomSelection = (props) => {
    const {roomsSelected, roomNumbers, sheetData, handleRoomSelect, fromDate, toDate} = props;
    const roomState = [-1, -1, -1, -1, -1, -1];
    const roomToDates = ["", "", "", "", "", ""];
    const roomFromDates = ["", "", "", "", "", ""];

    Object.keys(sheetData).map((obj, index) => {
        roomState[index] = sheetData[obj].status;
        roomToDates[index] = sheetData[obj].to;
        roomFromDates[index] = sheetData[obj].from;
    })

    const checkAvailability = (state, index) => {
        if (state == "0") {
            console.log(fromDate, roomFromDates[index], roomToDates[index]);
            if (moment(fromDate).isAfter(roomToDates[index]) || moment(toDate).isBefore(roomFromDates[index])) {
                console.log(roomNumbers[index], fromDate, toDate, roomFromDates[index], roomToDates[index]);
                return 1;
            }
            else if (moment(fromDate).isSame(roomToDates[index]) || moment(toDate).isSame(roomFromDates[index])) return 1;
        } 
        else return state;
    }

    const renderRoomButtons = roomState.map((state, index) => {
        const isActive = roomsSelected.some((room) => room.index == index);
        state = checkAvailability(state, index);
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