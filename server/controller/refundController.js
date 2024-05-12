const Payment = require("../model/paymentSchema");
const SSLCommerzPayment = require('sslcommerz-lts')


const refundController = async (req, res) => {
    const data = {
        refund_amount:10,
        refund_remarks:'',
        // bank_tran_id:CB5464321445456456,
        // refe_id:EASY5645415455,
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.initiateRefund(data).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#initiate-the-refund
    });
};

module.exports = refundController;
