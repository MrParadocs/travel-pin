import mongoose, { mongo } from "mongoose"; 

const userPin = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    title: {
      type: String,
      require: true,
    },
    desc: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    lat: {
        type: Number,
      require: true,
      min: -90,
      max: 90,
    },
    long: {
        type: Number,
      require: true,
      min: -180,
      max: 180,
    },
  }, {
    timestamps: true,
  });

  const Pin = mongoose.model('Pin', userPin)

  export default Pin;