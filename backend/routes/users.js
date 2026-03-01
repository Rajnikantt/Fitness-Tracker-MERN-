const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

// route   GET /api/users
//to Get all users (Admin only)
// access  Private/Admin
router.get('/', protect, admin, userController.getUsers);

// route   GET /api/users/:id
// to Get single user (Admin only)
// access  Private/Admin
router.get('/:id', protect, admin, userController.getUser);

// route   PUT /api/users/:id
// to Update user (Admin only)
// access  Private/Admin
router.put('/:id', protect, admin, userController.updateUser);

// route   DELETE /api/users/:id
// to Deactivate user (Admin only)
// access  Private/Admin
router.delete('/:id', protect, admin, userController.deactivateUser);

module.exports = router;
