import React, { useEffect, useState } from "react";
import { getActivities } from "../api-adapter";
import { SingleActivity } from "./";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    async function allActivities() {
      const activitiesList = await getActivities();
      setActivities(activitiesList);
    }
    allActivities();
  }, []);
  console.log(activities);

  return (
    <div className="activities">
      <h2>Hello World</h2>
      <div>
        {activities.length ? (
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
