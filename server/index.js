const express = require('express')
const cors = require('cors');
const app = express()
const initRouter = require("./routes/initRoute")
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const successRouter = require('./routes/successRoute');
const failureRouter = require('./routes/failureRoute')
const refundRouter = require("./routes/refundRoute")
const validateRouter = require("./routes/validateRoute")

dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const mongouri = process.env.MONGO_URI;
const port = process.env.PORT;


mongoose.connect(mongouri)
  .then(() => {
    console.log("DB is connceted");
  })
  .catch((error) => {
    console.log(error.message);
  });


app.use("/payment",initRouter)
app.use("/payment",successRouter)
app.use("/payment",failureRouter)
app.use("/payment",refundRouter)
app.use("/payment",validateRouter)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})