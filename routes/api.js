const router = require("express").Router();
const db = require('../models');

router.get("/api/workouts", (req,res) => {
   db.Workout.find({}).then(dbWorkout => {
    dbWorkout.forEach(workout => {
      let total = 0;
      workout.exercises.forEach(e => {
        total += e.duration;
      });
      workout.totalDuration = total;
      });
      res.json(dbWorkout);
    }).catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/bulk", ({ body }, res) => {
  db.Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/exercise", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;