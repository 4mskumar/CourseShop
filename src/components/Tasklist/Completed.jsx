import React, { useState } from "react";

const Completed = ({ data }) => {

  return (
    <div>
      <div className="h-[400px] cursor-pointer hover:scale-[1.02] flex flex-col justify-between duration-200 ease-in w-[400px] flex-shrink-0 p-5 rounded-xl bg-green-800">
        <div className="flex justify-between items-end">
          <p className="bg-red-500 font-semibold text-sm w-fit px-2 rounded-md py-[2px]">
            {data.category}
          </p>
          <p className="text font-semibold">{data.taskDate}</p>
        </div>
        <p className="mt-5 font-bold text-xl">{data.taskTitle}</p>
        <p className="mt-4 text-[15px]">{data.taskDescription}</p>
        <button
          onClick={() => setCompleted((prev) => !prev)}
          className="bg-green-400 py-1 hover:scale-[1.07] transition-all duration-200 ease-in rounded-lg mt-[13.5rem] w-full"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Completed;
