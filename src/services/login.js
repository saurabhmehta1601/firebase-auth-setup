import { firebase } from "../lib/firebase";

export const loginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      console.log(userCredentials);
    })
    .catch((err) => {
      console.log(`user can't be logged in `, err);
    });
};
