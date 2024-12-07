import React from "react";

const Failed = ({data}) => {
  return (
    <div>
      <div className="h-[400px] cursor-pointer hover:scale-[1.02] duration-200 ease-in w-[400px] flex-shrink-0 p-5 rounded-xl bg-red-600">
        <div className="flex justify-between items-end">
          <p className="bg-red-500 font-semibold text-sm w-fit px-2 rounded-md py-[2px]">
          {data.category}
          </p>
          <p className="text font-semibold">{data.taskDate}</p>
        </div>
        <p className="mt-5 font-bold text-xl">{data.taskTitle}</p>
        <p className="mt-4 text-[15px]">
        {data.taskDescription}
        </p>
        {/* <button></button> */}
        <button className='bg-red-400 hover:scale-[1.07] transition-all duration-200 ease-in py-1 rounded-lg mt-[11rem] w-full'>Failed</button>

      </div>
    </div>
  );
};

export default Failed;
