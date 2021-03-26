import {auth} from "../lib/firebase"

export const logout =() =>{
    auth.signOut().then(() =>console.log("signed out successfully "))
}