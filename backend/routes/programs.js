const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const programController = require('../controllers/programController');
const { protect } = require('../middleware/auth');

// route   GET /api/programs
// toGet all programs (public + user's own)
// access  to Private
router.get('/', protect, programController.getPrograms);

// route   GET /api/programs/public
// to Get all public programs
// access  to Private
router.get('/public', protect, programController.getPublicPrograms);

// route   GET /api/programs/my
// to Get current user's programs
// access  to Private
router.get('/my', protect, programController.getMyPrograms);

// route   GET /api/programs/:id
// to Get single program
// access  to Private
router.get('/:id', protect, programController.getProgram);

// route   POST /api/programs
// toCreate new program
// access  to Private
router.post('/', [protect, [
  body('name').trim().notEmpty().withMessage('Program name is required')
]], programController.createProgram);

// route   PUT /api/programs/:id
// toUpdate program
// access  to Private
router.put('/:id', protect, programController.updateProgram);

// route   DELETE /api/programs/:id
// to Delete program
// access  to Private
router.delete('/:id', protect, programController.deleteProgram);

// route   POST /api/programs/:id/adopt
// to Adopt a public program
// access  to Private
router.post('/:id/adopt', protect, programController.adoptProgram);

// route   GET /api/programs/:id/adopted
// to Get users who adopted this program
// access  to Private
router.get('/:id/adopted', protect, programController.getAdoptedUsers);

module.exports = router;
