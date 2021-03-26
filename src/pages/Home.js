import React, { useEffect, useState } from "react";
import { logout } from "../services/logout";
import {firebase} from '../lib/firebase'
import { Link } from "react-router-dom";
import {useAuthUser} from '../hooks/useAuthUser'

const Home = () => {

const activeUser = useAuthUser();

  console.log(activeUser)

  return (
    <div >
      {!activeUser && <>
      <button>
        <Link to="/login">
        Log In
        </Link>
        </button>
      <button className="button-primary" type="button" value="button input">
        <Link to='/signup'> Sign up </Link>
      </button>
      </>}
        

    {activeUser && 
    <>
    <h6>Current logged in user is {activeUser?.email} </h6>
    <button className="button-primary" onClick={logout} type="button" value="button input">
    Logout
  </button> 
  </>}
        </div>
  );
};

export default Home;
