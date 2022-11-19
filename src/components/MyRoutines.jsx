import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SingleMyRoutine, MyRoutineActivity, EditMyRoutineActivity } from "./";

import {
  editRoutine,
  deleteRoutine,
  createRoutine,
  getUserRoutines,
  addActivityToRoutine,
  
} from "../api-adapter";

const MyRoutines = (props) => {
  const routine = props.routine;
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [routines, setRoutines] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  
  
 

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
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");

      const routinesList = await getUserRoutines(username, token);
      console.log(routinesList)
      setRoutines(routinesList);
    }
    allRoutines();
  }, []);

  

  return (
    <div className="myRoutines-container">
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
      </form>

      <div className="myRoutines">
        <div>
          <h3>My Routines</h3>
        </div>
        <div>
          {routines.length ? (
            routines.map((routine) => {
              return (
                <div key={`routine-${routine.id}`}>
                                  
                <SingleMyRoutine
                  routine={routine}
                  key={`singleRoutine-${routine.id}`}
                />
                <MyRoutineActivity
                routine={routine}
                key={`routineActivity-${routine.id}`}
                ></MyRoutineActivity>
                </div>
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
