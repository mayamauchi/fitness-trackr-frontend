import React from "react";

const SingleRoutine = (props) => {
  const routine = props.routine;
  const activity = props.routine.activities;

  return (
    <>
      <div className="single-routine">
        <div>Routine Name: {routine.name} </div>
        <div>Goals: {routine.goal} </div>
        <div> Created By: {routine.creatorName} </div>
      </div>

      <div className="">
        {activity.length ? (
          activity.map((activity) => {
            return (
              <div className="routine-activity">
                <div>Name: {activity.name} </div>
                <div>Description: {activity.description} </div>
                <div>Count: {activity.count} </div>
                <div>Duration: {activity.duration} </div>
                <br></br>
              </div>
            );
          })
        ) : (
          <div>Loading Activities</div>
        )}
      </div>
    </>
  );
};

export default SingleRoutine;
