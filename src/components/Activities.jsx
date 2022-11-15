import React, { useEffect, useState } from 'react'
import { getActivities } from "../api-adapter";

const Activities = () => {
    const [activities, setActivities] = useState({});
  useEffect(() => {
    async function allActivities() {
      const activitiesList = await getActivities();
    }
    allActivities();
  }, []);
  return (
    <div className="Activities">
      {activities.activitiesList ? (
        activities.activitiesList.map((activitiesList) => {
          return <div>Activities</div>;
        })
      ) : (
        <div>Loading Activities</div>
      )}
    </div>
  );

}

export default Activities;