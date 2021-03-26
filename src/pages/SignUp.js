import React, {   useState } from 'react'
import { SignUpUser } from '../services/signup'
import {useHistory} from 'react-router-dom'

const SignUp = () => {
    const [email,setEmail] = useState('')
    const  [password,setPassword] = useState('')

    const history = useHistory()

    const handleSubmit =  (e)=>{
        e.preventDefault()
        SignUpUser(email,password)
        history.push('/')
    }

    return (
        <div className="container">
      <div className="four columns">
      <label for="email">Your email</label>
      <input className="u-full-width" type="email" placeholder="Enter email" id="email" onChange={ (e) =>setEmail(e.target.value)} />
        </div>
        <div className="four columns">
      <label for="password">Your password</label>
      <input className="u-full-width" type="email" placeholder="Enter password" id="password" onChange={ (e) =>setPassword(e.target.value)} />
        </div>

        <button type="submit" className="six columns mt-4 button-primary" onClick={handleSubmit}>Sign Up</button>
        </div>
    )
}

export default SignUp
