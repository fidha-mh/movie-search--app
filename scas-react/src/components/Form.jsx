import React from 'react'

const Form = () => {
  return (
    <div>
        <h1>Form</h1>
        <form>
            <label>Username</label>&nbsp;&nbsp;
            <input type="text" placeholder='Username'/>&nbsp;&nbsp;
            <label>Password</label>&nbsp;&nbsp;
            <input type="password" placeholder='Enter your password' />&nbsp;&nbsp;
            <button type='submit'>Login</button>&nbsp;&nbsp;
        </form>
        </div>
  )
}

export default Form