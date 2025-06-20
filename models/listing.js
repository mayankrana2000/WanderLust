const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  // image: {
  //     type: String,
  //     default:"https://unsplash.com/s/photos/beautiful-house",
  //     set: (v)=>
  //         v === ""
  //     ? "https://unsplash.com/s/photos/beautiful-house"
  //     : v,
  // },
  image: {
    // default:{
    // filename: "listingimage",
    // url: "https://unsplash.com/s/photos/beautiful-house",
    // },
    // set: (v)=>
    //     v === ""
    // ? {"listingimage": "https://unsplash.com/s/photos/beautiful-house"}
    // : v,
    filename: String,
    url: String,
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
