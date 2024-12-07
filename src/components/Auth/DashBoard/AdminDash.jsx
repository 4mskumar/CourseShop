// AdminDash.js
import { useContext, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Context as AuthContext } from "../../../context/AuthContext"; // Update this line
import Header from "./Header";

const AdminDash = (props) => {
  
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [AssignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [Task, setTask] = useState({});
  const [userData, setUserData] = useContext(AuthContext);
  
  const submitHandler = (e) => {
    e.preventDefault();
  
    // Create a new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const updatedUserData = userData.map((user) => {
      if (user.firstName === AssignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          },
        };
      }
      return user;
    });
  
    // Update the context data with the modified user data
    setUserData(updatedUserData);
  
    console.log(updatedUserData);
  
    // Reset form fields
    settaskTitle("");
    settaskDescription("");
    settaskDate("");
    setAssignTo("");
    setCategory("");
  };
  

  // console.log(authData.employees); // Optional chaining to avoid errors if `authData` is null

  return (
    <div className="p-8 overflow-y-auto flex flex-col items-center h-screen">
      <Header user={props.user} changeUser={props.changeUser} />
      <div className="flex mt-5 justify-start items-center gap-3 w-full max-w-4xl">
        <IoArrowBackCircleOutline className="cursor-pointer" size={40} />
        <h1 className="text-3xl font-semibold">Create Task</h1>
      </div>
      <div className="mt-5 flex items-center flex-col w-full max-w-4xl">
        <form onSubmit={submitHandler} className="flex gap-5 flex-col w-full">
          <div>
            <p className="text-xl mb-2 font-semibold">Task Title</p>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              className="px-3 py-2 placeholder:text-sm placeholder:text-gray-400 placeholder:font-semibold bg-gray-600 rounded-[5px] w-full focus:outline-none"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <p className="text-xl mb-2 font-semibold">Description</p>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                settaskDescription(e.target.value);
              }}
              className="px-3 py-2 placeholder:text-sm placeholder:text-gray-400 placeholder:font-semibold bg-gray-600 rounded-[5px] w-full focus:outline-none"
              rows={4}
              placeholder="Write a detailed description of the task (max 500 words)"
            />
          </div>
          <div>
            <p className="text-xl mb-2 font-semibold">Date</p>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              className="px-3 py-2 placeholder:text-sm placeholder:text-gray-400 placeholder:font-semibold bg-gray-600 rounded-[5px] w-full focus:outline-none"
              type="date"
            />
          </div>
          <div>
            <p className="text-xl mb-2 font-semibold">Assign to</p>
            <select
              value={AssignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="px-3 py-2 bg-gray-600 text-black rounded-[5px] w-full focus:outline-none"
            >
              {/* Check if userData exists and map over it */}
                  <option  value='none'>
                    Select any one
                  </option>
                  <option  value='Arjun'>
                  Arjun
                  </option>
                  <option  value='Sneha'>
                  Sneha
                  </option>
                  <option  value='Ravi'>
                  Ravi
                  </option>
                  <option  value='Priya'>
                  Priya
                  </option>
                  <option  value='Karan'>
                  Karan
                  </option>
              
            </select>
          </div>
          <div>
            <p className="text-xl mb-2 font-semibold">Category</p>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="px-3 py-2 placeholder:text-sm placeholder:text-gray-400 placeholder:font-semibold bg-gray-600 rounded-[5px] w-full focus:outline-none"
              type="text"
              placeholder="Design, Development, etc..."
            />
          </div>
          <button className="w-full bg-gray-900 hover:bg-gray-950 duration-200 cursor-pointer text-xl rounded-lg font-semibold text-center py-4">
            Create Task
          </button>
        </form>
      </div>
      <section
        id="tasklist"
        className="flex flex-col gap-4 px-5 py-5 rounded-md w-full bg-gray-900 mt-5   max-w-4xl"
      >
        <div className="flex px-5 py-3 rounded-lg justify-between w-full bg-gray-800">
          <p className="text-lg w-1/3 font-semibold">Employee Name</p>
          <p className="text-lg w-1/3 font-semibold text-yellow-500">
            Active Task
          </p>
          <p className="text-lg w-1/3 font-semibold text-blue-500">New Task</p>
          <p className="text-lg w-1/3 font-semibold text-green-500">
            Completed Task
          </p>
          <p className="text-lg w-1/3 font-semibold text-red-500">
            Failed Task
          </p>
        </div>
        {userData.map((key) => {
          return (
            <div className="flex px-5 py-2 rounded-lg bg-transparent justify-between w-full border-2 border-gray-400">
              <p className="text-lg w-1/3 font-semibold">{key.firstName}</p>
              <p className="text-lg  w-1/3 font-semibold">
                {key.taskCounts.active}
              </p>
              <p className="text-lg w-1/3 font-semibold">
                {key.taskCounts.newTask}
              </p>
              <p className="text-lg w-1/3 font-semibold">
                {key.taskCounts.completed}
              </p>
              <p className="text-lg w-1/3 font-semibold">
                {key.taskCounts.failed}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AdminDash;
