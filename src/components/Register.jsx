import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
// import { toast } from "react-toastify";
import { toast } from "sonner";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (firstName.length && lastName.length > 0) {
        if (user) {
          await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            firstName: firstName,
            lastName: lastName,
          });
        }
        console.log("User Registered Successfully!!");
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
      } else {
        setErrors(
          toast.error(["Name is Required!"], {
            position: "top-center",
          })
        );
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };
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
      <button type="submit" className="submit-btn">
        Sign Up
      </button>
      <p className="forgot-password">
        Already Registered? <a href="/login">Login</a>
      </p>
    </form>
  );
}

export default Register;
