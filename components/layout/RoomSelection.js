import { useEffect, useCallback } from 'react';

const RoomSelection = (props) => {
    const {roomState, roomsSelected, roomNumbers, sheetData, handleRoomSelect} = props;

    Object.keys(sheetData).map((obj, index) => {
        roomState[index] = sheetData[obj].status;
    })

    const renderRoomButtons = roomState.map((state, index) => {
        const isActive = roomsSelected.some((room) => room.index == index);
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