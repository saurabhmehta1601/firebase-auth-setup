import React, { useEffect, useState } from "react";
import { logout } from "../services/logout";
import {firebase} from '../lib/firebase'

const Home = () => {

  const [activeUser,setActiveUser] = useState() ; 

  useEffect(()=>{
    const setUser=  ()=>{

      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          setActiveUser(user)
        }else{
          setActiveUser(null)
        }
      })
    }
    setUser()
  },[activeUser])

  console.log('current user is ',firebase.auth().currentUser)

  console.log(activeUser)

  return (
    <div >
      {!activeUser && <>
      <button>Log In</button>
      <button className="button-primary" type="button" value="button input">
        Sign up
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
