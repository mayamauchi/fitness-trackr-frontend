import React, { useState, useEffect } from "react";
import { editRoutine, deleteRoutine, getActivities } from "../api-adapter";



const SingleRoutine = (props) => {
  const routine = props.routine;

  const activity = props.routine.activities;
  console.log(activity)

  const [newName, setNewName] = useState(routine.name);
  const [newGoal, setNewGoal] = useState(routine.goal);
  const [newIsPublic, setNewIsPublic] = useState(routine.isPublic);
  const [update, setUpdate] = useState(false);
  const [activityId, setActivityId] = useState(activity.id);
  const [duration, setDuration] = useState(activity.duration);
  const [count, setCount] = useState(activity.count);
  const [addActivity, setAddActivity] = useState("");
  const [activities, setActivities] = useState([])
  const [filteredActivities, setFilteredActivities] = useState([])

//All activities
useEffect(() => {
    async function allActivities() {
      const activitiesList = await getActivities();
        const activitiesId = routine.activities.map((element) => {
            console.log(element)
        })

        const newActivitiesList = activitiesList.filter((element) => {
            if (
                activitiesId.includes(element.id)
            ) {
                return false;
            } else {    
                return true;
            }
        })

      setActivities(activitiesList);
      setFilteredActivities(newActivitiesList)
    }
    allActivities();
  }, []);


//Edit Routine
  async function handleSubmit(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    const token = localStorage.getItem("token");
    const updated = await editRoutine(toUpdate, token, {
      name: newName,
      goal: newGoal,
      isPublic: newIsPublic,
    });
  }

  async function addActivityHandle(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const newActivity = await addActivityToRoutine(activityId, count, duration);
  }

  const handleChange = (e) => {
    if (e.target.check) {
      console.log("checked");
      setNewIsPublic(); // remove username? or pass in createRoutine route?
    }
  };

//Delete Routine
  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    console.log(toDelete);
    const token = localStorage.getItem("token");

    const deleted = await deleteRoutine(toDelete, token);
  }

  //   function refreshPage(){
  //     window.location.reload();
  // }
  return (
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
              name="isPublic"
              type="checkbox"
              value={newIsPublic}
              onChange={handleChange}
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
            
            <h3>Update your activity!</h3>

            <form
              onChange={(e) => {
                const selectedActivity = e.target.value;
                setAddActivity(selectedActivity);
              }}
            >
              <select className="myroutines-activity-form">
               
                {filteredActivities && filteredActivities.length ? 
                filteredActivities.map((element) => {
                    
                    return                  <option value={element.id}>{element.name}</option>

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
                  placeholder= "duration"
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                ></input>
              </>
            </form>
          
        <div>


          {routine.activities.length ? (
            routine.activities.map((activity) => {
              return (
                <div className="routine-activity">
                <div>Id: {activity.id} </div>
                <div>Name: {activity.name} </div>
                <div>Description: {activity.description} </div>
                <br></br>
                </div>
              );
            })
          ) : (
            <div>Loading Activities</div>
          )}
        </div>
        

        {/*take out br when working on CSS*/}
    </div>
  );
};

export default SingleRoutine;
