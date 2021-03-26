import { useState } from 'react'
import {auth} from '../lib/firebase'

export const useCurrentUser = async () =>{
    const [activeUser,setActiveUser]= useState({})

    auth.onAuthStateChanged(user => setActiveUser(user))

    return activeUser
}