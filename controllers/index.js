const express = require("express");
const router = express.Router();

router.use("/pets", require("./pets"))
router.use("/names", require("./names"))

module.exports = router;