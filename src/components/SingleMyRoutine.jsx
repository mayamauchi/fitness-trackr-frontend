import React, { useState, useEffect } from "react";
import {
  editRoutine,
  deleteRoutine,
  getActivities,
} from "../api-adapter";

const SingleMyRoutine = (props) => {
  const routine = props.routine;
  const activity = props.routine.activities;

  const [newName, setNewName] = useState(routine.name);
  const [newGoal, setNewGoal] = useState(routine.goal);
  const [isPublic, setIsPublic] = useState(routine.isPublic);
  const [update, setUpdate] = useState(false);
  const [newActivityId, setNewActivityId] = useState(null);
  const [duration, setDuration] = useState(0);
  const [count, setCount] = useState(0);
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [updateActivity, setUpdateActivity] = useState(false);

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
);
  }

  //Add activity to routine
  async function addActivityHandle(e) {
    e.preventDefault();

    const newActivity = await addActivityToRoutine(routine.id, {
      activityId: newActivityId,
      count: count,
      duration: duration,
    });
  }

  //Delete Routine
  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    console.log(toDelete);
    const token = localStorage.getItem("token");

    const deleted = await deleteRoutine(toDelete, token);
  }

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
    </>
  );
};

export default SingleMyRoutine;
