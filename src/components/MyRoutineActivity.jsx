import React, { useState, useEffect } from "react";
import {
  editRoutine,
  deleteRoutine,
  getActivities,
  addActivityToRoutine,
  updateMyRoutineActivity
} from "../api-adapter";

const MyRoutineActivity = (props) => {
  const routine = props.routine;
  const activity = props.routine.activities;

  const [newActivityId, setNewActivityId] = useState(null);
  const [duration, setDuration] = useState(0);
  const [count, setCount] = useState(0);
  const [activities, setActivities] = useState([]);
  const [update, setUpdate] = useState(false);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [updateActivity, setUpdateActivity] = useState(false);
  // const [newCount, setNewCount]= useState(0)
  // const [newDuration, setNewDuration]= useState(0)
  

  //All activities
  useEffect(() => {
    async function allActivities() {
      const activitiesList = await getActivities();
      const activitiesId = routine.activities.map((element) => {});

      //Filtering all activities

      const newActivitiesList = activitiesList.filter((element) => {
        if (activitiesId.includes(element.id)) {
          return false;
        } else {
          return true;
        }
      });

      setActivities(activitiesList);
      setFilteredActivities(newActivitiesList);
    }
    allActivities();
  }, []);

  //Add activity to routine
  async function addActivityHandle(e) {
    e.preventDefault();

    const newActivity = await addActivityToRoutine(routine.id, {
      activityId: newActivityId,
      count: count,
      duration: duration,
    });
  }

//   //Edit Activity 

//   async function editActivityHandle (e) {
//     e.preventDefault();

//     const updatedRoutineActivity = await updateMyRoutineActivity({
//         routineActivityId: newActivityId,
//       count: count,
//       duration: duration,
//     });

//   }

  return (
    <div className="myroutines-activity-form">
      <h3>Add an Activity</h3>
      {updateActivity ? (
        <form onSubmit={addActivityHandle} id={newActivityId}>
          <select
            defaultValue={newActivityId}
            onChange={(e) => {
              setNewActivityId(e.target.value);
            }}
          >
            {filteredActivities && filteredActivities.length
              ? filteredActivities.map((element) => {
                  return (
                    <option key={element.id} value={element.id}>
                      {element.name}
                    </option>
                  );
                })
              : null}
          </select>
          <>
            <input
              name="name"
              type="text"
              value={count}
              placeholder="count"
              onChange={(e) => {
                setCount(e.target.value);
              }}
            ></input>
            <input
              name="name"
              type="text"
              value={duration}
              placeholder="duration"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            ></input>
            <button type="submit" className="myroutines-activity-button">
              Add Activity
            </button>
          </>
        </form>
      ) : (
        <>
            {/* <button
            className="myroutines-button"
            type="submit"
            onClick={(e) => {
                editActivityHandle(e);
            }}
          >
            Edit
          </button> */}
          <button
            className="myroutines-button"
            type="submit"
            onClick={() => {
              setUpdateActivity(true);
            }}
          >
            Add
          </button>
          <button
            className="myroutines-button"
            type="submit"
            id={activity.id ? `${activity.id}` : null}
            onClick={(e) => {
              handleDelete(e);
            }}
          >
            Delete
          </button>
        </>
      )}
      <div>
        {activity.length ? (
          activity.map((activity) => {
            return (
            <>
              <div className="routine-activity" key={activity.id}>
                <div>Name: {activity.name} </div>
                <div>Description: {activity.description} </div>
                <div>Count: {activity.count} </div>
                <div>Duration: {activity.duration} </div>
                <br></br>
              </div>
              {update ? (
          <form onSubmit={handleSubmit} id={routine.id}>
            <h3>Edit your activity!</h3>
            <input
              name="count"
              type="text"
              value={newCount}
              placeholder="count"
              onChange={(e) => {
                setNewCount(e.target.value);
              }}
            ></input>
            <input
              name="name"
              type="text"
              value={newDuration}
              placeholder="duration"
              onChange={(e) => {
                setNewDuration(e.target.value);
              }}
            ></input>

            <button
              type="button"
              className="myroutines-button"
              onClick={() => {
                setUpdate(false);
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
        )}</>
          
          
          )})
        ) : (
          <div>Loading Activities</div>
        )}
      </div>
    </div>
  );
};

export default MyRoutineActivity;
