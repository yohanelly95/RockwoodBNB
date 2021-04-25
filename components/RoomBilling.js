import { useState, useEffect, useRef } from 'react';
import { toastSuccess, toastError } from './common/Toast';
import axios from 'axios';
import moment from 'moment';
import Counter from './Counter';

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
        resolve(true)
        }
        script.onerror = () => {
        resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = true;


const RoomBilling = (props) => {

    const { fromDate, toDate, roomsSelected, setDisplayBookingModal = () => {} } = props;
    //Show modal to capture these values, hardcoding for now
    const [name, setName] = useState('Bruno');
    const [email, setEmail] = useState('bruno@tigbitties.com');
    const [totalRoomsAmount, setTotalRoomsAmount] = useState('');
    const [totalInvoiceAmount, setTotalInvoiceAmount] = useState('');
    const [totalBedsAmount, setTotalBedsAmount] = useState('');
    const [displayRoomsSelected, setDisplayRoomsSelected] = useState('');
    const [extraBedding, setExtraBedding] = useState(0);

    useEffect(() => {
        displaySelectedRooms();
    }, [roomsSelected]);


    useEffect(() => {
        if(roomsSelected){
            axios.post("/api/invoice", {numberOfRooms: roomsSelected.length, numberOfBeds: extraBedding}).then((response) => {
                const { data: {totalRoomsCharge, totalInvoice, totalBedsCharge} } = response
                setTotalRoomsAmount(totalRoomsCharge);
                setTotalInvoiceAmount(totalInvoice);
                setTotalBedsAmount(totalBedsCharge);
            });
        }
    }, [roomsSelected, extraBedding]);

        const displayRazorpay = async () =>  {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

            if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
            }
            const GApiTest = await axios.post('api/gapi', {
                selectedDates: { 
                    "from": fromDate,
                    "to": toDate
                },
                selectedRooms: roomsSelected
            });

            const data = await axios.post('api/razorpay', {
                amount: totalInvoiceAmount // Send this value from total calc
            })
            const response = data.data;

            const options = {
                key: __DEV__ ? 'rzp_test_VDcPH2iaD8UbcQ' : 'PRODUCTION_KEY',
                currency: response.currency,
                amount: response.amount,
                order_id: response.id,
                name: 'Rockwood BNB',
                description: 'Payment for your stay',
                image: '/assets/img/logo-sm.svg',
                handler: function (response) {
                    //Using a toast for now, webhook pending || WIP
                    toastSuccess("Payment Successful!");
                    // alert(response.razorpay_payment_id)
                    // alert(response.razorpay_order_id)
                    // alert(response.razorpay_signature)
                },
                prefill: {
                    name,
                    email: email,
                    phone_number: '9899999999'
                }
            }

            const paymentObject = new window.Razorpay(options)
            paymentObject.open();
    }

    const displaySelectedRooms = () => {
        const concatRooms = roomsSelected && roomsSelected.map((room) => room.roomNumber);
        console.log(roomsSelected);
        setDisplayRoomsSelected(concatRooms.toString());
    }

    const handleBooking = async () => {
        setDisplayBookingModal(true);
        const GApiTest = await axios.post('api/gapi', {
            selectedDates: { 
                "from": fromDate,
                "to": toDate
            },
            selectedRooms: roomsSelected
        });
    }

    return(
        <>
        <h2 className="mt-4">{`Rooms: ${displayRoomsSelected}`}</h2>
            <div className="w-full mt-6 py-4 px-6 bg-gray-200 rounded-lg flex flex-col flex-grow">
                <div className="">
                    <p className="text-2xl">₹<span>1999</span><span className="text-base"> /night</span></p>
                    <p className="mt-2"><span>{moment(fromDate).format("MMM Do, YYYY")}</span> to <span>{moment(toDate).format("MMM Do, YYYY")}</span></p>
                    <p className="mt-6">₹<span>1999</span> x <span>{parseInt(roomsSelected.length)}</span><span className="float-right">₹<span>{totalRoomsAmount}</span></span></p>
                    <p className="mt-2">Extra Bedding x <span>{extraBedding}</span><span className="float-right">₹<span>{totalBedsAmount}</span></span></p>
                    <Counter counter={extraBedding} setCounter={setExtraBedding}/>
                    <p className="mt-4 font-bold">Total<span className="float-right">₹<span>{totalInvoiceAmount ? totalInvoiceAmount : '...'}</span></span></p>
                    <button className="btn-primary btn-fw mt-12 font-bold" onClick={handleBooking}>BOOK</button>
                    <p className="text-center w-full mt-4">You won't be charged yet</p>
                </div>
            </div>
            <ol className="my-6">
                <li><p>First Floor</p></li>
                <li><p>Road facing windows</p></li>
                <li><p>Balcony</p></li>
                <li><p>Closet space</p></li>
                <li><p>Heaters available on request</p></li>
                <li><p>Shower</p></li>
                <li><p>Laptop friendly workspace</p></li>
            </ol>
        </>
    );
}

export default RoomBilling;

            