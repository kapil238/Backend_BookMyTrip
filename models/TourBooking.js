const mongoose = require("mongoose");

const tourBookingSchema = new mongoose.Schema({
  title: String,
  location: String,
  type: String,
  duration: String,
  highlights: String,
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

module.exports = mongoose.model("TourBooking", tourBookingSchema);
