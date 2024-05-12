const failureController = require("../controller/failureController");
const failureRouter = require("express").Router();

failureRouter.post("/failure/:tran_id", failureController);

module.exports = failureRouter;