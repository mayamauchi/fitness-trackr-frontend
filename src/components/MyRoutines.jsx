import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SingleRoutine } from "./";

import {
  editRoutine,
  deleteRoutine,
  createRoutine,
  getUserRoutines,
} from "../api-adapter";

const MyRoutines = (props) => {
  const routine = props.routine;
//   console.log(routine);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [routines, setRoutines] = useState([]);
  const [isPublic, setisPublic] = useState(false);

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const newRoutine = await createRoutine(name, goal, isPublic, token);

    setGoal("");
    setName("");

    navigate("/MyRoutines");
  }

  useEffect(() => {
    async function allRoutines() {
        const token = localStorage.getItem("token")
        const username = localStorage.getItem("username")

      const routinesList = await getUserRoutines(username, token);
      setRoutines(routinesList);
    }
    allRoutines();
  }, []);

  // function handleChange(e) {
  //     e.preventDefault();
  //     const toEdit = e.target.id;
  //     const edit = e.target.value;
  //     const editedForm = {...formDetails,[toEdit]: edit};
  // }

  // async function handleDelete(e) {
  //     e.preventDefault();
  //     const toDelete = e.target.id;
  //     const token = localStorage.getItem("token");
  //     const deleted = await deleteRoutine(toDelete, token);

  // }
  //need to import getUserRoutines from api

  return (
    <div className="myroutines-container">
      <h2>Create New Routine</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Activity Name"
        />
        <input
          type="text"
          name="goal"
          placeholder="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          label="Activity Description"
        />
        <button className="myroutines-button" type="submit">
          Create
        </button>
        <button className="myroutines-button" type="submit">
          Edit
        </button>
        <button className="myroutines-button" type="submit">
          Delete
        </button>
      </form>

      <div className="myRoutines">
        <div>My Routines</div>
        <div>
          {routines.length ? (
            routines.map((routine) => {
              return (
                <SingleRoutine
                  routine={routine}
                  key={`routine-${routine.id}`}
                />
              );
            })
          ) : (
            <div>Loading Routines</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyRoutines;
