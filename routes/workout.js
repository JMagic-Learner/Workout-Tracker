const router = require("express").Router();
const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useFindAndModify: false
});
const db = mongoose.connection;


router.get("/stats", (req, res) => {
  console.log("You have pinged the stats page");
  db.workouts.find({"exercises.type": "resistance"}).then(res => {
    res.json(db.workouts.find({"exercises.type": "resistance"}));

  });
  res.redirect('stats.html');
});

router.get("/exercise", (req, res) => {
  console.log("You have pinged the excersize page");
  db.workouts.find({"exercises.type": "resistance"}).then(res => {
    res.json(db.workouts.find({"exercises.type": "resistance"}));

  });
  res.redirect('excercise.html');
});


// workout> db.workouts.find({"exercises.type": "resistance"});
module.exports = router;