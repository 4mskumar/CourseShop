import React from "react";

const NewTask = ({data}) => {
  return (
    <div>
      <div className="h-[400px] cursor-pointer hover:scale-[1.02] duration-200 ease-in w-[400px] flex-shrink-0 p-5 rounded-xl bg-yellow-400">
        <div className="flex text-black justify-between items-end">
          <p className="bg-red-500 font-semibold text-black text-sm w-fit px-2 rounded-md py-[2px]">
          {data.category}
          </p>
          <p className="text text-black font-semibold">{data.taskDate}</p>
        </div>
        <p className="mt-5 font-bold text-black text-xl">
        {data.taskTitle}
        </p>
        <p className="mt-4 text-[15px] text-black">
        {data.taskDescription}
        </p>
        {/* <button></button> */}
        <div className="flex justify-center gap-4 mt-[11rem]">
          <button className="bg-green-400 hover:scale-[1.07] transition-all duration-200 ease-in py-1 px-3 w-full font-medium text-black rounded-lg ">
            Accept
          </button>
          <button className="bg-red-400 hover:scale-[1.07] transition-all duration-200 ease-in py-1 px-3 w-full font-medium rounded-lg  text-black">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
