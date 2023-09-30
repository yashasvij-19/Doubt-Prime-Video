import React, { useState } from "react";
import "../styles/Login.css";
import Button from "@mui/material/Button";

const Login = () => {
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
      console.error("Passwords do not match");
      return;
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
        console.log("Registration success", data);
        localStorage.setItem(name, JSON.stringify(data));
      } else {
        const errorData = await response.json();
        console.error("Registration failed", errorData);
      }
    } catch (error) {
      console.error("Registration failed", error);
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
      <div className="theBoxLog">
        <h3>Sign in</h3>
        <label for="emailInput">Email or mobile phone number</label>
        <br />
        <input
          type="email"
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
      </div>
      <footer className="footer">
        <div className="logo-image"></div>
        <div className="foot">
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
        </div>
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default Login;
