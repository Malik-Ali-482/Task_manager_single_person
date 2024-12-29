import Home from "./pages/Home";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./pages/Tasks";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Settings from "./pages/Settings";
import Footer from "./components/Footer"; // Import Footer component

function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [theme, setTheme] = useState("light");

  // State for user credentials
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Save user details in localStorage whenever updated
  const updateUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header theme={theme} setTheme={setTheme}>Task Manager</Header>
        <Routes>
          <Route path="/" element={<Home tasklist={tasklist} />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/categories" element={<Categories tasklist={tasklist} />} />
          <Route
            path="/settings"
            element={
              <Settings
                theme={theme}
                setTheme={setTheme}
                user={user}
                setUser={updateUser}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer /> {/* Footer added here */}
      </div>
    </Router>
  );
}

export default App;
