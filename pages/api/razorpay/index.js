const Razorpay = require('razorpay')
const shortid = require('shortid');

const razorpay = new Razorpay({
    key_id: 'rzp_test_VDcPH2iaD8UbcQ',
    key_secret: 'tA2b8WRoSgTCwyxesePOqGP4'
})

export default async (req, res) => {
    if (req.method === 'POST') {

        const payment_capture = 1;
        const currency = 'INR';

        const options ={
            amount: req.body.amount * 100, //Convert to paisa
            currency,
            receipt: shortid.generate(),
            payment_capture
        }

       try{
        const response = await razorpay.orders.create(options);
        res.json({
            id: response.id,
            amount: response.amount,
            currency: 'INR'
        });
       } catch(error){
           console.log("Error",error)
       }
    } 
  }