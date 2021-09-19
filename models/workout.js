const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: 'Day of the week'
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of workout"
      },
      name: {
        type: String,
        trim: true,
        required: "name of workout"
      },
      duration: {
        type: Number,
        required: "how long the workout is for"
      },
      weight: {
        type: Number,
        required: "How heavy the weight is"
      },
      reps: {
        type: Number,
        required: "How many repetitions"
      },
      sets: {
        type: Number,
        required: "This is the number of sets"
      },
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
