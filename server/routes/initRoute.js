const initController = require("../controller/initController");
const initRouter = require("express").Router();

initRouter.post("/init", initController);

module.exports = initRouter;