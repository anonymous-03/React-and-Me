import React, { useContext } from 'react';
import  UserContext  from '../context/UserContext';
export default function Greeting () {
    const {user}= useContext(UserContext);
    return (
        <div className="greeting">
            <h1>Welcome {user} to the Context API Example</h1>
            <p>This example demonstrates how to use the Context API in React.</p>
        </div>
    );
}