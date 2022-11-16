import React from "react";

const SingleRoutine = (props) => {
    const routine = props.routine;
    return(
        <div className="single-routine">
            <div>Routine Name: {routine.name} </div>
            <div>Goals: {routine.goal} </div>
            <div> Created By: {routine.creatorName} </div>
            <br></br>
            {/*take out br when working on CSS*/}
        </div>

    )
}

export default SingleRoutine;