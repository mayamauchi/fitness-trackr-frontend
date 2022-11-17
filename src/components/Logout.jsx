import React, {useState} from 'react';

const Logout = () => {
    
    const user = useState("")
    async function handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        console.log(user, 'user')
        setIsLoggedIn(false)
    }

    return (
        <div>
            <form onSubmit={handleLogout}>
                <button id="logoutBtn" type='submit'>
                    Logout
                </button>
            </form>
        </div>
    );
};
export default Logout;