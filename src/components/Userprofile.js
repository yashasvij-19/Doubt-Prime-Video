import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import "../styles/Userprofile.css";

const Userprofile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    paymentDetails: "",
    phone: "",
    profileImage: null,
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState("");
  const [isEditingPass, setIsEditingPass] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [newPhone, setNewPhone] = useState("");
  const [isEditingPay, setIsEditingPay] = useState(false);
  const [newPay, setNewPay] = useState("");
  const [isEditingAd, setIsEditingAd] = useState(false);
  const [newAd, setNewAd] = useState("");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [newProfile, setNewProfile] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("Yashasvi");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData.data.user);
    } else {
      console.log("User data not found in localStorage");
    }
  }, []);
  const projectId = "f104bi07c490";

  const headers = {
    projectId: projectId,
  };

  const updateUser = (updatedData) => {
    const userDataString = localStorage.getItem("Yashasvi");
    let userData = userDataString
      ? JSON.parse(userDataString)
      : { data: { user: {} } };

    userData.data.user = {
      ...userData.data.user,
      ...updatedData,
    };

    if (newName) {
      localStorage.setItem(newName, JSON.stringify(userData));
      setUserData(userData.data.user);
    } else {
      localStorage.setItem(userData.name, JSON.stringify(userData));
      setUserData(userData.data.user);
    }
  };

  const handleNameChange = () => {
    updateUser({ name: newName });
    setIsEditingName(false);
  };

  const handlePhoneChange = () => {
    updateUser({ phone: newPhone });
    setIsEditingPhone(false);
  };

  const handleAdChange = () => {
    updateUser({ address: newAd });
    setIsEditingAd(false);
  };
  const apiUrl =
    "https://academics.newtonschool.co/api/v1/user/updateMyPassword";
  const handlePassChange = async () => {
    updateUser({ password: newPass });
    setIsEditingPass(false);
    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: headers,
        body: {
          name: userData.name,
          email: userData.email,
          passwordCurrent: "12345",
          password: newPass,
          appType: "ott",
        },
      });

      if (response.ok) {
        console.log("Password updated successfully");
      } else {
        const errorData = await response.json();
        console.error("Password update failed:", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handlePayChange = () => {
    updateUser({ paymentDetails: newPay });
    setIsEditingPay(false);
  };

  const handleProfileChange = () => {
    updateUser({ profileImage: newProfile });
    setIsEditingProfile(false);
  };

  return (
    <div>
      <Navbar />
      <div className="middleBox">
        <div className="middleBox-heading">
          <h1>Account & Settings</h1>
        </div>
        <div className="middleBox-box">
          <div className="box-first">
            {isEditingProfile ? (
              <>
                <p>Profile Picture Not Added</p>
                <input
                  type="file"
                  onChange={(e) => setNewProfile(e.target.value)}
                />
                <p className="clickP" onClick={handleProfileChange}>
                  Change Profile Picture
                </p>
              </>
            ) : (
              <>
                <img src={userData.profileImage} alt="Profile Picture" />
                <p className="clickP" onClick={() => setIsEditingProfile(true)}>
                  Change Profile Picture
                </p>
              </>
            )}
          </div>
          <div className="box">
            {isEditingName ? (
              <>
                <input
                  type="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <button onClick={handleNameChange}>Change</button>
              </>
            ) : (
              <>
                <p className="editname">Name: {userData.name}</p>
                <p className="clickP" onClick={() => setIsEditingName(true)}>
                  Change Name
                </p>
              </>
            )}
          </div>
          <div className="box">
            <p>Email: {userData.email}</p>
            <p>Once registered, you cannot change your e-mail</p>
          </div>
          <div className="box">
            {isEditingPass ? (
              <>
                <input
                  type="password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                />
                <button onClick={handlePassChange}>Change</button>
              </>
            ) : (
              <>
                <p>Password: ********</p>
                <p className="clickP" onClick={() => setIsEditingPass(true)}>
                  Change Password
                </p>
              </>
            )}
          </div>
          <div className="box">
            {isEditingAd ? (
              <>
                <textarea
                  value={newAd}
                  onChange={(e) => setNewAd(e.target.value)}
                />
                <button onClick={handleAdChange}>Change</button>
              </>
            ) : (
              <>
                <p>Address: {userData.address}</p>
                <p className="clickP" onClick={() => setIsEditingAd(true)}>
                  Change Address
                </p>
              </>
            )}
          </div>
          <div className="box">
            {isEditingPhone ? (
              <>
                <input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                />
                <button onClick={handlePhoneChange}>Change</button>
              </>
            ) : (
              <>
                <p>Phone Number: {userData.phone}</p>
                <p className="clickP" onClick={() => setIsEditingPhone(true)}>
                  Change phone number
                </p>
              </>
            )}
          </div>
          <div className="box">
            {isEditingPay ? (
              <>
                <textarea
                  value={newPay}
                  onChange={(e) => setNewPay(e.target.value)}
                />
                <button onClick={handlePayChange}>Change</button>
              </>
            ) : (
              <>
                <p>Payment Details: {userData.paymentDetails}</p>
                <p className="clickP" onClick={() => setIsEditingPay(true)}>
                  Change payment details
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <footer className="foot">
        <div className="foot-first">
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

export default Userprofile;
