import React from "react";

const SingleActivity = (props) => {
    const activity = props.activity;

    return(
        <div className="single-activity">
            <div>{activity.id} </div>
            <div>{activity.description} </div>
            <div>{activity.name} </div>
        </div>

    )
}

export default SingleActivity;