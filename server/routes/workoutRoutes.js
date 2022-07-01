const express = require('express');
const {
    createNewWorkout,
    getAllWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router();

// GET all workout
// @route /api/v1/workout/
// Desc: a get request for getting all workouts
router.get('/', getAllWorkout)

// POST a workout
// @route /api/v1/workout/create/
// Desc: a post request for posting a new workout
router.post('/create', createNewWorkout)

// GET a workout
// @route /api/v1/workout/:id
// Desc: a get request for getting a workout
router.get('/:id', getSingleWorkout)

// DELETE a workout
// @route /api/v1/workout/delete/:id
// Desc: a delete request for delete a workout
router.delete('/delete/:id', deleteWorkout)

// PATCH a workout
// @route /api/v1/workout/update/:id
// Desc: an update request for updating a workout
router.patch('/update/:id', updateWorkout)


module.exports = router