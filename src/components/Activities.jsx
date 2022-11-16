import React, { useEffect, useState } from "react";
import { getActivities } from "../api-adapter";
import { SingleActivity, CreateActivity } from "./";


const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    async function allActivities() {
      const activitiesList = await getActivities();
      setActivities(activitiesList);
    }
    allActivities();
  }, []);


  return (
    <div className="activities-container">
        <CreateActivity activities={activities} setActivities={setActivities}/>
      <h2>Activities</h2>
      <div id="activitiesList">
        {activities && activities.length ? (
          activities.map((activity) => {
            return (
              <SingleActivity activity={activity} key={`activity-${activity.id}`}/>
              
            );
          })
        ) : (
          <div>Loading Activities</div>
        )}
      </div>
    </div>
  );
};

export default Activities;
