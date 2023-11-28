import { useState } from 'react';
import './style.css';
import axios from 'axios';

export default function Signup() {

  let [users, setUsers] = useState({
    username: '',
    email: '',
    password: ''
  });

  let handleChange = (e) => {
    let value = e.target.value;

    setUsers({
      ...users,
      [e.target.name]: value
    });
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users)

    await axios.post("https://32paa5ucoc.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/", users)
      .then(response => {
        console.log(response)
      })
  }

  return (
    <div className='component-signup'>
      <div className="signupBox">
        <h3>Create Account</h3>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <br />
          <input type="text" name='username' value={users.username} onChange={handleChange} required />
          <br />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input type="email" name='email' value={users.email} onChange={handleChange} required />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="password" name='password' value={users.password} onChange={handleChange} required />
          <br />
          <br />
          <button type='submit'>Register</button>
          <br />
          <br />
          <center>
            <a href='/Register'>Already have Account?</a>
          </center>

        </form>

      </div>
    </div>
  )
}
