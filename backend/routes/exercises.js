const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const exerciseController = require('../controllers/exerciseController');
const { protect, admin } = require('../middleware/auth');

// route  GET /api/exercises
// to Get all active exercises
// access to Private
router.get('/', protect, exerciseController.getExercises);

// route GET /api/exercises/:id
// to Get single exercise
// access to Private
router.get('/:id', protect, exerciseController.getExercise);

// route   POST /api/exercises
// to Create new exercise (Admin only)
// access  Private/Admin
router.post('/', [protect, admin, [
  body('name').trim().notEmpty().withMessage('Exercise name is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('equipment').notEmpty().withMessage('Equipment is required')
]], exerciseController.createExercise);

// route   PUT /api/exercises/:id
// to  Update exercise (Admin only)
// access  Private/Admin
router.put('/:id', protect, admin, exerciseController.updateExercise);

// route   DELETE /api/exercises/:id
// to Deactivate exercise (Admin only)
// access  Private/Admin
router.delete('/:id', protect, admin, exerciseController.deleteExercise);

module.exports = router;
