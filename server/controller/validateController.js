const Payment = require("../model/paymentSchema");
const SSLCommerzPayment = require('sslcommerz-lts')


const validateController = async (req,res)=>{
    const body = req.body
    console.log(body);
    // const data = {
    //     val_id:ADGAHHGDAKJ456454 //that you go from sslcommerz response
    // };
    // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    // sslcz.validate(val_id).then(data => {
    //     console.log(data);
    //     //process the response that got from sslcommerz 
    //    // https://developer.sslcommerz.com/doc/v4/#order-validation-api
    // });
}
module.exports = validateController