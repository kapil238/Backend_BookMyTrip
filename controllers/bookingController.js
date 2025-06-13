const CarBooking = require("../models/CarBooking");
const FlightBooking = require("../models/FlightBooking");
const TourBooking = require("../models/TourBooking");
const HotelBooking = require("../models/HotelBooking");

exports.bookCar = async (req, res) => {
  try {
    const booking = await CarBooking.create(req.body);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.bookFlight = async (req, res) => {
  try {
    const booking = await FlightBooking.create(req.body);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.bookTour = async (req, res) => {
  try {
    const booking = await TourBooking.create(req.body);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.bookHotel = async (req, res) => {
  try {
    const booking = await HotelBooking.create(req.body);
    res.status(201).json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getAllCarBookings = async (req, res) => {
  try {
    const bookings = await CarBooking.find();
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getAllFlightBookings = async (req, res) => {
  try {
    const bookings = await FlightBooking.find();
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getAllTourBookings = async (req, res) => {
  try {
    const bookings = await TourBooking.find();
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getAllHotelBookings = async (req, res) => {
  try {
    const bookings = await HotelBooking.find();
    res.status(200).json({ success: true, bookings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
