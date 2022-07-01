import { useState } from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()
    const [showActions, setShowActions] = useState(false)
    const toggleAction = () => setShowActions(!showActions)
    const closeAction = () => { if(showActions) setShowActions(!showActions) }

    const handleDeleteWorkout = async () => {
        const response = await fetch(`/api/v1/workout/delete/${workout._id}`,{
            method:'DELETE'
        })
        const data = await response.json()
        if(response.ok) dispatch({type: 'DELETE_WORKOUT', payload: data})
    }

    const handleUpdateWorkout = async () => {
        // dispatch({type: 'DELETE_WORKOUT', payload: data})
    }

    return (
        <div className="workoutDetails" onClick={closeAction}>
            <div className="workoutDetailsTop">
                <h4>{ workout.title }</h4>
                <span onClick={toggleAction}>:</span>
            </div>
            <p><strong>Load (kg): </strong>{ workout.load }</p>
            <p><strong>Reps (kg): </strong>{ workout.reps }</p>
            <p>{ workout.createdAt }</p>
            {showActions ? 
            <div className="actions">
                <p onClick={handleUpdateWorkout}>Edit</p>
                <div className="hr"></div>
                <p onClick={handleDeleteWorkout}>Del</p>
            </div> : 
            null }
            
        </div>
    )
}

export default WorkoutDetails