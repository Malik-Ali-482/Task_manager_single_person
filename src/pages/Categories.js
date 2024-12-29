import React, { useState, useEffect } from 'react';
import ShowTask from '../components/ShowTask';

const Categories = ({ tasklist }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState(tasklist);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = ['Work', 'Personal', 'Shopping', 'Health', 'Education'];

  const filterByTimeRange = (task, timeRange) => {
    const currentDate = new Date();
    const taskDate = new Date(task.deadline);
    switch (timeRange) {
      case 'Today':
        return taskDate.toDateString() === currentDate.toDateString();
      case 'Tomorrow':
        currentDate.setDate(currentDate.getDate() + 1);
        return taskDate.toDateString() === currentDate.toDateString();
      case 'This Week':
        const startOfWeek = currentDate.getDate() - currentDate.getDay();
        const endOfWeek = startOfWeek + 6;
        const startOfWeekDate = new Date(currentDate.setDate(startOfWeek));
        const endOfWeekDate = new Date(currentDate.setDate(endOfWeek));
        return taskDate >= startOfWeekDate && taskDate <= endOfWeekDate;
      case 'This Month':
        return (
          taskDate.getMonth() === currentDate.getMonth() &&
          taskDate.getFullYear() === currentDate.getFullYear()
        );
      case 'All':
      default:
        return true;
    }
  };

  useEffect(() => {
    let filtered = tasklist;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(task =>
        selectedCategories.some(category => task.category === category)
      );
    }

    filtered = filtered.filter(task => filterByTimeRange(task, selectedTimeRange));
    setFilteredTasks(filtered);
  }, [selectedCategories, selectedTimeRange, tasklist]);

  const handleCategoryChange = event => {
    const category = event.target.value;
    setSelectedCategories(prevCategories => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(cat => cat !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleTimeRangeChange = event => {
    setSelectedTimeRange(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="categories">
      <h2>Filter Tasks</h2>

      {/* Category Dropdown Filter */}
      <div className="category-filter">
        <label>Select Categories:</label>
        <button onClick={toggleDropdown} className="dropdown-button">
          Categories {isDropdownOpen ? '▲' : '▼'}
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            {categories.map(category => (
              <div key={category} className="checkbox-item">
                <input
                  type="checkbox"
                  id={category}
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Time Filter */}
      <div className="time-filter">
        <label htmlFor="time-select">Select Time Range:</label>
        <select
          id="time-select"
          value={selectedTimeRange}
          onChange={handleTimeRangeChange}
        >
          <option value="All">All</option>
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
        </select>
      </div>

      {/* Filtered Tasks */}
      <div className="filtered-tasks">
        {filteredTasks.length > 0 ? (
          <ShowTask tasklist={filteredTasks} />
        ) : (
          <p>No tasks found for the selected filters.</p>
        )}
      </div>
    </section>
  );
};

export default Categories;
