import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister=(e)=>{
    e.preventDefault()
  }
  return (
    <form className="form-container" onSubmit={handleRegister}>
      <h3 className="text">Sign Up</h3>
      <div className="input">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="input">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="input">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        <button type="submit" className="submit-btn">Sign Up</button>
      <p className="forgot-password">
        Already Registered? <a href="/login">Login</a>
      </p>
    </form>
  );
}

export default Register;
