import React, { useContext, useState } from "react";
import { Context } from "../../context/AuthContext";
import Completed from "./Completed";

const AcceptTask = ({ data, failed, incrementFailedCount }) => {
  const [failedTask, setFailedTask] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [userData, setUserData] = useContext(Context);
  const handleFailed = () => {
    setFailedTask(true);
  };

  return (
    <>
      {!completed ? <div className="h-[400px] cursor-pointer hover:scale-[1.02] duration-200 ease-in w-[400px] flex-shrink-0 p-5 rounded-xl bg-gray-600 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-end">
            <p className="bg-red-500 font-semibold text-sm w-fit px-2 rounded-md py-[2px]">
              {data.category}
            </p>
            <p className="text font-semibold">{data.taskDate}</p>
          </div>
          <p className="mt-5 font-bold text-xl">{data.taskTitle}</p>
          <p className="mt-4 text-[15px]">{data.taskDescription}</p>
        </div>
        {!failedTask && (
          <div className="flex gap-3 mt-5">
            <button
              onClick={() => setCompleted((prev) => !prev)}
              className="bg-green-400 hover:scale-[1.07] transition-all duration-200 ease-in py-1 px-3 w-full font-medium text-black rounded-lg"
            >
              Mark as completed
            </button>
            <button
              onClick={handleFailed}
              className="bg-red-400 hover:scale-[1.07] transition-all duration-200 ease-in py-1 px-3 w-full font-medium text-white rounded-lg"
            >
              Mark as failed
            </button>
          </div>
        )}
        {failedTask && (
          <div className="bg-red-500 px-9 py-4 rounded-lg">
            <p className="text-xl font-bold">{data.taskTitle}</p>
            <p className="mt-5 text-lg font-semibold">
              Failed:{" "}
              <span className="text-sm ">
                Unable to complete due to deadline or marking
              </span>
            </p>
          </div>
        )}
      </div>
      :
      <Completed 
      data = {data}
      />
      }
    </>
  );
};

export default AcceptTask;
