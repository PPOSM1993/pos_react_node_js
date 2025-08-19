const express = require("express")
const { isVerifiedUser } = require("../middleware/tokenVerification")
const router = express.Router()
const { createOrder } = require("../controllers/paymentController")

router.route("/create-order").post(isVerifiedUser, createOrder);


module.exports = router;