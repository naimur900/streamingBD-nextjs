const Payment = require("../model/paymentSchema");

const failureController = async (req, res) => {
    const tran_id = req.params.tran_id;
    // console.log("From failure", tran_id);

    const result = await Payment.deleteOne({
        trxId: tran_id
    });

    if (result.deletedCount > 0) { // Changed from modifiedCount to deletedCount
        res.redirect(`http://localhost:3000/payment/failed?${req.params.tran_id}`);
    }
};

module.exports = failureController;
