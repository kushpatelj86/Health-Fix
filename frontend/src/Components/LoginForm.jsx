import { useState } from 'react'
import React from 'react'
import "./Styles/LoginForm.css"

export function LoginForm({onSubmit,handleHasAccount, handleIsLoggedIn}){

    

    return (
        <div>
            <form onSubmit={onSubmit} id='login-form'>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/><br/><br/>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password"/><br/><br/>
                <br />
                <br />
                <button onClick={() => handleIsLoggedIn(true) } type="submit">Log In</button>
                <div id='registration-link'>
                    <p>Don't have an account register here </p>
                    <button onClick={() => handleHasAccount(false) } type="submit">Register Here</button>
                </div>
            </form>
        </div>

    );
}

