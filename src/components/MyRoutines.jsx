import React from 'react'

const myRoutines = () => {


//need to import getUserRoutines from api






    return (
        <div className="myroutines-container">
            <h2>Create New Routine</h2>
            <form>
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="goal" placeholder="goal"/>
                
                <button className="myroutines-button" type="submit">Delete</button>

            </form>
        </div>

    )
    

}

export default myRoutines;