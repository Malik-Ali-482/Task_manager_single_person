import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "../App.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Home = ({ tasklist }) => {
  // Helper functions for date calculations
  const isToday = (date) => new Date(date).toDateString() === new Date().toDateString();
  const isThisWeek = (date) => {
    const today = new Date();
    const taskDate = new Date(date);
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
    return taskDate >= startOfWeek && taskDate <= endOfWeek;
  };
  const isThisMonth = (date) => {
    const today = new Date();
    const taskDate = new Date(date);
    return today.getMonth() === taskDate.getMonth() && today.getFullYear() === taskDate.getFullYear();
  };

  // Calculate statistics
  const todayTasks = tasklist.filter((task) => isToday(task.deadline));
  const weekTasks = tasklist.filter((task) => isThisWeek(task.deadline));
  const monthTasks = tasklist.filter((task) => isThisMonth(task.deadline));
  const overdueTasks = tasklist.filter(
    (task) => !task.completed && new Date(task.deadline) < new Date()
  );
  const totalTasks = tasklist.length;

  // Data for Bar Chart (Task Distribution)
  const barData = {
    labels: ["Today", "This Week", "This Month"],
    datasets: [
      {
        label: "Tasks",
        data: [todayTasks.length, weekTasks.length, monthTasks.length],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };

  // Data for Pie Chart (Task Status)
  const pieData = {
    labels: ["Completed", "Pending", "Overdue"],
    datasets: [
      {
        label: "Task Status",
        data: [
          tasklist.filter((task) => task.completed).length,
          tasklist.filter((task) => !task.completed).length,
          overdueTasks.length,
        ],
        backgroundColor: ["#4BC0C0", "#FF6384", "#FF9F40"],
        hoverOffset: 4,
      },
    ],
  };

  // Group tasks by category
  const categoryCounts = tasklist.reduce((acc, task) => {
    const category = task.category || "Uncategorized"; // default to 'Uncategorized' if no category
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Data for Pie Chart (Task Distribution by Category)
  const categoryPieData = {
    labels: Object.keys(categoryCounts), // Categories as labels
    datasets: [
      {
        label: "Task Distribution by Category",
        data: Object.values(categoryCounts), // Number of tasks in each category
        backgroundColor: ["#FF9F40", "#FF6384", "#36A2EB", "#4BC0C0", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Task Manager</h1>
          <p>Organize your tasks and stay productive.</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div class="statistic-container">
         <h2>Your Statistics</h2>
         <div className="stats-overview">
            <p>Total Tasks: {totalTasks}</p>
            <p>Tasks Today: {todayTasks.length}</p>
            <p>Tasks This Week: {weekTasks.length}</p>
           <p>Tasks This Month: {monthTasks.length}</p>
            <p>Overdue Tasks: {overdueTasks.length}</p>
          </div>
        </div>
        {/* Graphs */}
        <div className="graphs">
          <div className="bar-graph">
            <h3>Tasks Distribution</h3>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
          </div>

          <div className="pie-chart">
            <h3>Task Status</h3>
            <Pie data={pieData} options={{ responsive: true, plugins: { legend: { position: "right" } } }} />
          </div>

          {/* New Category Pie Chart */}
          <div className="pie-chart">
            <h3>Task Distribution by Category</h3>
            <Pie
              data={categoryPieData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "right" },
                  title: { display: true, text: "Task Distribution by Category" },
                },
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Create and manage tasks effortlessly.</li>
          <li>Organize tasks by category and deadlines.</li>
          <li>Track your productivity with insightful stats.</li>
        </ul>
      </section>
      
    </div>
  );
};

export default Home;
