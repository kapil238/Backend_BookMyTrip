const mongoose = require("mongoose");

const flightBookingSchema = new mongoose.Schema({
  airline: String,
  from: String,
  to: String,
  duration: String,
  stops: String,
  departure: String,
  arrival: String,
  flightType: String,
  cabinClass: String,
  price: Number,
  imgSrc: String,
  traveller: {
    gender: String,
    firstName: String,
    lastName: String,
    email: String,
    countryCode: String,
    mobile: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("FlightBooking", flightBookingSchema);
