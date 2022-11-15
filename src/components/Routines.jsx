import React, { useEffect, useState } from "react";
import { getRoutines } from "../api-adapter";

const Routines = () => {
  const [routines, setRoutines] = useState({});
  useEffect(() => {
    async function allRoutines() {
      const routinesList = await getRoutines();
    }
    allRoutines();
  }, []);
  return (
    <div className="Routines">
      {routines.routinesList ? (
        routines.routinesList.map((routinesList) => {
          return <div>Routines</div>;
        })
      ) : (
        <div>Loading Routines</div>
      )}
    </div>
  );
};

export default Routines;
