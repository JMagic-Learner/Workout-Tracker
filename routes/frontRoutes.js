const router = require("express").Router();
const path = require("path");

router.get("/", (req,res) => {
  res.redirect('index.html');
});

router.get("/stats", (req, res) => {
  console.log("You have pinged the stats page");
  res.redirect('stats.html');
});

router.get("/exercise", (req, res) => {
  console.log("You have pinged the excersize page");
  res.redirect('exercise.html');
});


// workout> db.workouts.find({"exercises.type": "resistance"});
module.exports = router;