import {auth} from '../lib/firebase'

export const loginUser = (email,password) =>{
    auth.createUserWithEmailAndPassword(email, password).then( userCredentials =>{
        console.log(userCredentials)
    })
}