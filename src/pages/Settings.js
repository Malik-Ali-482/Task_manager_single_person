import React, { useState } from "react";
import "./Pages.css";

const Settings = ({ theme, setTheme, user, setUser }) => {
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });
  const [emailPreferences, setEmailPreferences] = useState({
    newsletters: true,
    notifications: true,
  });
  const [fontSize, setFontSize] = useState("medium"); // Default font size

  // Handles user registration
  const handleRegister = (e) => {
    e.preventDefault();
    if (registerForm.name && registerForm.email && registerForm.password) {
      setUser(registerForm);
      setRegisterForm({ name: "", email: "", password: "" }); // Clear form
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Deletes user credentials and resets settings
  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      setUser(null); // Clear user
      setEmailPreferences({ newsletters: true, notifications: true }); // Reset email preferences
      setFontSize("medium"); // Reset font size
    }
  };

  // Updates input values for registration form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  // Toggles email preferences
  const toggleEmailPreference = (preference) => {
    setEmailPreferences((prev) => ({
      ...prev,
      [preference]: !prev[preference],
    }));
  };

  // Updates font size
  const updateFontSize = (size) => {
    setFontSize(size);
    document.documentElement.style.fontSize = size === "small" ? "14px" : size === "large" ? "18px" : "16px"; // Adjust font size
  };

  return (
    <div className={`settings-page ${theme}`}>
      {!user ? (
        <div className="register-form">
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
            <div>
              <label>Name:</label>
              <br/>
              <input
                type="text"
                name="name"
                value={registerForm.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <br/>
              <input
                type="email"
                name="email"
                value={registerForm.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <br/>
              <input
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-settings">
              Register
            </button>
          </form>
        </div>
      ) : (
        <div class="setting-background">
          <h1 className="settings-header">Settings</h1>

          <section className="settings-section">
            <h2>User Profile Settings</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </section>

          <section className="settings-section">
            <h2>Email Preferences</h2>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={emailPreferences.newsletters}
                  onChange={() => toggleEmailPreference("newsletters")}
                />
                Enable Newsletters
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={emailPreferences.notifications}
                  onChange={() => toggleEmailPreference("notifications")}
                />
                Enable Notifications
              </label>
            </div>
          </section>

          <section className="settings-section">
            <h2>Theme and Appearance</h2>
            <div className="theme-options">
              <p>Choose Theme:</p>
              <div className="theme-selector">
                <span
                  onClick={() => setTheme("light")}
                  className={theme === "light" ? "light activeTheme" : "light"}
                ></span>
                <span
                  onClick={() => setTheme("medium")}
                  className={theme === "medium" ? "medium activeTheme" : "medium"}
                ></span>
                <span
                  onClick={() => setTheme("dark")}
                  className={theme === "dark" ? "dark activeTheme" : "dark"}
                ></span>
                <span
                  onClick={() => setTheme("gOne")}
                  className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
                ></span>
                <span
                  onClick={() => setTheme("gTwo")}
                  className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
                ></span>
                <span
                  onClick={() => setTheme("gThree")}
                  className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
                ></span>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h2>Font Size</h2>
            <div className="font-size-options">
              <button
                className={fontSize === "small" ? "btn btn-active" : "btn"}
                onClick={() => updateFontSize("small")}
              >
                Small
              </button>
              <button
                className={fontSize === "medium" ? "btn btn-active" : "btn"}
                onClick={() => updateFontSize("medium")}
              >
                Medium
              </button>
              <button
                className={fontSize === "large" ? "btn btn-active" : "btn"}
                onClick={() => updateFontSize("large")}
              >
                Large
              </button>
            </div>
          </section>

          <section className="settings-section">
            <h2>Delete Account</h2>
            <button className="btn btn-danger" onClick={handleDeleteAccount}>
              Delete Account
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default Settings;
