import { useEffect, useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    // const [workouts, setWorkouts] = useState(null)
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/v1/workout')
            const data = await response.json()

            if (response.ok) {
                // setWorkouts(data)
                dispatch({type: 'SET_WORKOUTS', payload: data})
            }
        }
        fetchWorkout()
    },[])

    return(
        <div className='HomePage'>
            <div className="workOutCards">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>

            
            <WorkoutForm />
        </div>
    )
}

export default Home