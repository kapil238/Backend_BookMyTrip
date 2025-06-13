const mongoose = require("mongoose");

const carBookingSchema = new mongoose.Schema({
  name: String,
  cartype: String,
  fuelType: String,
  unit: String,
  luggage: String,
  seats: String,
  price: Number,
  imgSrc: String,
  pickupAddress: String,
  dropAddress: String,
  traveller: {
    gender: String,
    firstName: String,
    lastName: String,
    email: String,
    countryCode: String,
    mobile: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("CarBooking", carBookingSchema);
