import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../api-adapter";
import { toast } from "react-toastify";

const CreateActivity = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const newActivity = await createActivity(
      {
        name,
        description,
      },
      localStorage.getItem("token")
    );
    props.setActivities([newActivity, ...props.activities]);
    setName("");
    setDescription("");
    console.log(newActivity, "new")
    
    if (newActivity.name === "NotFound") {
        toast.error("Activity Already Exists");
      } else {
        toast.success("Activity Added");
      }
    navigate("/Activities");
  }

  return (
    <div>
      Create Activity
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Activity Name"
        />
        <input
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Activity Description"
        />
        <button type="submit">Submit Activity</button>
      </form>
    </div>
  );
};

export default CreateActivity;
