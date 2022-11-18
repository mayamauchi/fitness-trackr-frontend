import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createActivity } from "../api-adapter";
import { toast } from "react-toastify"

const CreateActivity = (props) => {

    console.log(props)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const navigate = useNavigate()
    async function handleSubmit(event) {
        event.preventDefault();
        const newActivity = await createActivity({
            name,
            description,
        }, localStorage.getItem('token'));
        props.setActivities([newActivity, ...props.activities])
        setName('')
        setDescription('')


        navigate('/Activities')

    }


    return(
        <div>Create Activity
            <form onSubmit={handleSubmit}>
                <input
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                label='Activity Name'
                />
                <input
                placeholder='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label='Activity Description'
                />
                <button type='submit'>Submit Activity</button>
            </form>
        </div>
    )
}

export default CreateActivity;

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const navigate = useNavigate();
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const newActivity = await createActivity(
//       {
//         name,
//         description,
//       },
//       localStorage.getItem("token")
//     );
//     props.setActivities([newActivity, ...props.activities]);
//     setName("");
//     setDescription("");

    
//     if (newActivity) {
//         toast.success("Activity Added")
        
  
//       } else {
//         toast.error("Activity Already Exists")
        
//       }
//   }

//   return (
//     <div>
//       Create Activity
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           label="Activity Name"
//         />
//         <input
//           placeholder="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           label="Activity Description"
//         />
//         <button type="submit">Submit Activity</button>
//       </form>
//     </div>
//   );
// };

// export default CreateActivity;

