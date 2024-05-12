const refundController = require("../controller/refundController");
const refundRouter = require("express").Router();

refundRouter.post("/initiate-refund", refundController);

module.exports = refundRouter;