import {firebase} from "../lib/firebase"

export const logout =() =>{
    firebase.auth().signOut().then(() =>console.log("signed out successfully ")).catch(err=> console.log(`can't logout user `,err))
}