import React, { useState, useEffect } from "react";
import { editRoutine, deleteRoutine,  } from "../api-adapter";

const SingleRoutine = (props) => {
  const routine = props.routine;
  const activity = props.routine.activities

  const [newName, setNewName] = useState(routine.name);
  const [newGoal, setNewGoal] = useState(routine.goal);
  const [newIsPublic, setNewIsPublic] = useState(routine.isPublic);
  const [update, setUpdate] = useState(false);
  const [activityId, setActivityId] = useState("")
  const [duration, setDuration] = useState("")
  const [count, setCount] = useState("")
  const [addActivity, setAddActivity] = useState("")

  



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

const handleChange=(e) => {
    if (e.target.check) {
        console.log("checked")
        setNewIsPublic() // remove username? or pass in createRoutine route?
    }
}

  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    console.log(toDelete);
    const token = localStorage.getItem("token");

    const deleted = await deleteRoutine(toDelete, token);
    console.log(deleted, "deleted!");
  }

//   function refreshPage(){ 
//     window.location.reload(); 
// }
  
  return (
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
              );
            })
          ) : (
            <div>Loading Activities</div>
          )}
        </div>
        {update ? (
          <form onSubmit={handleSubmit} id={routine.id}>
            <h3>Update your routine!</h3>
            <input
              name="name"
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            ></input>
            <input
              name="name"
              type="text"
              value={newGoal}
              onChange={(e) => {
                setNewGoal(e.target.value);
              }}
            ></input>
            <label className="isPublic">Make this public?</label>
            <input
              name="isPublic"
              type="checkbox"
              value={newIsPublic}
              onChange={handleChange
              }
            ></input>

            <button
              type="button"
              className="myroutines-button"
              onClick={() => {
                setUpdate(false);
                refreshPage 
              }}
            >
              Undo
            </button>
            <button type="submit" className="myroutines-button">
              Update Routine
            </button>

            <form onChange={(e) => {
            const selectedActivity = e.target.value;
            setAddActivity(selectedActivity)
            }}>Activity Form
          <select className="myroutines-activity-form">
            <option value="rock-climbing">Rock Climbing</option>
            <option value="gym">Gym</option>
            <option value="hiking">Hiking</option>
            <option value="cycling">Cycling</option>
            <option value="swimming">Swimming</option>

          </select>
            {addActivity}
            <>
            <input
              name="name"
              type="text"
              value={count}
              onChange={(e) => {
                setCount(e.target.value);
              }}
            ></input>
            </>
            
        </form>
            
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
        

        {/*take out br when working on CSS*/}
        
      </div>
    </div>
  );
  
};

export default SingleRoutine;
