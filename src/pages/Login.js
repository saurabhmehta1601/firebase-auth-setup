import React from 'react'

const Login = () => {
    return (
        <div className="container">
      <div class="four columns">
      <label for="exampleEmailInput">Your email</label>
      <input class="u-full-width" type="email" placeholder="Enter email" id="exampleEmailInput" />
        </div>
        <div class="four columns">
      <label for="exampleEmailInput">Your email</label>
      <input class="u-full-width" type="email" placeholder="Enter password" id="exampleEmailInput" />
        </div>
        <button className="six columns mt-4 button-primary">Login</button>
        </div>
    )
}

export default Login
