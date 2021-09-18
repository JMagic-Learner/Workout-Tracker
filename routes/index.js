const router = require('express').Router();
const workoutRoutes = require('./workout')
const apiRoutes = require('./api/api')

router.use('/api', apiRoutes);
router.use('/' , workoutRoutes);

module.exports = router;