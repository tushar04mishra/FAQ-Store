const express = require("express");
const router = express.Router();

const v1ApiRoutes = require("./v1/index");

router.use("/v1", v1ApiRoutes); // v1 se shuru hone wale routes  ko v1ApiRoutes se map kardo

module.exports = router;
