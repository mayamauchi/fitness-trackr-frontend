import React, { useState, useEffect } from "react";
import {
  editRoutine,
  deleteRoutine,
//   getActivities,
//   addActivityToRoutine,
} from "../api-adapter";

const SingleRoutine = (props) => {
  const routine = props.routine;
  const activity = props.routine.activities;

  const [newName, setNewName] = useState(routine.name);
  const [newGoal, setNewGoal] = useState(routine.goal);
  const [isPublic, setIsPublic] = useState(routine.isPublic);
  const [update, setUpdate] = useState(false);
//   const [newActivityId, setNewActivityId] = useState(null);
//   const [duration, setDuration] = useState(0);
//   const [count, setCount] = useState(0);
//   const [activities, setActivities] = useState([]);
//   const [filteredActivities, setFilteredActivities] = useState([]);
//   const [updateActivity, setUpdateActivity] = useState(false);

//   //All activities
//   useEffect(() => {
//     async function allActivities() {
//       const activitiesList = await getActivities();
//       const activitiesId = routine.activities.map((element) => {});

//       //Filtering all activities

//       const newActivitiesList = activitiesList.filter((element) => {
//         if (activitiesId.includes(element.id)) {
//           return false;
//         } else {
//           return true;
//         }
//       });

//       setActivities(activitiesList);
//       setFilteredActivities(newActivitiesList);
//     }
//     allActivities();
//   }, []);

  //Edit Routine
  async function handleSubmit(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    const token = localStorage.getItem("token");
    const updated = await editRoutine(toUpdate, token, {
      name: newName,
      goal: newGoal,
      isPublic: isPublic,
    },
    window.location.reload());
  }

//   //Add activity to routine
//   async function addActivityHandle(e) {
//     e.preventDefault();

//     const newActivity = await addActivityToRoutine(routine.id, {
//       activityId: newActivityId,
//       count: count,
//       duration: duration,
//     });
//   }

  const handleChange = (e) => {
    if (e.target.check) {
      console.log("checked");
      setIsPublic(); // remove username? or pass in createRoutine route?
    }
  };

  //Delete Routine
  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    console.log(toDelete);
    const token = localStorage.getItem("token");

    const deleted = await deleteRoutine(toDelete, token);
    window.location.reload()
  }

  //   function refreshPage(){
  //     window.location.reload();
  // }
  return (
    <>
      <div className="single-routine">
        <div>Routine Name: {routine.name} </div>
        <div>Goals: {routine.goal} </div>
        <div> Created By: {routine.creatorName} </div>

        {update ? (
          <form onSubmit={handleSubmit} id={routine.id}>
            <h3>Update your routine!</h3>
            <input
              name="name"
              type="text"
              value={newName}
              placeholder="name"
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            ></input>
            <input
              name="name"
              type="text"
              value={newGoal}
              placeholder="goal"
              onChange={(e) => {
                setNewGoal(e.target.value);
              }}
            ></input>
            <label className="isPublic">Make this public?</label>
            <input
              defaultChecked={isPublic}
              name="isPublic"
              type="checkbox"
              value={isPublic}
              onChange={() => {
                setIsPublic((prev) => {
                  return !prev;
                });
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

      {/* <div className="myroutines-activity-form">
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
      </div> */}

      {/*take out br when working on CSS*/}
    </>
  );
};

export default SingleRoutine;
