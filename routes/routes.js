const express = require("express");
const routeProcess = require("./route-process");
const verifyToken = require("../middleware/verifyToken");
const routes = express.Router();

routes.post("/login", routeProcess.login);
routes.get("/videos", verifyToken, routeProcess.videoIndex);

module.exports = routes;
