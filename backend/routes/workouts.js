const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const workoutController = require('../controllers/workoutController');
const { protect } = require('../middleware/auth');


// route   GET /api/workouts
// to Get all workouts for current user
// access  to Private
router.get('/', protect, workoutController.getWorkouts);


// route   GET /api/workouts/:id
// to Get single workout
// access  to Private
router.get('/:id', protect, workoutController.getWorkout);


// route   POST /api/workouts
// to Create new workout
// access  to Private
router.post('/', [protect, [
  body('date').isISO8601().withMessage('Valid date is required')
]], workoutController.createWorkout);


// route   PUT /api/workouts/:id
// to Update workout
// access  to Private
router.put('/:id', protect, workoutController.updateWorkout);


// route   DELETE /api/workouts/:id
// to Delete workout
// access  to Private
router.delete('/:id', protect, workoutController.deleteWorkout);


// route   GET /api/workouts/stats/summary
// to Get workout statistics
// access  to Private
router.get('/stats/summary', protect, workoutController.getWorkoutStats);

module.exports = router;
