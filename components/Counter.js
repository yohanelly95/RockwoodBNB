import {useState} from 'react';

const Counter = (props) => {
    const {counter = 0, setCounter = () => {} } = props;

    const handleIncrement = () => {
        setCounter(counter => (counter + 1));
    }

    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(counter => (counter - 1));
        }
    }

    return(
        <span className="flex flex-row">
            <button 
                onClick={() => handleIncrement()}
                className="w-5 h-5 leading-3 border-2 border-solid border-gray-200"
            >
                +
            </button>
            {/* <p className="w-6 text-center">{counter}</p> */}
            <button 
                onClick={() => handleDecrement()}
                className="w-5 h-5 leading-3 border-2 border-solid border-gray-200"
            >
                -
            </button>
        </span>
    );
}

export default Counter;