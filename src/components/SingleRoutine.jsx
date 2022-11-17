import React, { useState, useEffect } from "react";
import { editRoutine, deleteRoutine } from "../api-adapter";

const SingleRoutine = (props) => {
  const routine = props.routine;
//   console.log(routine);

  const [newName, setNewName] = useState(routine.name);
  const [newGoal, setNewGoal] = useState(routine.goal);
  const [newIsPublic, setNewIsPublic] = useState(routine.isPublic);
const [update, setUpdate] = useState(false)
  //   async function handleChange(e) {
  //     e.preventDefault();
  //     const toEdit = e.target.id;
  //     console.log(toEdit)
  //     const edit = e.target.value;
  //     const editedForm = await editRoutine(newName, newGoal, newIsPublic);
  //     setEdit(editedForm);
async function handleSubmit(e) {
e.preventDefault()
const toUpdate = e.target.id
//call your update function
/*
update object 
const updated = update(toUpdate, {name: newName, 
description: newDescription, 
isPublic: newIsPublic})

in the fetch thing
function definition(id, update){
body: JSON.stringify(update)
}
*/
}
  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    console.log(toDelete)
    const token = localStorage.getItem("token");
    
    const deleted = await deleteRoutine(toDelete, token);
    console.log(deleted, "deleted!");
  }
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
        {update ? <form onSubmit={handleSubmit} id={routine.id}>
        <h3>update some things</h3>
        <input
        name="name"
        type='text'
        value={newName}
        onChange={(e)=>{
            setNewName(e.target.value)
        }}></input>

        <button
        type='button'
          className="myroutines-button"
          onClick={() => {
            setUpdate(false)
          }}
        >
          Stop Edit
        </button>
        <button
        type='submit'
          className="myroutines-button"
        >
          Update Routine
        </button></form>
         :
        <button
          className="myroutines-button"
          type="submit"
          onClick={() => {
            setUpdate(true)
          }}
        >
          Edit
        </button>
}
        <button
          className="myroutines-button"
          type="submit" id={routine.id ? `${routine.id}`: null}
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
