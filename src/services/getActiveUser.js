import {auth} from '../lib/firebase'

export const getActiveUser =  () =>{
    const user= auth.currentUser
    return user
}