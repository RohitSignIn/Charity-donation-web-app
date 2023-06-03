import express from "express";
import {
  checkout,
  paymentVerification,
  fetchPayment
} from "../controllers/paymentController.js";

const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

router.route("/total-fund").get(fetchPayment);

export default router;
