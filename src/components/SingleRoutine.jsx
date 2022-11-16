import React, { useState, useEffect } from "react";
import { editRoutine, deleteRoutine } from "../api-adapter";

const SingleRoutine = (props) => {
  const routine = props.routine;
  console.log(routine);

  const [newName, setNewName] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [newIsPublic, setNewIsPublic] = useState("");

  //   async function handleChange(e) {
  //     e.preventDefault();
  //     const toEdit = e.target.id;
  //     console.log(toEdit)
  //     const edit = e.target.value;
  //     const editedForm = await editRoutine(newName, newGoal, newIsPublic);
  //     setEdit(editedForm);

  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.routine;
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
        <button
          className="myroutines-button"
          type="submit"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          Edit
        </button>

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
