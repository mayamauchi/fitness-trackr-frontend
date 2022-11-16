import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { editRoutine, deleteRoutine, createRoutine } from "../api-adapter";

const myRoutines = () => {
const [name, setName] = useState("");
const [goal, setGoal] = useState("");
async function handleSubmit(e) {
    e.preventDefault();
    const {token} = await createRoutine(name, goal);
    console.log("created new routine");

    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    setGoal("")
    setName("")

}

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

async function handleSubmit(e) {
    console.log(routine.id)

    e.preventDefault();
    const editedRoutine = await editRoutine(
        formDetails,
        routines.routine.id,
        
        localStorage.getItem("token")
        
    );
}
//need to import getUserRoutines from api






    return (
        <div className="myroutines-container">
            <h2>Create New Routine</h2>
            <form>
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="goal" placeholder="goal"/>
                <button className="myroutines-button" type="submit">Create</button>
                <button className="myroutines-button" type="submit">Edit</button>
                <button className="myroutines-button" type="submit">Delete</button>

            </form>
        </div>

    )
    

}

export default myRoutines;