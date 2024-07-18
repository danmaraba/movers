import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <form>
      <h3>Sign Up</h3>
      <div className="login-email">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="login-password">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="login-email">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="login-password">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="login-submit-button">
        <button type="submit">Sign Up</button>
      </div>
      <p className="forgot-password">
        Already Registered? <a href="">Login</a>
      </p>
    </form>
  );
}

export default Register;
