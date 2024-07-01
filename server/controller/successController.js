const Payment = require("../model/paymentSchema");

const successController = async (req,res)=>{
    // console.log(req.params.tran_id);
    const result = await Payment.updateOne({
        trxId: req.params.tran_id
    },{
        $set:{
            status: "successful"
        }
    })

    if(result.modifiedCount>0){
        res.redirect(`https://streaming-bd-nextjs.vercel.app/payment/successful?${req.params.tran_id}`)
    }
}

module.exports = successController