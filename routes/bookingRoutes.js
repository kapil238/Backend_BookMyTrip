const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const { authenticate, adminOnly } = require('../middlewares/authMiddleware');

router.post("/car", bookingController.bookCar);
router.post("/flight", bookingController.bookFlight);
router.post("/tour", bookingController.bookTour);
router.post("/hotel", bookingController.bookHotel);

router.get("/car", authenticate, adminOnly, bookingController.getAllCarBookings);
router.get("/flight", authenticate, adminOnly, bookingController.getAllFlightBookings);
router.get("/tour", authenticate, adminOnly, bookingController.getAllTourBookings);
router.get("/hotel", authenticate, adminOnly, bookingController.getAllHotelBookings);


module.exports = router;
