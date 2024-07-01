const dotenv = require('dotenv');
const is_live = false //true for live, false for sandbox
const SSLCommerzPayment = require('sslcommerz-lts')
const mongoose = require('mongoose');
const Payment = require('../model/paymentSchema')


dotenv.config();

const store_id = process.env.STORE_ID
const store_password = process.env.STORE_PASSWORD

const initController = async (req,res) => {

    const tran_id = new mongoose.Types.ObjectId().toString()
    const formData = req.body
    
    const data = {
        total_amount: parseInt(formData.price),
        currency: 'BDT',
        tran_id: tran_id, // use unique tran_id for each api call
        success_url: `https://streaming-bd-nextjs.vercel.app/payment/success/${tran_id}`,
        fail_url: `https://streaming-bd-nextjs.vercel.app/payment/failure/${tran_id}`,
        cancel_url: `https://streaming-bd-nextjs.vercel.app/payment/cancel/${tran_id}`,
        ipn_url: 'https://streaming-bd-nextjs.vercel.app/payment/validate',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: formData.senderName,
        cus_email: formData.email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: formData.phoneNumber,
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };



    // console.log(data);
    const sslcz = new SSLCommerzPayment(store_id, store_password, is_live)
    sslcz.init(data).then(apiResponse => {

        if(apiResponse?.GatewayPageURL){
            // console.log(apiResponse);
            res.send(apiResponse)
        }
        else{
            res.status(400).send({
                message:"SSL session was not successful"
            })
        }

        const newPayment = new Payment({
            trxId: tran_id,
            total_amount: parseInt(formData.price),
            name: formData.senderName,
            reference: formData.reference? formData.reference:"",
            contact_number: formData.phoneNumber,
            currency: "BDT",
            status: "pending",
            email:formData.email,
            cart:formData.cart
        });

        newPayment.save()
        .then(savedPayment => {
            console.log("Pending Payment saved successfully:");
        })
        .catch(error => {
            console.error("Error saving payment:", error);
        });

    });


}



module.exports= initController;