const successController = require("../controller/successController");
const successRouter = require("express").Router();

successRouter.post("/success/:tran_id", successController);

module.exports = successRouter;