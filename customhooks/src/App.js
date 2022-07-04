import "./App.css";
// import LoginForm from "./components/loginForm/LoginForm.jsx";
import React, { useState } from "react";


function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      email: "taebah@gmail.com",
      password: "12345"
    },
    {
      email: "saja@gmail.com",
      password: "12345"
    },
    {
      email: "hadi@gmail.com",
      password: "12345"
    },
    {
      email: "Ibrahim@gmail.com",
      password: "12345"
    }
  ];

  const errors = {
    uemail: "invalid email",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uemail, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.email === uemail.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // email not found
      setErrorMessages({ name: "email", message: errors.uemail });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (

 <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email" name="uemail" required />
          {renderErrorMessage("uemail")}
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="d-grid gap-2 mt-3">
          <input type="submit" className="btn btn-dark"/>
        </div>
      </div>
    </form>
  </div>
  );

  return (
    
    <div className="app">
      
      <div className="login-form">
        {isSubmitted ? <div className="Auth-form-container "> <h1> User is successfully logged in</h1></div> : renderForm}
      </div>
    </div>
  );
}

export default App;

