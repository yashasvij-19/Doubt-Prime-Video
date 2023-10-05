import React, { useState } from "react";
import "../styles/Register.css";
import Button from "@mui/material/Button";

const Register = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { name, email, password, rePassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setError("Passwords do not match");
    }

    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectId: "f104bi07c490",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            appType: "ott",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(name, JSON.stringify(data));
      } else {
        const errorData = await response.json();
        setError(errorData.message);
        console.error("Registration failed", errorData);
      }
    } catch (error) {
      console.error("Registration failed", error);
      setError(error.message);
    }
  };
  return (
    <div className="login">
      <div className="theLogo">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="prime-video-logo"
        />
      </div>
      <div className="theBox">
        <span className="theBoxerror">{error}</span>
        <h3>Create account</h3>
        <label htmlFor="theName">Your name</label>
        <br />
        <input
          type="text"
          className="theName"
          placeholder="First and last name"
          name="name"
          value={name}
          onChange={handleChange}
          onFocus={() => setError("")}
        />
        <label for="emailInput">Enter your email address</label>
        <br />
        <input
          type="text"
          className="emailInput"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label for="pass">Password</label>
        <br />
        <input
          type="password"
          className="pass"
          placeholder="At least 6 characters"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <label for="passRe">Re-enter password</label>
        <br />
        <input
          type="password"
          className="passRe"
          name="rePassword"
          value={rePassword}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" onClick={handleSubmit}>
          Continue
        </Button>
        <p>
          By continuing, you agree to the Amazon{" "}
          <a
            href="https://www.primevideo.com/help/ref=av_auth_te?nodeId=202064890"
            target="_blank"
            id="condition"
          >
            Conditions of Use and Privacy Notice.
          </a>
        </p>
        <p>Already have an account? Sign In</p>
      </div>
      <div className="theFoot">
        <a
          href="https://www.primevideo.com/help/ref=av_auth_ter?nodeId=202064890"
          target="_blank"
        >
          Terms and Privacy Notice
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="./Login.js" target="_blank">
          Send us feedback
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          href="https://www.primevideo.com/help/ref=av_auth_hp"
          target="_blank"
        >
          Help
        </a>
        <br />
        <br />
        <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
};

export default Register;
