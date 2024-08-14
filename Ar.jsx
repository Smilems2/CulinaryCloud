import React from 'react';
import sideImage from './side.png';
import logoImage from './logo.png (3).png';
import "./Ar.css";

export default function Login() {
  return (
    <div>
      <div className="main">    
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="password" required />
          <input type="password" name="pswd" placeholder="confirm Password" required />
          <select name="user" id="user">
            <option value="student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
        </div>

        
        <div className="login">
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <select name="user" id="user">
            <option value="student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          <button>Login</button>
        </div>
      </div>
      <div className="container1">
        <img className="object1" src={logoImage} alt="logo"  />
      </div>
      <div className="container2">
        <img className="object2" src={sideImage} alt="side" />
      </div>
      
    </div>
  );
}