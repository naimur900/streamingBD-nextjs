const validateController = require("../controller/validateController");
const validateRouter = require("express").Router();

validateRouter.get("/validate", validateController);

module.exports = validateRouter;