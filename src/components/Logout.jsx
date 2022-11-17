import React from 'react';

const Logout = (props) => {
    async function clearUser(event) {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        
    }

    return (
        <div>
            <form onSubmit={clearUser}>
                <button id="logoutBtn" type='submit'>
                    Logout
                </button>
            </form>
        </div>
    );
};
export default Logout;