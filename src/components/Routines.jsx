import React, { useEffect, useState } from "react";
import { getRoutines } from "../api-adapter";
import { SingleRoutine} from "./"

const Routines = () => {
    const [routines, setRoutines] = useState([]);
    useEffect(() => {
      async function allRoutines() {
        const routinesList = await getRoutines();
        setRoutines(routinesList);
      }
      allRoutines();
    }, []);
    
  
    return (
      <div className="routines">
        <h2>Routines</h2>
        <div>
          {routines.length ? (
            routines.map((routine) => {
              return (
                <>
                <SingleRoutine routine={routine} key={`routine-${routine.id}`}/>
                
                </>
              );
            })
          ) : (
            <div>Loading Routines</div>
          )}
        </div>
      </div>
    );
};

export default Routines;
