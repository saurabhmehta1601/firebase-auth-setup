import React, { useEffect, useState } from "react";
import {useCurrentUser} from '../hooks/useCurrentUser'
import { logout } from "../services/logout";

const Home = () => {

    const user=useCurrentUser();
    console.log(user)

    
  return (
    <div >
      <button>Log In</button>
      <button className="button-primary" type="button" value="button input">
        Sign up
      </button>
      <h1>Current logged in user is </h1>
    {user && 
    <button className="button-primary" onClick={logout} type="button" value="button input">
    Logout
  </button> }
        </div>
  );
};

export default Home;
