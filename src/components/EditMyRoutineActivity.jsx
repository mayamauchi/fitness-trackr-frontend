import React, { useState, useEffect } from "react";
import { getActivities, updateMyRoutineActivity } from "../api-adapter";

const EditMyRoutineActivity = (props) => {
  const routine = props.routine;

  const [newCount, setNewCount] = useState(routine.count);
  const [newDuration, setNewDuration] = useState(routine.duration);
  const [update, setUpdate] = useState(false);


  //Edit Activity

  async function handleSubmit(e) {
    e.preventDefault();

    const updatedRoutineActivity = await updateMyRoutineActivity({
      routineActivityId: routine.routineActivityId,
      count: count,
      duration: duration,
    });
  }

  return (
    <>
      <div className="update-activity">
        <div>Name: {activity.name} </div>
        <div>Description: {activity.description} </div>
        <div>Count: {activity.count} </div>
        <div>Duration: {activity.duration} </div>
        <br></br>

        {update ? (
          <form onSubmit={handleSubmit} id={routine.id}>
            <h3>Update your activity!</h3>
            <input
              name="count"
              type="text"
              value={newCount}
              placeholder="name"
              onChange={(e) => {
                setNewCount(e.target.value);
              }}
            ></input>
            <input
              name="name"
              type="text"
              value={newDuration}
              placeholder="goal"
              onChange={(e) => {
                newDuration(e.target.value);
              }}
            ></input>


            <button
              type="button"
              className="myroutines-button"
              onClick={() => {
                setUpdate(false);
                refreshPage;
              }}
            >
              Undo
            </button>
            <button type="submit" className="myroutines-button">
              Update Routine
            </button>
          </form>
        ) : (
          <button
            className="myroutines-button"
            type="submit"
            onClick={() => {
              setUpdate(true);
            }}
          >
            Edit
          </button>
        )}
        <button
          className="myroutines-button"
          type="submit"
          id={routine.id ? `${routine.id}` : null}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          Delete
        </button>
      </div>

      
    </>
  );
};
export default EditMyRoutineActivity;
