const AddTask = ({ handleSubmit, editid, task, setTask, category, setCategory, deadline, setDeadline }) => {
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="task" 
          value={task} 
          autoComplete="off" 
          placeholder="Add task" 
          maxLength="25" 
          onChange={(e) => setTask(e.target.value)} 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">{editid ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
