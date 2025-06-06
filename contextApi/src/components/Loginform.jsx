import React, { use, useContext } from 'react';
import Button from './Button';
import { useState } from 'react';
import UserContext  from '../context/UserContext';
export default function LoginForm() {

    const {setUser}=useContext(UserContext);
    const [first,setfirst]=useState("");
    const [last,setlast]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(`${first} ${last}`);
    };
    return (
        <form className="login-form">
        <div className="form-group">
            <label htmlFor="username">First Name</label>
            <input type="text" id="username" name="username" value={first} onChange={(e)=>setfirst(e.target.value)} required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Last Name</label>
            <input type="password" id="password" value={last} name="password" onChange={(e)=>setlast(e.target.value)} required />
        </div>
        <Button  onclick={handleSubmit}>LogIn</Button>
        </form>
    );
    }