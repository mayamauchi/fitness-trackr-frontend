import React, { useState, useEffect } from "react";
import { getActivities, updateMyRoutineActivity } from "../api-adapter";

const EditMyRoutineActivity = (props) => {
  const routine = props.routine;
  const [newCount, setNewCount] = useState(0);
  const [newDuration, setNewDuration] = useState(0);
  const [newActivityId, setNewActivityId] = useState("");
  const [activities, setActivities] = useState(routine.activities);

  //Edit Activity
  async function handleSubmit(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    const token = localStorage.getItem("token");

    const updatedRoutineActivity = await updateMyRoutineActivity(token, {
      routineActivityId: newActivityId,
      count: newCount,
      duration: newDuration,
    });
  }

  return (
    <>
      <div className="update-activity">
        {activities && activities.length
          ? activities.map((activity) => {
              return (
                <>
                  <div key={activity.id}></div>
                  <div>Name: {activity.name} </div>
                  <div>Description: {activity.description} </div>
                  <div>Count: {activity.newCount} </div>
                  <div>Duration: {activity.newDuration} </div>
                  <h1>Hello world</h1>

                  <button
                    className="myroutines-button"
                    type="submit"
                    id={routine.id ? `${routine.id}` : null}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    Pete
                  </button>
                </>
              );
            })
          : null}
      </div>{" "}
    </>
  );
};
export default EditMyRoutineActivity;
