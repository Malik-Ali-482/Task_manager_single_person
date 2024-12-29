import { useState } from "react";
import "../App.css";

const ShowTask = ({ tasklist, handleDelete, handleEdit, handleComplete }) => {
  const [showCompleted, setShowCompleted] = useState(false); // To toggle between showing completed and all tasks

  const isLate = (deadline) => {
    const currentDate = new Date();
    const taskDeadline = new Date(deadline);
    return currentDate > taskDeadline;
  };

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  // Filter tasks based on the completed flag
  const filteredTasklist = showCompleted
    ? tasklist.filter((task) => task.completed)
    : tasklist;

  return (
    <section className="showTask">
      
      {filteredTasklist.length > 0 ? (
        filteredTasklist.map((task) => (
          <div
            key={task.id}
            className={`task-card ${isLate(task.deadline) ? "late-task" : ""} ${task.completed ? "completed-task" : ""}`}
          >
            <div className="task-header">
              <h3>{task.name}</h3>
              <p className="task-category">{task.category}</p>
            </div>
            <p className="task-time">{task.time}</p>
            <p className="task-deadline">
              Deadline: {task.deadline}{" "}
              {isLate(task.deadline) && <span className="late-text">Late</span>}
            </p>
            <div className="task-actions">
              {!task.completed && (
                <>
                  <button
                    className="btn edit-btn"
                    onClick={() => handleEdit(task.id)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn complete-btn"
                    onClick={() => handleComplete(task.id)}
                  >
                    ✅ Complete
                  </button>
                </>
              )}
              <button
                className="btn delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-tasks">No tasks to show. Add a new task! 🎉</p>
      )}
    </section>
  );
};

export default ShowTask;
