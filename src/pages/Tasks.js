import { useState, useEffect } from "react";
import "../App.css";
import AddTask from "../components/AddTask";
import ShowTask from "../components/ShowTask";

function App() {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [editid, setEditid] = useState(0);
  const [showCompleted, setShowCompleted] = useState(false); // state for filtering completed tasks

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  // Handle task submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task || !category || !deadline) {
      alert("Please fill in all fields.");
      return;
    }

    const date = new Date();
    if (editid) {
      const updatedTasks = tasklist.map((t) =>
        t.id === editid
          ? { ...t, name: task, category, deadline, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
          : t
      );
      setTasklist(updatedTasks);
      setEditid(0);
    } else {
      const newTask = {
        id: date.getTime(),
        name: task,
        category,
        deadline,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        completed: false, // new tasks are incomplete by default
      };
      setTasklist([...tasklist, newTask]);
    }
    setTask("");
    setCategory("");
    setDeadline("");
  };

  // Toggle task completion status
  const handleComplete = (id) => {
    const updatedTasks = tasklist.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasklist(updatedTasks);
  };

  // Filter tasks based on completion status
  const filteredTasks = showCompleted
    ? tasklist.filter((task) => task.completed)
    : tasklist.filter((task) => !task.completed);

  return (
    <div>
      <AddTask
        handleSubmit={handleSubmit}
        editid={editid}
        task={task}
        setTask={setTask}
        category={category}
        setCategory={setCategory}
        deadline={deadline}
        setDeadline={setDeadline}
      />

      <div className="task-filters">
        <button onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? "Show Incomplete Tasks" : "Show Completed Tasks"}
        </button>
      </div>

      <div class="show-tasks-on-page">
      <ShowTask
        tasklist={filteredTasks}
        handleDelete={(id) => setTasklist(tasklist.filter((t) => t.id !== id))}
        handleEdit={(id) => {
          const taskToEdit = tasklist.find((t) => t.id === id);
          setTask(taskToEdit.name);
          setCategory(taskToEdit.category);
          setEditid(id);
        }}
        handleComplete={handleComplete} // pass the handleComplete function
      />
      </div>
    </div>
    
  );
}

export default App;
