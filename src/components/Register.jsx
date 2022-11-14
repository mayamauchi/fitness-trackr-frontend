import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";


const Register = () => {

    const [inputs, setInputs ]= useState({
        username: "",
        password:""
    });

    const {username, password } = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.username]: e.target.value});
    }

    const onSubmitForm = async(e) => {
        e.preventDefault()
    }

    try {
        const body = {username, password}

        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(body),
        });

        const parseRes = await response.json();

        localStorage.setItem("token,", parseRes.token);

        setAuth(true);
    } catch (err) {
        console.error(err.message)
    }
    return (
        <Fragment>
            <h1 className="register-header">Register</h1>
            <form onSubmit={onSubmitForm}>
                <input
                type="text"
                name= "username"
                placeholder="username"
                value={username}
                onChange={e => onChange(e)}
                />
                <input
                type="password"
                name= "password"
                placeholder="password"
                value={password}
                onChange={e => onChange(e)}
                />
                <button className="register-button">Submit</button>
            </form>
            <Link to="/login">Login</Link>
        </Fragment>
        );

};

export default Register;