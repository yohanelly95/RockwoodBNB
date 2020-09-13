import { useState, useEffect, useRef } from 'react';
import axios from 'axios';


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

    const { fromDate, toDate, numberOfGuest, numberOfRooms} = props;

    //Show modal to capture these values, hardcoding for now
    const [name, setName] = useState('Bruno');
    const [email, setEmail] = useState('bruno@tigbitties.com');

    //Stay total calc pending

        const displayRazorpay = async () =>  {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

            if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
            }

            const data = await axios.post('api/razorpay', {
                amount: 20 // Send this value from total calc
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
                    //Add either webhook for verification or success toast || WIP
                    // alert(response.razorpay_payment_id)
                    // alert(response.razorpay_order_id)
                    // alert(response.razorpay_signature)
                },
                prefill: {
                    name,
                    email: 'sdfdsjfh2@ndsfdf.com',
                    phone_number: '9899999999'
                }
            }

            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
    }

    return(
        <>
        <h2 className="mt-4">Room 3</h2>
            <div className="w-full mt-6 py-4 px-6 bg-gray-200 rounded-lg flex flex-col flex-grow">
                <div className="">
                    <p className="text-2xl">₹<span>1999</span><span className="text-base"> /night</span></p>
                    <p className="mt-2"><span>{fromDate}</span> to <span>{toDate}</span></p>
                    <p className="mt-6">₹<span>1999</span> x <span>2</span><span className="float-right">₹<span>3998</span></span></p>
                    <p className="mt-2">Extra Bedding<span className="float-right">₹<span>750</span></span></p>
                    <p className="mt-4 font-bold">Total<span className="float-right">₹<span>4748</span></span></p>
                    <button className="btn-primary btn-fw mt-12 font-bold" onClick={displayRazorpay}>BOOK</button>
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

            