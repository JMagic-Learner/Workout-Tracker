const router = require("express").Router();
const db = require('../models');

router.get("/workouts", (req,res) => {
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

//Creating a workout
router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/workouts/bulk", ({ body }, res) => {
  db.Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



// For the range call from  api.js in public/assets/js
router.get("/workouts/range", (req, res) => {

  db.Workout.find({}).then(dbWorkout => {
      console.log("retrieving all workouts in range");
      console.log(dbWorkout);

      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});

// add exercise
router.put("/workouts/:id", (req, res) => {

  db.Workout.findOneAndUpdate(
    //find workout by ID
      { _id: req.params.id },
      {
          $inc: { totalDuration: req.body.duration },
          $push: { exercises: req.body }
      },
      { new: true }).then(dbWorkout => {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      });

});


module.exports = router;