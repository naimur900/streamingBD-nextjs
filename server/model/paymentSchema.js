const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    trxId: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        default: 'pending'
    },
    contact_number:{
        type:String,
        required:true
    },
    total_amount: {
        type: Number,
        required: true
    },
    cart:{
        type: Array,
        requied: true
    },
    currency: {
        type: String,
        required: true
    },
    refrence:{
        type: String,
        required: false
    },
    status: {
        type: String,
        enum: ['pending', 'successful'],
        default: 'pending'
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Payment', paymentSchema);