import { auth } from "../lib/firebase";

  function SignUpUser (email, password) {
  let userInfo=''
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('user credentials are ',userCredential);
      userInfo =userCredential
    });
    return userInfo
};

export {SignUpUser}
