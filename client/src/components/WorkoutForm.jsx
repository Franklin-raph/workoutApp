import { useState } from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {

    const { dispatch } = useWorkoutsContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handleSubmitWorkout = async (e) => {
        e.preventDefault()

        if(title === '' || load === '' || reps === ''){
            setError('Please Fill in all fields')
            setTimeout(() => {setError('')}, 2000)
        }else{
            const workout = { title, load, reps }
            const response = await fetch('/api/v1/workout/create',{
                method:'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type':'application/json',
                }
            })
            const data = await response.json()

            if(response.ok){
                setTitle('')
                setLoad('')
                setReps('')
                setError(null)
                dispatch({type: 'CREATE_WORKOUT', payload: data})
            }
    
            if(!response.ok){
                setError(data.error)
            }
        }
    }

    return(
        <div className="workoutForm">
            <h3>Add a new workout</h3>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmitWorkout}>
                <div>
                    <label>Exercise Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Load in(Kg):</label>
                    <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} />
                </div>
                <div>
                    <label>Reps:</label>
                    <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
                </div>
                <button>Add workout</button>
            </form>
        </div>
    )
}

export default WorkoutForm