import React from "react";


const SingleRoutine = (props) => {
    const routine = props.routine;
    // console.log(routine)  
    return(
        
        <div className="single-routine">
            <div>Routine Name: {routine.name} </div>
            <div>Goals: {routine.goal} </div>
            <div> Created By: {routine.creatorName} </div>
            <br></br>
        <div className="single-routine-activity">
            <div>
                {routine.activities.length ? (
                    routine.activities.map((activity) => {
                        return (
                            <>
                            <div>Activity: {activity.name}</div>
                            <div>Description: {activity.description}</div>
                            <div>Duration: {activity.duration}</div>
                            <div>Count: {activity.count}</div>
                            <br></br>
                            </>
                            // <div key = {`activity${activity.id}`}/>
                            
                        );
                    })
                ): (
                    <div>Loading Activities</div>
                )
                }
                </div> 
            
            
            
            {/*take out br when working on CSS*/}
        </div>
        </div>

    )
}

export default SingleRoutine;