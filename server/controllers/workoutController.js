const Workout = require('../models/workoutsModel')
const mongoose = require('mongoose')

// get all workout
const getAllWorkout = async (req, res) => {
    const workout = await Workout.find().sort({createdAt: -1})
    res.status(200).json(workout)
}

// create a new workout
const createNewWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await Workout.create({
            title, load, reps
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(500).json({Errmsg: error.message})
    }
}

// get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params

    // using the mongoose ODM to check for a valid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Errmsg: 'No such workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({Errmsg:'No such workout'})
    }

    res.status(200).json(workout)
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    // using the mongoose ODM to check for a valid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ErrMsg: 'No such workout'})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({ErrMsg: 'No such workout'})
    }

    res.status(200).json(workout)
}

// Update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    // using the mongoose ODM to check for a valid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ErrMsg: 'No such workout found'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({ErrMsg: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createNewWorkout,
    getAllWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}