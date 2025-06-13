const mongoose = require("mongoose");

const hotelBookingSchema = new mongoose.Schema({
  name: String,
  location: String,
  type: String,
  nights: String,
  amenities: String,
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

module.exports = mongoose.model("HotelBooking", hotelBookingSchema);
