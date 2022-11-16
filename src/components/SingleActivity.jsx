import React from "react";

const SingleActivity = (props) => {
    const activity = props.activity;
    console.log(activity)
    return(
        <div className="single-activity">
            <div>Id: {activity.id} </div>
            <div>Name: {activity.name} </div>
            <div>Description: {activity.description} </div>
            <br></br>
        </div>

    )
}

export default SingleActivity;