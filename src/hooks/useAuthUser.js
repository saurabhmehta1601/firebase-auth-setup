import {useEffect,useState} from 'react'
import {firebase } from '../lib/firebase'

export const useAuthUser = () =>{
    
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

  return activeUser
}