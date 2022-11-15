import React from "react";

const SingleRoutine = (props) => {
    const routine = props.routine;

    return(
        <div className="single-routine">
            <div>{routine.name} </div>
            <div>{routine.goal} </div>
            <div>{routine.creatorId} </div>
        </div>

    )
}

export default SingleRoutine;